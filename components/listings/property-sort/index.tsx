"use client";

import React from "react";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import ReactSelect from "@/components/react-cselect";

const sortingOptions = [
  {
    label: "Default Sorting",
    value: "default",
  },
  {
    label: "Recently Added",
    value: "recently-added",
  },
];

const PropertySort = () => {
  const propertySortForm = useForm();

  const onSubmit = () => {
    console.log(propertySortForm.getValues());
  };

  return (
    <Form {...propertySortForm}>
      <form
        name="search-property-form"
        onSubmit={propertySortForm.handleSubmit(onSubmit)}
        className="mt-4 w-full space-y-2 md:mt-0 md:flex md:items-center md:space-x-2 md:space-y-0"
      >
        <div className="w-1/2">
          <ReactSelect
            data={sortingOptions}
            name="sorting-options"
            placeholder="Default Sorting"
          />
        </div>
      </form>
    </Form>
  );
};

export default PropertySort;
