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

const SearchFilter = () => {
  const searchParams = useSearchParams();
  const [filterDrawerIsOpen, setFilterDrawerIsOpen] = useState(false);

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
  };

  const handleFilterButtonClick = () => {
    setFilterDrawerIsOpen(true);
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
              onClick={handleFilterButtonClick}
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
      <FilterDrawer
        open={filterDrawerIsOpen}
        onClose={() => setFilterDrawerIsOpen(false)}
      />
    </div>
  );
};

export default SearchFilter;

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
      <DrawerContent className="p-4">
        <Form {...propertyFilterForms}>
          <form
            name="search-property-form"
            onSubmit={propertyFilterForms.handleSubmit(onSubmit)}
            className="mt-12 w-full space-y-2 md:flex md:items-center md:justify-stretch md:gap-x-2 md:space-y-0"
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
                        placeholder="Bedroom"
                        {...field}
                        value={field.value ?? ""}
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
                        placeholder="Bathroom"
                        {...field}
                        value={field.value ?? ""}
                        className="w-full rounded-lg text-sm md:w-full"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </form>
        </Form>
        {/* <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter> */}
      </DrawerContent>
    </Drawer>
  );
};
