"use client";

import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import { Search, Map } from "lucide-react";

const SearchFilter = () => {
  const propertySearchFilterForm = useForm();

  const onSubmit = () => {
    propertySearchFilterForm.setValue("type", " for-rent");
    console.log(propertySearchFilterForm.getValues());
  };

  return (
    <div className="px-4">
      <Form {...propertySearchFilterForm}>
        <form
          name="search-property-form"
          onSubmit={propertySearchFilterForm.handleSubmit(onSubmit)}
          className="mt-4 w-full space-y-2 md:mt-0 md:flex md:items-center md:space-x-2 md:space-y-0"
        >
          <FormField
            control={propertySearchFilterForm.control}
            name="search"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Search Property"
                    {...field}
                    value={field.value ?? ""}
                    className="rounded-lg text-sm"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex justify-evenly gap-x-2">
            <Button className="w-full rounded-lg" variant="outline">
              <SlidersHorizontal className="h-4 w-4 text-slate-500" />
            </Button>
            <Button className="w-full rounded-lg bg-emerald-600 hover:bg-emerald-700 focus:bg-emerald-600 active:bg-emerald-600">
              <Search className="h-4 w-4 " />
            </Button>
            <Button className="w-full rounded-lg" variant="outline">
              <Map className="h-4 w-4 text-slate-500" />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SearchFilter;
