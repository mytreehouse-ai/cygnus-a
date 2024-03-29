"use client";

import React, { useEffect } from "react";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import { Search as SearchIcon, Map } from "lucide-react";
import { createSearchParams, getParams } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { useState } from "react";
import { Modal } from "@/types";
import ReactSelect from "@/components/global/react-select";
import { propertyTypes } from "@/static_data/property-types";
import { listingTypes } from "@/static_data/listing-types";
import { MultiSlider } from "@/components/global/multi-slider";
import useCitiesQuery from "@/hooks/useCitiesQuery";

interface FilterDrawerProps extends Modal {
  citiesOptions: {
    label: string;
    value: string;
  }[];
}

const propertyFiltersSchema = z
  .object({
    search: z.string(),
    ordering: z.string(),
    page: z.preprocess(
      (val) => (isNaN(Number(val)) ? 0 : Number(val)),
      z.number(),
    ),
    page_size: z.preprocess(
      (val) => (isNaN(Number(val)) ? 0 : Number(val)),
      z.number(),
    ),
    property_type: z.string(),
    listing_type: z.string(),
    property_status: z.preprocess(
      (val) => (isNaN(Number(val)) ? 0 : Number(val)),
      z.number(),
    ),
    price_min: z.preprocess(
      (val) => (isNaN(Number(val)) ? 0 : Number(val)),
      z.number(),
    ),
    price_max: z.preprocess(
      (val) => (isNaN(Number(val)) ? 0 : Number(val)),
      z.number(),
    ),
    lot_size_min: z.preprocess(
      (val) => (isNaN(Number(val)) ? 0 : Number(val)),
      z.number(),
    ),
    lot_size_max: z.preprocess(
      (val) => (isNaN(Number(val)) ? 0 : Number(val)),
      z.number(),
    ),
    floor_size_min: z.preprocess(
      (val) => (isNaN(Number(val)) ? 0 : Number(val)),
      z.number(),
    ),
    floor_size_max: z.preprocess(
      (val) => (isNaN(Number(val)) ? 0 : Number(val)),
      z.number(),
    ),
    building_size_min: z.preprocess(
      (val) => (isNaN(Number(val)) ? 0 : Number(val)),
      z.number(),
    ),
    building_size_max: z.preprocess(
      (val) => (isNaN(Number(val)) ? 0 : Number(val)),
      z.number(),
    ),
    num_bedrooms_min: z.preprocess(
      (val) => (isNaN(Number(val)) ? 0 : Number(val)),
      z.number(),
    ),
    num_bedrooms_max: z.preprocess(
      (val) => (isNaN(Number(val)) ? 0 : Number(val)),
      z.number(),
    ),
    num_bathrooms_min: z.preprocess(
      (val) => (isNaN(Number(val)) ? 0 : Number(val)),
      z.number(),
    ),
    num_bathrooms_max: z.preprocess(
      (val) => (isNaN(Number(val)) ? 0 : Number(val)),
      z.number(),
    ),
    num_carspaces_min: z.preprocess(
      (val) => (isNaN(Number(val)) ? 0 : Number(val)),
      z.number(),
    ),
    num_carspaces_max: z.preprocess(
      (val) => (isNaN(Number(val)) ? 0 : Number(val)),
      z.number(),
    ),
    location: z.string(),
    indoor_features: z.string(),
    outdoor_features: z.string(),
    other_features: z.string(),
  })
  .partial();

const FilterDrawer = ({ open, onClose, citiesOptions }: FilterDrawerProps) => {
  const [sqm, setSqm] = useState<number[]>([1, 10000]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const propertyFilterForms = useForm<z.infer<typeof propertyFiltersSchema>>({
    resolver: zodResolver(propertyFiltersSchema),
  });

  useEffect(() => {
    if (searchParams.size > 0) {
      searchParams.forEach((value, key) => {
        propertyFilterForms.setValue(
          key as keyof z.infer<typeof propertyFiltersSchema>,
          value,
        );
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = (data: z.infer<typeof propertyFiltersSchema>) => {
    const currentQuerySearchParamsEntries = Object.fromEntries(
      searchParams.entries(),
    );
    const updatedSearchParams = createSearchParams({
      ...currentQuerySearchParamsEntries,
      ...data,
    });

    if (updatedSearchParams) {
      router.replace(
        window.location.pathname + "?" + updatedSearchParams.toString(),
        {
          scroll: false,
        },
      );
    }

    void onClose();
  };

  const onResetFilters = () => {
    propertyFilterForms.reset();
    void onClose();
    void router.replace(window.location.pathname);
  };

  return (
    <Drawer open={open} onClose={onClose}>
      <DrawerContent className="flex items-center justify-center py-4">
        <Form {...propertyFilterForms}>
          <form
            name="search-property-form"
            onSubmit={propertyFilterForms.handleSubmit(onSubmit)}
            className="mt-8 w-full space-y-3 px-4 lg:my-8 lg:w-2/6"
          >
            <ReactSelect
              data={propertyTypes}
              name="property_type"
              placeholder="Property Type"
              className="md:hidden"
              onClear={() => {
                propertyFilterForms.resetField("property_type", undefined);
                const params = new URLSearchParams(getParams(searchParams));
                params.delete("property_type");
                router.replace(
                  window.location.pathname + "?" + params.toString(),
                  {
                    scroll: false,
                  },
                );
              }}
            />
            <ReactSelect
              data={citiesOptions ?? []}
              name="location"
              placeholder="Location"
              className="lg:hidden"
              onClear={() => {
                propertyFilterForms.resetField("location", undefined);
                const params = new URLSearchParams(getParams(searchParams));
                params.delete("location");
                router.replace(
                  window.location.pathname + "?" + params.toString(),
                  {
                    scroll: false,
                  },
                );
              }}
            />
            <ReactSelect
              data={listingTypes}
              name="listing_type"
              placeholder="Listing Type"
              onClear={() => {
                propertyFilterForms.resetField("listing_type", undefined);
                const params = new URLSearchParams(getParams(searchParams));
                params.delete("listing_type");
                router.replace(
                  window.location.pathname + "?" + params.toString(),
                  {
                    scroll: false,
                  },
                );
              }}
            />
            {!["Warehouse", "land"].includes(
              searchParams?.get("property_type") ?? "",
            ) && (
              <div className="flex w-full gap-x-2">
                <FormField
                  control={propertyFilterForms.control}
                  name="num_bedrooms_max"
                  render={({ field }) => (
                    <FormItem className="w-auto md:w-full">
                      <FormControl>
                        <Input
                          placeholder="No. Bedroom"
                          {...field}
                          value={field.value}
                          className="w-full rounded-lg text-sm md:w-full"
                          type="number"
                          inputMode="numeric"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={propertyFilterForms.control}
                  name="num_bathrooms_max"
                  render={({ field }) => (
                    <FormItem className="w-auto md:w-full">
                      <FormControl>
                        <Input
                          placeholder="No. Bathroom"
                          {...field}
                          value={field.value}
                          className="w-full rounded-lg text-sm md:w-full"
                          type="number"
                          inputMode="numeric"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            )}
            <div className="flex w-full items-center gap-x-2">
              <div className="w-full">
                <label
                  htmlFor="price_min"
                  className=" leading-nonepeer-disabled:cursor-not-allowed  space-x-2 font-medium peer-disabled:opacity-70"
                >
                  <span>Price</span>
                </label>
                <FormField
                  control={propertyFilterForms.control}
                  name="price_min"
                  render={({ field }) => (
                    <FormItem className="w-auto md:w-full">
                      <FormControl>
                        <Input
                          placeholder="Minimum"
                          {...field}
                          value={field.value}
                          className="w-full rounded-lg text-sm md:w-full"
                          type="number"
                          inputMode="numeric"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="price_max"
                  className=" leading-nonepeer-disabled:cursor-not-allowed  space-x-2 font-medium peer-disabled:opacity-70"
                >
                  <span className="invisible">Price</span>
                </label>
                <FormField
                  control={propertyFilterForms.control}
                  name="price_max"
                  render={({ field }) => (
                    <FormItem className="w-auto md:w-full">
                      <FormControl>
                        <Input
                          placeholder="Maximum"
                          {...field}
                          value={field.value}
                          className="w-full rounded-lg text-sm md:w-full"
                          type="number"
                          inputMode="numeric"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="mt-2 w-full">
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
                value={sqm}
                onValueChange={(values) => {
                  setSqm(values);
                  propertyFilterForms.setValue(
                    (() => {
                      switch (searchParams?.get("property_type")) {
                        case "Warehouse":
                          return "building_size_min";
                        case "Land":
                          return "lot_size_min";
                        default:
                          return "floor_size_min";
                      }
                    })(),
                    values[0],
                  );
                  propertyFilterForms.setValue(
                    (() => {
                      switch (searchParams?.get("property_type")) {
                        case "Warehouse":
                          return "building_size_max";
                        case "Land":
                          return "lot_size_max";
                        default:
                          return "floor_size_max";
                      }
                    })(),
                    values[1],
                  );
                }}
                className="mt-2"
              />
            </div>
            <Button className="order-2 w-full rounded-lg bg-emerald-600 hover:bg-emerald-700 focus:bg-emerald-600 active:bg-emerald-600 md:order-1">
              Apply Filters
            </Button>
            <Button
              className="order-3 w-full rounded-lg"
              variant="outline"
              type="reset"
              onClick={onResetFilters}
            >
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
  const searchParams = useSearchParams();
  const router = useRouter();
  const { data, isFetching } = useCitiesQuery();

  const propertySearchFilterForm = useForm<
    z.infer<typeof propertyFiltersSchema>
  >({
    resolver: zodResolver(propertyFiltersSchema),
  });

  useEffect(() => {
    if (searchParams.size > 0) {
      searchParams.forEach((value, key) => {
        propertySearchFilterForm.setValue(
          key as keyof z.infer<typeof propertyFiltersSchema>,
          value,
        );
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onSubmit(data: z.infer<typeof propertyFiltersSchema>) {
    const currentQuerySearchParamsEntries = Object.fromEntries(
      searchParams.entries(),
    );

    const updatedSearchParams = createSearchParams({
      ...currentQuerySearchParamsEntries,
      ...data,
    });

    if (updatedSearchParams) {
      router.replace(
        window.location.pathname + "?" + updatedSearchParams.toString(),
        {
          scroll: false,
        },
      );
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

          <ReactSelect
            data={propertyTypes}
            name="property_type"
            placeholder="Property Type"
            className="hidden md:block"
            onClear={() => {
              const params = new URLSearchParams(getParams(searchParams));
              params.delete("property_type");
              router.replace(
                window.location.pathname + "?" + params.toString(),
                {
                  scroll: false,
                },
              );
            }}
            isLoading={isFetching}
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
            className="hidden lg:block"
            onClear={() => {
              const params = new URLSearchParams(getParams(searchParams));
              params.delete("location");
              router.replace(
                window.location.pathname + "?" + params.toString(),
                {
                  scroll: false,
                },
              );
            }}
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
        citiesOptions={
          data?.map((city) => ({
            value: city.slug,
            label: city.name,
          })) ?? []
        }
      />
    </div>
  );
}

export default SearchFilter;
