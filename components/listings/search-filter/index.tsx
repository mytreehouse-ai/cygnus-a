"use client";

import React, { Suspense } from "react";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import { Search as SearchIcon, Map } from "lucide-react";
import { createSearchParams } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";
import type { IModal } from "@/types";
import ReactSelect from "@/components/global/react-select";
import { propertyTypes } from "@/components/search-bar";
import { location } from "@/components/search-bar";
import { MultiSlider } from "@/components/global/multi-slider";

function SearchFilter() {
  const searchParams = useSearchParams();
  const [filterDrawerIsOpen, setFilterDrawerIsOpen] = useState(false);

  const propertySearchFilterForm = useForm({
    values: {
      search: searchParams?.has("search") ? searchParams.get("search") : "",
    },
  });

  const router = useRouter();

  function onSubmit() {
    const searchValue = propertySearchFilterForm.watch();
    const searchParams = createSearchParams(searchValue);

    if (searchParams && searchParams.size) {
      router.replace(window.location.pathname + "?" + searchParams.toString(), {
        scroll: false,
      });
    }
  }

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
          <div className="flex justify-evenly gap-x-2">
            <Button
              className="order-1 w-full rounded-lg md:order-2"
              variant="outline"
              onClick={handleFilterButtonClick}
            >
              <SlidersHorizontal className="h-4 w-4 text-slate-500" />
            </Button>
            <Button className="order-2 w-full rounded-lg bg-emerald-600 hover:bg-emerald-700 focus:bg-emerald-600 active:bg-emerald-600 md:order-1">
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
      />
    </div>
  );
}

interface FilterDrawerProps extends IModal {}

const FilterDrawer = ({ open, onClose }: FilterDrawerProps) => {
  const router = useRouter();

  const propertyFilterForms = useForm();

  const onSubmit = () => {
    const searchValue = propertyFilterForms.watch();
    const searchParams = createSearchParams(searchValue);

    if (searchParams && searchParams.size) {
      router.replace(window.location.pathname + "?" + searchParams.toString(), {
        scroll: false,
      });
    }
  };

  return (
    <Drawer open={open} onClose={onClose}>
      <DrawerContent className="flex items-center justify-center py-4">
        <Form {...propertyFilterForms}>
          <form
            name="search-property-form"
            onSubmit={propertyFilterForms.handleSubmit(onSubmit)}
            className="mt-8 space-y-2"
          >
            <ReactSelect
              data={propertyTypes}
              name="property-types"
              placeholder="Property Type"
            />
            <ReactSelect
              data={location}
              name="location"
              placeholder="Location"
            />
            <ReactSelect
              data={[]}
              name="listing-types"
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

            <div className="mt-2">
              <label
                htmlFor="max_price"
                className=" leading-nonepeer-disabled:cursor-not-allowed  font-medium peer-disabled:opacity-70"
              >
                Price
              </label>
              <MultiSlider
                max={1_000_000_000}
                min={0}
                step={1}
                withoutLabel={true}
                minStepsBetweenThumbs={100_000_000}
                onValueChange={(values) => {
                  console.log(values);
                }}
                className="mt-2"
              />
            </div>

            <div className="mt-2">
              <label
                htmlFor="max_price"
                className=" leading-nonepeer-disabled:cursor-not-allowed  font-medium peer-disabled:opacity-70"
              >
                Size
              </label>
              <MultiSlider
                max={1_000_000_000}
                min={0}
                step={1}
                withoutLabel={true}
                minStepsBetweenThumbs={100_000_000}
                onValueChange={(values) => {
                  console.log(values);
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

export function Search() {
  return (
    <Suspense>
      <SearchFilter />
    </Suspense>
  );
}
