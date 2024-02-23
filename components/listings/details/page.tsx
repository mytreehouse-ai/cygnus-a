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
import Head from "next/head";

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
      <main className="min-h-screen px-4 pb-4 pt-10">
        <section className="space-y-1">
          <h3 className="text-2xl font-bold">Furnished Condominium Unit</h3>
          <Badge className={cn(" rounded-md bg-orange-400")}>For Rent</Badge>
          <p className="flex items-center gap-x-2 py-2 text-sm text-slate-500">
            <MapPin className="h-4 w-4 text-slate-500" />
            <span> Paseo de Roxas, Makati</span>
          </p>
        </section>
        <h3 className="text-3xl font-bold text-emerald-600">$146,000</h3>

        <section className="grid-rows-auto mt-6 grid grid-cols-2 gap-2">
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

        <section className="mt-6">
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

        <section className="mt-6">
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

        <section className="mt-6">
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
      </main>
    </>
  );
};

export default PropertyDetails;
