"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Bath,
  Bed,
  Building,
  Car,
  ClipboardList,
  Expand,
  Flag,
  LinkIcon,
  Shrink,
} from "lucide-react";

function Overview() {
  return (
    <Card className="border-none shadow">
      <CardHeader className="space-y-5">
        <CardTitle className="text-lg font-bold text-gray-950">
          Overview
        </CardTitle>
        <Separator className="w-full bg-slate-200" />
      </CardHeader>
      <CardContent>
        <dl className="flex flex-col gap-y-6">
          <div className="flex justify-between text-slate-500">
            <dt className="inline-flex items-center gap-x-2">
              <Shrink className="h-4 w-4" /> <span>Floor Area</span>
            </dt>
            <dd className="font-bold">100 sqm</dd>
          </div>

          <div className="flex justify-between text-slate-500">
            <dt className="inline-flex items-center gap-x-2">
              <Expand className="h-4 w-4" /> <span>Lot Area</span>
            </dt>
            <dd className="font-bold">100 sqm</dd>
          </div>

          <div className="flex justify-between text-slate-500">
            <dt className="inline-flex items-center gap-x-2">
              <Bed className="h-4 w-4" /> <span>Bedroom</span>
            </dt>
            <dd className="font-bold">5 Bedroom(s)</dd>
          </div>

          <div className="flex justify-between text-slate-500">
            <dt className="inline-flex items-center gap-x-2">
              <Bath className="h-4 w-4" /> <span>Bathroom</span>
            </dt>
            <dd className="font-bold">3 Bathroom(s)</dd>
          </div>

          <div className="flex items-center justify-between text-slate-500">
            <dt className="inline-flex items-center gap-x-2 ">
              <Flag className="h-4 w-4" /> <span>Turn Over Status</span>
            </dt>
            <dd className="font-bold">Fully Furnished</dd>
          </div>

          <div className="flex justify-between text-slate-500">
            <dt className="inline-flex items-center gap-x-2">
              <Car className="h-4 w-4" /> <span>Parking Lot</span>
            </dt>
            <dd className="font-bold">3 Parking Lot(s)</dd>
          </div>

          <div className="flex justify-between text-slate-500">
            <dt className="inline-flex items-center gap-x-2">
              <Building className="h-4 w-4" /> <span>Property Type</span>
            </dt>
            <dd className="font-bold">House</dd>
          </div>

          <div className="flex justify-between text-slate-500">
            <dt className="inline-flex items-center gap-x-2">
              <ClipboardList className="h-4 w-4" /> <span>Listing Type</span>
            </dt>
            <dd className="font-bold">For Rent</dd>
          </div>

          <div className="flex justify-between text-slate-500">
            <dt className="inline-flex items-center gap-x-2">
              <LinkIcon className="h-4 w-4" /> <span>Listing URL</span>
            </dt>
            <dd className="font-bold text-emerald-600 underline">
              https://example.com
            </dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  );
}

export default Overview;
