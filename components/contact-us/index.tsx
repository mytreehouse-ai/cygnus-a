"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";

const ContactUs = () => {
  return (
    <main className="">
      <div className="bg-emerald-50 px-4 pb-4 pt-10 md:px-6">
        <h1 className="text-4xl font-bold md:text-5xl">
          We&apos;d love to
          <span className="text-emerald-600"> hear from you</span>
        </h1>
        <h2 className="pb-10 pt-4 text-gray-950 md:text-base">
          Get in touch with our Licensed Appraisers whenever you need them. The
          form on the right is your gateway to an in-depth property value
          discussion.
        </h2>
      </div>
      <div className="px-4 pb-4 pt-10 text-center md:pt-12">
        <h3 className="text-4xl font-bold md:text-3xl ">Contact Form</h3>
        <p className="tex-sm mt-4 text-slate-500 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed
          tristique.
        </p>
        <ContactForm />
      </div>
    </main>
  );
};

export default ContactUs;

const ContactForm = () => {
  const contactUsForm = useForm();

  const onSubmit = () => {
    console.log("submit");
  };

  return (
    <Card className="mt-6 border-none shadow-none md:border md:shadow-sm">
      <CardContent>
        <Form {...contactUsForm}>
          <form
            name="search-property-form"
            onSubmit={contactUsForm.handleSubmit(onSubmit)}
            className="flex flex-col gap-y-2"
          >
            <FormField
              control={contactUsForm.control}
              name="bathroom"
              render={({ field }) => (
                <FormItem className="w-auto md:w-full">
                  <FormControl>
                    <div className="space-y-1 text-start">
                      <FormLabel>Full Name</FormLabel>
                      <Input
                        placeholder="Enter your full name"
                        {...field}
                        value={field.value}
                        className="w-full rounded-lg text-sm md:w-full"
                      />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={contactUsForm.control}
              name="bathroom"
              render={({ field }) => (
                <FormItem className="w-auto md:w-full">
                  <FormControl>
                    <div className="space-y-1 text-start">
                      <FormLabel>Email</FormLabel>
                      <Input
                        placeholder="Enter email address"
                        {...field}
                        value={field.value}
                        className="w-full rounded-lg text-sm md:w-full"
                      />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={contactUsForm.control}
              name="bathroom"
              render={({ field }) => (
                <FormItem className="w-auto md:w-full">
                  <FormControl>
                    <div className="space-y-1 text-start">
                      <FormLabel>Phone</FormLabel>
                      <Input
                        placeholder="Enter Your Contact Number"
                        {...field}
                        value={field.value}
                        className="w-full rounded-lg text-sm md:w-full"
                      />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={contactUsForm.control}
              name="bathroom"
              render={({ field }) => (
                <FormItem className="w-auto md:w-full">
                  <FormControl>
                    <div className="space-y-1 text-start">
                      <FormLabel>Message</FormLabel>
                      <Textarea
                        placeholder="Message"
                        {...field}
                        value={field.value}
                        className="w-full rounded-lg text-sm md:w-full"
                      />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="mt-2 flex items-center space-x-2">
              <Checkbox id="report" />
              <label
                htmlFor="report"
                className="text-xs leading-none text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Did you get your free MyTreeHouse report?
              </label>
            </div>

            <Button className="order-2 mt-3 w-full rounded-lg bg-emerald-600 hover:bg-emerald-700 focus:bg-emerald-600 active:bg-emerald-600 md:order-1">
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
