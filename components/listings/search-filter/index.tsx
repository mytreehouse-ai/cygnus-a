"use client";

import React from "react";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import { Search as SearchIcon, Map } from "lucide-react";
import { createSearchParams } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { useState } from "react";
import type { IModal } from "@/types";
import ReactSelect from "@/components/global/react-select";
import { propertyTypes } from "@/static_data/property-types";
import { listingTypes } from "@/static_data/listing-types";
import { MultiSlider } from "@/components/global/multi-slider";
import { formatCurrency } from "@/lib/utils";
import useCitiesQuery from "@/services/useCitiesQuery";

interface FilterDrawerProps extends IModal {
  citiesOptions: {
    label: string;
    value: number;
  }[];
}

const FilterDrawer = ({ open, onClose, citiesOptions }: FilterDrawerProps) => {
  const [priceRange, setPriceRange] = useState<number[]>([0, 1000000000]);
  const [sqm, setSqm] = useState<number[]>([0, 10000]);
  const router = useRouter();
  const searchParams = useSearchParams();

  const propertyFilterForms = useForm({
    values: {
      location: searchParams?.has("location")
        ? parseInt(searchParams.get("location") ?? "0")
        : undefined,
      "listing-type": searchParams?.has("listing-type")
        ? parseInt(searchParams.get("listing-type") ?? "0")
        : undefined,
      bedroom: searchParams?.has("bedroom")
        ? parseInt(searchParams.get("bedroom") ?? "0")
        : undefined,
      bathroom: searchParams?.has("bathroom")
        ? parseInt(searchParams.get("bathroom") ?? "0")
        : undefined,
    },
  });

  const onSubmit = () => {
    const searchValue = propertyFilterForms.watch();
    const searchParams = createSearchParams(searchValue);

    if (searchParams && searchParams.size) {
      router.replace(window.location.pathname + "?" + searchParams.toString(), {
        scroll: false,
      });
    }

    void onClose();
  };

  return (
    <Drawer open={open} onClose={onClose}>
      <DrawerContent className="flex items-center justify-center py-4">
        <Form {...propertyFilterForms}>
          <form
            name="search-property-form"
            onSubmit={propertyFilterForms.handleSubmit(onSubmit)}
            className="lg: my-8 mt-8 space-y-3"
          >
            <ReactSelect
              data={propertyTypes}
              name="propertyType"
              placeholder="Property Type"
              className="md:hidden"
            />
            <ReactSelect
              data={citiesOptions ?? []}
              name="location"
              placeholder="Location"
              className="lg:hidden"
            />
            <ReactSelect
              data={listingTypes}
              name="listing-type"
              placeholder="Listing Type"
            />
            <div className="flex gap-x-2">
              <FormField
                control={propertyFilterForms.control}
                name="bedroom"
                render={({ field }) => (
                  <FormItem className="w-auto md:w-full">
                    <FormControl>
                      <Input
                        placeholder="No. Bedroom"
                        {...field}
                        value={field.value}
                        className="w-full rounded-lg text-sm md:w-full"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={propertyFilterForms.control}
                name="bathroom"
                render={({ field }) => (
                  <FormItem className="w-auto md:w-full">
                    <FormControl>
                      <Input
                        placeholder="No. Bathroom"
                        {...field}
                        value={field.value}
                        className="w-full rounded-lg text-sm md:w-full"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div>
              <label
                htmlFor="max_price"
                className=" leading-nonepeer-disabled:cursor-not-allowed  space-x-2 font-medium peer-disabled:opacity-70"
              >
                <span>Price</span>
                <span className="text-sm text-slate-500">
                  {formatCurrency(priceRange[0])} -{" "}
                  {formatCurrency(priceRange[1])}
                </span>
              </label>
              <MultiSlider
                max={1_000_000_000}
                min={0}
                step={1}
                withoutLabel={true}
                minStepsBetweenThumbs={100_000_000}
                onValueChange={(values) => {
                  setPriceRange(values);
                }}
                className="mt-2"
              />
            </div>

            <div className="mt-2">
              <label
                htmlFor="max_price"
                className=" leading-nonepeer-disabled:cursor-not-allowed  space-x-2 font-medium peer-disabled:opacity-70"
              >
                <span>Size</span>
                <span className="text-sm text-slate-500">
                  {sqm[0]} - {sqm[1]} sqm
                </span>
              </label>
              <MultiSlider
                max={10000}
                min={0}
                step={1}
                withoutLabel={true}
                minStepsBetweenThumbs={1}
                onValueChange={(values) => {
                  setSqm(values);
                }}
                className="mt-2"
              />
            </div>
            <Button className="order-2 w-full rounded-lg bg-emerald-600 hover:bg-emerald-700 focus:bg-emerald-600 active:bg-emerald-600 md:order-1">
              Apply Filters
            </Button>
            <Button className="order-3 w-full rounded-lg" variant="outline">
              Reset
            </Button>
          </form>
        </Form>
      </DrawerContent>
    </Drawer>
  );
};

function SearchFilter() {
  const [filterDrawerIsOpen, setFilterDrawerIsOpen] = useState(false);
  const [page, setPage] = useState(1);

  const searchParams = useSearchParams();

  const router = useRouter();

  //TODO: FIX DUPLICATE DATA ON FIRST FETCH ISSUE
  const { fetchNextPage, data, isFetching } = useCitiesQuery({
    page: page,
    page_size: 20,
  });

  const citiesOptions =
    data?.pages.flatMap((page) =>
      page.results.map((city) => ({
        value: city.id,
        label: city.name,
      })),
    ) ?? [];

  const propertySearchFilterForm = useForm<{
    search?: string | null;
    location?: string;
    propertyType?: number;
  }>({
    mode: "all",
    values: {
      search: searchParams?.get("search") ?? "",
      propertyType: searchParams?.has("propertyType")
        ? parseInt(searchParams.get("propertyType") ?? "0")
        : undefined,
    },
  });

  function onSubmit(data: {
    search?: string | null;
    location?: string;
    propertyType?: number;
  }) {
    const params = {
      ...data,
      page: 1,
      pageSize: 12,
    };

    const searchParams = createSearchParams(params);

    if (searchParams && searchParams.size) {
      router.replace(window.location.pathname + "?" + searchParams.toString(), {
        scroll: false,
      });
    }
  }

  const handleScrolledToBottom = () => {
    if (!isFetching) {
      setPage((e) => e + 1);
      fetchNextPage();
    }
  };

  function handleFilterButtonClick() {
    setFilterDrawerIsOpen(true);
  }

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

          <ReactSelect
            data={propertyTypes}
            name="propertyType"
            placeholder="Property Type"
            className="hidden md:block"
          />

          <ReactSelect
            data={citiesOptions}
            name="location"
            placeholder="Location"
            className="hidden lg:block"
            onMenuScrollToBottom={handleScrolledToBottom}
          />

          <div className="flex justify-evenly gap-x-2">
            <Button
              type="button"
              className="order-1 w-full rounded-lg md:order-2"
              variant="outline"
              onClick={handleFilterButtonClick}
            >
              <SlidersHorizontal className="h-4 w-4 text-slate-500" />
            </Button>
            <Button
              type="submit"
              className="order-2 w-full rounded-lg bg-emerald-600 hover:bg-emerald-700 focus:bg-emerald-600 active:bg-emerald-600 md:order-1"
            >
              <SearchIcon className="h-4 w-4" />
            </Button>
            <Button className="order-3 w-full rounded-lg" variant="outline">
              <Map className="h-4 w-4 text-slate-500" />
            </Button>
          </div>
        </form>
      </Form>
      <FilterDrawer
        open={filterDrawerIsOpen}
        onClose={() => setFilterDrawerIsOpen(false)}
        citiesOptions={citiesOptions}
      />
    </div>
  );
}

export default SearchFilter;
