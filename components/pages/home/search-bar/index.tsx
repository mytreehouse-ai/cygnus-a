"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { useForm } from "react-hook-form";
import { Search } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const propertyTypes = [
  {
    label: "Condominium",
    value: "condominium",
  },
  {
    label: "Apartment",
    value: "apartment",
  },
  {
    label: "Warehouse",
    value: "warehouse",
  },
];

const location = [
  {
    label: "Makati City",
    value: "makati-city",
  },
  {
    label: "Quezon City",
    value: "quezon-city",
  },
  {
    label: "Pasig City",
    value: "pasig-city",
  },
];

function SearchBar() {
  const [propertyTypeIsOpen, setPropertyTypeIsOpen] = useState(false);
  const [locationIsOpen, setLocationIsOpen] = useState(false);
  const form = useForm();

  function onSubmit() {
    console.log();
  }

  return (
    <Tabs defaultValue="for-rent">
      <TabsList className="h-0 p-0 ">
        <TabsTrigger
          value="for-rent"
          className="rounded-b-none rounded-br-none rounded-tr-none bg-[#E2E8F0] px-6 text-neutral-900 focus:bg-fuchsia-300 data-[state=active]:bg-[#059669] data-[state=active]:text-white"
        >
          For Rent
        </TabsTrigger>
        <TabsTrigger
          value="for-sale"
          className="rounded-b-none rounded-bl-none rounded-tl-none bg-[#E2E8F0] px-6 text-neutral-900 focus:bg-fuchsia-300 data-[state=active]:bg-[#059669] data-[state=active]:text-white"
        >
          For Sale
        </TabsTrigger>
      </TabsList>

      <Card className=" mt-1 rounded-tl-none border-none p-4 shadow-none">
        <Form {...form}>
          <form
            name="bot-question-form"
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-4 w-full space-y-2"
          >
            <FormField
              control={form.control}
              name="language"
              render={({ field }) => (
                <FormItem className="flex flex-col ">
                  <Popover
                    open={propertyTypeIsOpen}
                    onOpenChange={setPropertyTypeIsOpen}
                  >
                    <PopoverTrigger
                      asChild
                      className="bg-none shadow-none hover:bg-none focus:bg-none active:bg-none"
                    >
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            "w-full justify-between text-sm",
                            !field.value &&
                              " font-normal text-neutral-500 shadow-none",
                          )}
                        >
                          {field.value
                            ? propertyTypes.find(
                                (language) => language.value === field.value,
                              )?.label
                            : "Property Type"}
                          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>

                    <PopoverContent className="w-full p-0">
                      <Command>
                        <CommandInput
                          placeholder="Search property type"
                          className="h-9 w-screen"
                        />
                        <CommandEmpty>No property type found</CommandEmpty>
                        <CommandGroup className="px-4">
                          {propertyTypes.map((language) => (
                            <CommandItem
                              value={language.label}
                              key={language.value}
                              onSelect={() => {
                                form.setValue("language", language.value);
                                setPropertyTypeIsOpen(false);
                              }}
                            >
                              {language.label}
                              <CheckIcon
                                className={cn(
                                  "ml-auto h-4 w-4",
                                  language.value === field.value
                                    ? "opacity-100"
                                    : "opacity-0",
                                )}
                              />
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem className="flex flex-col ">
                  <Popover
                    open={locationIsOpen}
                    onOpenChange={setLocationIsOpen}
                  >
                    <PopoverTrigger
                      asChild
                      className="bg-none shadow-none hover:bg-none focus:bg-none active:bg-none"
                    >
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            "w-full justify-between text-sm",
                            !field.value &&
                              " font-normal text-neutral-500 shadow-none",
                          )}
                        >
                          {field.value
                            ? location.find(
                                (language) => language.value === field.value,
                              )?.label
                            : "Location"}
                          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>

                    <PopoverContent className="w-full p-0">
                      <Command>
                        <CommandInput
                          placeholder="Search location"
                          className="h-9 w-screen"
                        />
                        <CommandEmpty>No location found</CommandEmpty>
                        <CommandGroup className="px-4">
                          {location.map((language) => (
                            <CommandItem
                              value={language.label}
                              key={language.value}
                              onSelect={() => {
                                form.setValue("location", language.value);
                                setLocationIsOpen(false);
                              }}
                            >
                              {language.label}
                              <CheckIcon
                                className={cn(
                                  "ml-auto h-4 w-4",
                                  language.value === field.value
                                    ? "opacity-100"
                                    : "opacity-0",
                                )}
                              />
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="inline-flex w-full gap-x-2 bg-emerald-600 text-xs font-normal hover:bg-emerald-600/90"
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
