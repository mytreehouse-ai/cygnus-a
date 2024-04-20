"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import useStepperStore from "@/store/useStepperStore";
import { Checkbox } from "@/components/ui/checkbox";
import useValuationFormStore from "@/store/useValuationFormStore";
import { usePropertyValuationQuery } from "@/hooks/usePropertyValuationQuery";
import { useEffect } from "react";
import {
  propertyValuationSchema,
  type PropertyValuation,
} from "@/schema/valuation";

const PersonalDetails: React.FC = () => {
  const { currentStepIndex, setCurrentStepIndex, steps } = useStepperStore();
  const { propertyDetails, setPersonalDetailValues, setValuationResult } =
    useValuationFormStore();

  const { data: valuation, isSuccess: valuationIsSuccess } =
    usePropertyValuationQuery({
      params: {
        propertyDetails,
      },
    });

  useEffect(() => {
    if (valuationIsSuccess && valuation && valuation?.data) {
      setValuationResult({
        valuation: valuation?.data.valuation,
      });
    }
  }, [valuation, setValuationResult, valuationIsSuccess]);

  const form = useForm<Pick<PropertyValuation, "personalDetails">>({
    resolver: zodResolver(
      propertyValuationSchema.pick({
        personalDetails: true,
      }),
    ),
    values: {
      personalDetails: {
        email_address: "",
        first_name: "",
        last_name: "",
        phone_number: "0",
        termsAndConditions: false,
        offers: false,
      },
    },
  });

  console.log(form.getValues());

  const onSubmit = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const goBack = () => {
    const formValues = form.getValues();
    setPersonalDetailValues(formValues);
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  return (
    <Form {...form}>
      <h2 className="w-full text-lg font-bold text-neutral-800">
        Tell us more about the seller
      </h2>
      <form
        name="personalDetailsForm"
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-4 space-y-6"
      >
        <FormField
          control={form.control}
          name="personalDetails.first_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Type your First name"
                  {...field}
                  value={field.value ?? ""}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="personalDetails.last_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Type your Last name"
                  {...field}
                  value={field.value ?? ""}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="personalDetails.phone_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone number</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  className="remove-arrow"
                  placeholder="Type your phone number here"
                  {...field}
                  value={field.value ?? ""}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="personalDetails.email_address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input
                  placeholder="Type your email address here"
                  {...field}
                  value={field.value ?? ""}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="personalDetails.termsAndConditions"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex space-x-2">
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={(e) => field.onChange(e)}
                  />
                  <label className="text-xs leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Using this valuation tool, I agree to mytree.house terms and
                    conditions
                  </label>
                </div>
              </FormControl>
            </FormItem>
          )}
        />

        <div className="flex space-x-2">
          <Checkbox id="personalDetails.offers" />
          <label
            htmlFor="offers"
            className="text-xs leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            MyTreeHouse can contact me about my property journey, with relevant
            properties, offers and news
          </label>
        </div>

        <div className="flex space-x-2">
          <Button
            className="w-full"
            type="button"
            variant="outline"
            onClick={goBack}
          >
            Previous
          </Button>
          <Button
            className="order-2 w-full rounded-lg bg-emerald-600 hover:bg-emerald-700 focus:bg-emerald-600 active:bg-emerald-600 md:order-1"
            type="submit"
          >
            Next
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default PersonalDetails;
