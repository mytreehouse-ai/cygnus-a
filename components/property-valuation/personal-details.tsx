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
import ValuationStepper from "@/store/useStepperStore";
import { personalDetailsFormSchema } from "@/schema/valuation";
import { Checkbox } from "@/components/ui/checkbox";
import useValuationFormStore from "@/store/useValuationFormStore";

const PersonalDetails: React.FC = () => {
  const { currentStepIndex, setCurrentStepIndex, steps } = ValuationStepper();
  const {
    personalDetailValues,
    propertyDetailValues,
    setPersonalDetailValues,
  } = useValuationFormStore();

  // useGetValuationResultHook({
  //   sqm: propertyDetailValues.sqm,
  //   yearBuilt: parseInt(propertyDetailValues.yearBuilt),
  //   location: propertyDetailValues.location,
  //   propertyType: propertyDetailValues.propertyType,
  // });

  const form = useForm<z.infer<typeof personalDetailsFormSchema>>({
    resolver: zodResolver(personalDetailsFormSchema),
    values: personalDetailValues,
  });

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
          name="firstName"
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
          name="lastName"
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
          name="phoneNumber"
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
          name="emailAddress"
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
          name="termsAndConditions"
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
          <Checkbox id="offers" />
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
            className="order-2 mt-3 w-full rounded-lg bg-emerald-600 hover:bg-emerald-700 focus:bg-emerald-600 active:bg-emerald-600 md:order-1"
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
