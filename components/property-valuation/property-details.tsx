"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useStepperStore from "@/store/useStepperStore";
import useValuationFormStore from "@/store/useValuationFormStore";
import { propertyTypes } from "@/static_data/property-types";
import ReactSelect from "../global/react-select";
import {
  propertyValuationSchema,
  type PropertyValuation,
} from "@/schema/valuation";
import useCitiesQuery from "@/hooks/useCitiesQuery";

const PropertyDetails: React.FC = () => {
  const { currentStepIndex, setCurrentStepIndex, steps } = useStepperStore();
  const { setPropertyDetailValues } = useValuationFormStore();

  const { data: cities, isFetching: citiesIsFetching } = useCitiesQuery();

  const form = useForm<PropertyValuation>({
    resolver: zodResolver(
      propertyValuationSchema.pick({
        propertyDetails: true,
      }),
    ),
  });

  const onSubmit = (values: PropertyValuation) => {
    setPropertyDetailValues(values);

    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(+1);
    }
  };

  return (
    <Form {...form}>
      <form
        name="propertyDetailsForm"
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-4 space-y-4"
      >
        <ReactSelect
          data={propertyTypes}
          name="propertyDetails.property_type"
          placeholder="Select property type"
          label="Property type"
        />

        <FormField
          control={form.control}
          name="propertyDetails.address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input
                  placeholder="Address"
                  {...field}
                  value={field.value ?? ""}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <ReactSelect
          data={
            cities?.map((city) => ({
              value: city.name,
              label: city.name,
            })) ?? []
          }
          name="propertyDetails.area"
          label="Location"
          disabled={citiesIsFetching}
        />

        <FormField
          control={form.control}
          name="propertyDetails.sqm"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sqm </FormLabel>
              <FormControl>
                <Input
                  placeholder=""
                  {...field}
                  value={field.value ?? ""}
                  type="number"
                  min={0}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button
          className="order-2 mt-3 w-full rounded-lg bg-emerald-600 hover:bg-emerald-700 focus:bg-emerald-600 active:bg-emerald-600 md:order-1"
          type="submit"
        >
          Next
        </Button>
      </form>
    </Form>
  );
};

export default PropertyDetails;
