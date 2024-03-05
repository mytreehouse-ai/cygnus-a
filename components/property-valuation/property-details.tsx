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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ValuationStepper from "@/hooks/useStepperStore";
import { propertyValuationFormSchema } from "@/schema/valuation";
import useValuationFormStore from "@/hooks/useValuationFormStore";
import { propertyTypes } from "@/static_data/property-types";
import { yearBuilt } from "@/static_data/year-built";
import { listingDuration } from "@/static_data/listing-duration";
import ReactSelect from "../global/react-select";

const PropertyDetails: React.FC = () => {
  const { currentStepIndex, setCurrentStepIndex, steps } = ValuationStepper();
  const { propertyDetailValues, setPropertyDetailValues } =
    useValuationFormStore();

  const form = useForm<z.infer<typeof propertyValuationFormSchema>>({
    resolver: zodResolver(propertyValuationFormSchema),
    values: propertyDetailValues,
  });

  const onSubmit = (values: z.infer<typeof propertyValuationFormSchema>) => {
    setPropertyDetailValues(values);
    console.log("values set", values);
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
          name="propertyType"
          placeholder="fs"
          label="Property type"
        />

        <FormField
          control={form.control}
          name="address"
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
          data={[
            {
              value: "Makati",
              label: "Makati",
            },
            {
              value: "Taguig",
              label: "Taguig",
            },
          ]}
          name="location"
          placeholder="fs"
          label="Location"
        />

        <FormField
          control={form.control}
          name="sqm"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sqm </FormLabel>
              <FormControl>
                <Input placeholder="" {...field} value={field.value ?? ""} />
              </FormControl>
            </FormItem>
          )}
        />

        <ReactSelect
          data={[
            {
              value: "2019",
              label: "2019",
            },
            {
              value: "2020",
              label: "2020",
            },
          ]}
          name="yearBuilt"
          placeholder="AF"
          label="Year built"
        />

        <FormField
          control={form.control}
          name="whenAreyouLookingToSell"
          render={({ field }) => (
            <FormItem>
              <FormLabel>When are you looking to sell? </FormLabel>
              <FormControl>
                <Input placeholder="" {...field} value={field.value ?? ""} />
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
