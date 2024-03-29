"use client";

import React, { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Search } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import ReactSelect from "@/components/global/react-select";
import useCitiesQuery from "@/hooks/useCitiesQuery";
import { propertyTypes } from "@/static_data/property-types";
import { useRouter } from "next/navigation";
import { createSearchParams } from "@/lib/utils";
import { PropertyFilters } from "@/types";

function SearchBar() {
  const router = useRouter();

  const form =
    useForm<
      Pick<PropertyFilters, "listing_type" | "property_type" | "location">
    >();

  const { data, isFetching } = useCitiesQuery();

  useEffect(() => {
    form.setValue("listing_type", "for-rent");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onSubmit(
    data: Pick<PropertyFilters, "listing_type" | "property_type" | "location">,
  ) {
    const createdSearchParams = createSearchParams(data);

    if (createdSearchParams) {
      router.replace(
        `${window.location.origin}/listings?` + createdSearchParams.toString(),
        {
          scroll: false,
        },
      );
    }
  }

  return (
    <Tabs
      defaultValue="for-rent"
      onValueChange={(e) => form.setValue("listing_type", e)}
    >
      <TabsList className="h-0 p-0 ">
        <TabsTrigger
          value="for-rent"
          className="rounded-b-none rounded-br-none rounded-tl-md rounded-tr-none bg-slate-200 px-6 text-neutral-900 data-[state=active]:bg-emerald-700 data-[state=active]:text-white"
        >
          For Rent
        </TabsTrigger>
        <TabsTrigger
          value="for-sale"
          className="rounded-b-none rounded-bl-none rounded-tl-none rounded-tr-md bg-slate-200 px-6 text-neutral-900 data-[state=active]:bg-emerald-700 data-[state=active]:text-white"
        >
          For Sale
        </TabsTrigger>
      </TabsList>

      <Card className="mt-1 rounded-tl-none border-none p-4 shadow-none">
        <Form {...form}>
          <form
            name="search-property-form"
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-4 w-full space-y-2 md:mt-0 md:flex md:items-center md:space-x-2 md:space-y-0"
          >
            <ReactSelect
              data={propertyTypes}
              name="property_type"
              placeholder="Property Type"
            />

            <ReactSelect
              data={
                data?.map((city) => ({
                  value: city.slug,
                  label: city.name,
                })) ?? []
              }
              name="location"
              placeholder="Location"
              isLoading={isFetching}
            />

            <Button
              type="submit"
              size="sm"
              className="inline-flex w-full gap-x-2 bg-emerald-600 text-sm font-normal hover:bg-emerald-600/90"
            >
              Find Listing
              <Search className="h-4 w-4" />
            </Button>
          </form>
        </Form>
      </Card>
    </Tabs>
  );
}
export default SearchBar;
