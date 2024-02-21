"use client";

import React from "react";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import ReactSelect from "@/components/global/react-select";

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
        className="md:w-1/2"
      >
        <div className="w-1/2 md:float-end">
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
