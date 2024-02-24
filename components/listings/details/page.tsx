"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  Bath,
  Bed,
  Building,
  Car,
  ClipboardList,
  Flag,
  Link as LinkIcon,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Shrink, Expand } from "lucide-react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const propertyDetails = {
  floorArea: 45,
  lotArea: 0,
  bedroom: 2,
  bathroom: 2,
  turnOverStatus: "Furnished",
  parkingLot: 0,
  propertyType: "Condominium",
  listingType: "For Rent",
  listingUrl: "www.example.com",
};

const PropertyDetails = () => {
  return (
    <>
      <main className="grid-rows-auto grid-cols-auto grid min-h-screen gap-6 px-4 pb-4 pt-10 md:grid-cols-2">
        <section className="space-y-1 md:col-span-2">
          <h3 className="text-2xl font-bold">Furnished Condominium Unit</h3>
          <Badge className={cn(" rounded-md bg-orange-400")}>For Rent</Badge>
          <p className="flex items-center gap-x-2 py-2 text-sm text-slate-500">
            <MapPin className="h-4 w-4 text-slate-500" />
            <span> Paseo de Roxas, Makati</span>
          </p>
          <h3 className="text-3xl font-bold text-emerald-600">$146,000</h3>
        </section>

        <section className="grid-rows-auto grid grid-cols-2 gap-2 ">
          <div className="relative col-span-2 h-auto w-full max-w-[500px]">
            <Image
              src="/dummy-img.png"
              alt="homepage header image"
              layout="responsive"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
          <div className="relative h-auto w-full max-w-[500px]">
            <Image
              src="/dummy-img.png"
              alt="homepage header image"
              layout="responsive"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
          <div className="relative h-auto w-full max-w-[500px]">
            <Image
              src="/dummy-img.png"
              alt="homepage header image"
              layout="responsive"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
        </section>

        <section>
          <Card className="border-none shadow">
            <CardHeader>
              <CardTitle className="text-lg text-gray-950">Overview</CardTitle>
              <Separator className="bg-slate-200" />
            </CardHeader>
            <CardContent>
              <dl className="flex flex-col gap-y-6">
                <div className="flex justify-between text-sm text-slate-500">
                  <dt className="inline-flex items-center gap-x-2">
                    <Shrink className="h-4 w-4" /> <span>Floor Area</span>
                  </dt>
                  <dd className="font-bold">{propertyDetails.floorArea} sqm</dd>
                </div>

                <div className="flex justify-between text-sm text-slate-500">
                  <dt className="inline-flex items-center gap-x-2">
                    <Expand className="h-4 w-4" /> <span>Lot Area</span>
                  </dt>
                  <dd className="font-bold">{propertyDetails.lotArea} sqm</dd>
                </div>

                <div className="flex justify-between text-sm text-slate-500">
                  <dt className="inline-flex items-center gap-x-2">
                    <Bed className="h-4 w-4" /> <span>Bedroom</span>
                  </dt>
                  <dd className="font-bold">
                    {propertyDetails.bedroom} Bedroom(s)
                  </dd>
                </div>

                <div className="flex justify-between text-sm text-slate-500">
                  <dt className="inline-flex items-center gap-x-2">
                    <Bath className="h-4 w-4" /> <span>Bathroom</span>
                  </dt>
                  <dd className="font-bold">
                    {propertyDetails.bathroom} Bathroom(s)
                  </dd>
                </div>

                <div className="flex justify-between text-sm text-slate-500">
                  <dt className="inline-flex items-center gap-x-2">
                    <Flag className="h-4 w-4" /> <span>Turn Over Status</span>
                  </dt>
                  <dd className="font-bold">
                    {propertyDetails.turnOverStatus}
                  </dd>
                </div>

                <div className="flex justify-between text-sm text-slate-500">
                  <dt className="inline-flex items-center gap-x-2">
                    <Car className="h-4 w-4" /> <span>Parking Lot</span>
                  </dt>
                  <dd className="font-bold">
                    {propertyDetails.parkingLot} Parking Lot(s)
                  </dd>
                </div>

                <div className="flex justify-between text-sm text-slate-500">
                  <dt className="inline-flex items-center gap-x-2">
                    <Building className="h-4 w-4" /> <span>Property Type</span>
                  </dt>
                  <dd className="font-bold">{propertyDetails.propertyType}</dd>
                </div>

                <div className="flex justify-between text-sm text-slate-500">
                  <dt className="inline-flex items-center gap-x-2">
                    <ClipboardList className="h-4 w-4" />{" "}
                    <span>Listing Type</span>
                  </dt>
                  <dd className="font-bold">{propertyDetails.listingType}</dd>
                </div>

                <div className="flex justify-between text-sm text-slate-500">
                  <dt className="inline-flex items-center gap-x-2">
                    <LinkIcon className="h-4 w-4" /> <span>Listing URL</span>
                  </dt>
                  <dd className="font-bold text-emerald-600 underline">
                    {propertyDetails.listingUrl}
                  </dd>
                </div>
              </dl>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card className="border-none shadow">
            <CardHeader>
              <CardTitle className="text-lg text-gray-950">
                Description
              </CardTitle>
              <Separator className="bg-slate-200" />
            </CardHeader>
            <CardContent>
              <article className="text-sm text-slate-500">
                2 bedroom fully furnished loft type Long term lease only 50K per
                month 2 mos deposit 2 mos advance.10 pdcCondominium property for
                rent in Ususan, Taguig, Metro Manila
              </article>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card className="border-none shadow">
            <CardHeader>
              <CardTitle className="inline-flex items-center gap-x-2 text-lg text-gray-950">
                <dt>Address:</dt>
                <dd className="text-sm font-normal text-slate-500">
                  Paseo de Roxas, Makati
                </dd>
              </CardTitle>
              <Separator className="bg-slate-200" />
            </CardHeader>
            <CardContent>
              <div className="h-96 w-full rounded-lg border border-slate-200"></div>
            </CardContent>
          </Card>
        </section>

        <ContactUs />
      </main>
    </>
  );
};

export default PropertyDetails;

const ContactUs = () => {
  const contactUsForm = useForm();

  const onSubmit = () => {
    console.log("submit");
  };

  return (
    <section>
      <Card className="border bg-neutral-50 shadow-sm">
        <CardHeader>
          <CardTitle className="inline-flex items-center gap-x-2 text-lg text-gray-950">
            Contact Us Now!
          </CardTitle>
          <p className="text-xs font-normal text-slate-500">
            Paseo de Roxas, Makati
          </p>
        </CardHeader>
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
                      <Input
                        placeholder="Full Name"
                        {...field}
                        value={field.value}
                        className="w-full rounded-lg text-sm md:w-full"
                      />
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
                      <Input
                        placeholder="Contact Number"
                        {...field}
                        value={field.value}
                        className="w-full rounded-lg text-sm md:w-full"
                        type="number"
                      />
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
                      <Input
                        placeholder="Address"
                        {...field}
                        value={field.value}
                        className="w-full rounded-lg text-sm md:w-full"
                      />
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
                      <Textarea
                        placeholder="Message"
                        {...field}
                        value={field.value}
                        className="w-full rounded-lg text-sm md:w-full"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button className="order-2 mt-3 w-full rounded-lg bg-emerald-600 hover:bg-emerald-700 focus:bg-emerald-600 active:bg-emerald-600 md:order-1">
                Inquire
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
};
