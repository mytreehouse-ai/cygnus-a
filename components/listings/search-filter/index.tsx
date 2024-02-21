"use client";

import React from "react";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import { Search, Map } from "lucide-react";
import { createSearchParams } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const SearchFilter = () => {
  const searchParams = useSearchParams();

  const propertySearchFilterForm = useForm({
    values: {
      search: searchParams?.has("search") ? searchParams.get("search") : "",
    },
  });

  const router = useRouter();

  const onSubmit = () => {
    const searchValue = propertySearchFilterForm.watch();
    const searchParams = createSearchParams(searchValue);

    if (searchParams && searchParams.size) {
      router.replace(window.location.pathname + "?" + searchParams.toString(), {
        scroll: false,
      });
    }
    console.log(searchValue);
  };

  return (
    <div className="px-4">
      <Form {...propertySearchFilterForm}>
        <form
          name="search-property-form"
          onSubmit={propertySearchFilterForm.handleSubmit(onSubmit)}
          className="mt-4 w-full space-y-2 md:flex md:items-center md:justify-stretch md:gap-x-2 md:space-y-0"
        >
          <FormField
            control={propertySearchFilterForm.control}
            name="search"
            render={({ field }) => (
              <FormItem className="w-auto md:w-full">
                <FormControl>
                  <Input
                    placeholder="Search Property"
                    {...field}
                    value={field.value ?? ""}
                    className="w-full rounded-lg text-sm md:w-full"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex justify-evenly gap-x-2">
            <Button
              className="order-1 w-full rounded-lg md:order-2"
              variant="outline"
            >
              <SlidersHorizontal className="h-4 w-4 text-slate-500" />
            </Button>
            <Button className="order-2 w-full rounded-lg bg-emerald-600 hover:bg-emerald-700 focus:bg-emerald-600 active:bg-emerald-600 md:order-1">
              <Search className="h-4 w-4" />
            </Button>
            <Button className="order-3 w-full rounded-lg" variant="outline">
              <Map className="h-4 w-4 text-slate-500" />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SearchFilter;
