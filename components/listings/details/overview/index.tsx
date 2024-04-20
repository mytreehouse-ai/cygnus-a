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
import type { PropertyListing } from "@/types";
import Link from "next/link";

interface OverviewProps {
  data: PropertyListing;
}

function Overview({ data }: OverviewProps) {
  const propertyTypeId = data?.property_type?.id;

  enum PropertyType {
    Condominium = 1,
    House = 2,
    Apartment = 3,
    Warehouse = 4,
    Land = 5,
  }

  return (
    <Card className="border-none shadow">
      <CardHeader className="space-y-5">
        <CardTitle className="text-lg font-bold text-gray-950">
          Overview
        </CardTitle>
        <Separator className="w-full bg-slate-200" />
      </CardHeader>
      <CardContent>
        <dl className="flex flex-col gap-y-5">
          {propertyTypeId !== PropertyType.Land &&
            propertyTypeId !== PropertyType.Warehouse && (
              <div className="flex justify-between text-slate-500">
                <dt className="inline-flex items-center gap-x-2">
                  <Shrink className="h-4 w-4" /> <span>Floor Area</span>
                </dt>
                <dd className="font-bold">{data?.estate?.floor_size} sqm</dd>
              </div>
            )}

          <div className="flex justify-between text-slate-500">
            <dt className="inline-flex items-center gap-x-2">
              <Expand className="h-4 w-4" /> <span>Lot Area</span>
            </dt>
            <dd className="font-bold">{data?.estate?.lot_size} sqm</dd>
          </div>

          {propertyTypeId !== PropertyType.Land &&
            propertyTypeId !== PropertyType.Warehouse && (
              <>
                <div className="flex justify-between text-slate-500">
                  <dt className="inline-flex items-center gap-x-2">
                    <Bed className="h-4 w-4" /> <span>Bedroom</span>
                  </dt>
                  <dd className="font-bold">
                    {data?.estate?.num_bedrooms} Bedroom(s)
                  </dd>
                </div>

                <div className="flex justify-between text-slate-500">
                  <dt className="inline-flex items-center gap-x-2">
                    <Bath className="h-4 w-4" /> <span>Bathroom</span>
                  </dt>
                  <dd className="font-bold">
                    {data?.estate?.num_bathrooms} Bathroom(s)
                  </dd>
                </div>

                <div className="flex justify-between text-slate-500">
                  <dt className="inline-flex items-center gap-x-2">
                    <Car className="h-4 w-4" /> <span>Parking Lot</span>
                  </dt>
                  <dd className="font-bold">
                    {data?.estate?.num_carspaces} Parking Lot(s)
                  </dd>
                </div>
              </>
            )}

          <div className="flex justify-between text-slate-500">
            <dt className="inline-flex items-center gap-x-2">
              <Building className="h-4 w-4" /> <span>Property Type</span>
            </dt>
            <dd className="font-bold">{data?.property_type?.description}</dd>
          </div>

          <div className="flex justify-between text-slate-500">
            <dt className="inline-flex items-center gap-x-2">
              <ClipboardList className="h-4 w-4" /> <span>Listing Type</span>
            </dt>
            <dd className="font-bold">{data?.listing_type?.description}</dd>
          </div>

          <div className="flex items-start justify-between text-slate-500">
            <dt className="inline-flex items-center gap-x-2">
              <LinkIcon className="h-4 w-4" /> <span>Listing URL</span>
            </dt>
            <dd className=" w-72 truncate text-ellipsis font-bold text-emerald-600 underline ">
              <Link href={data?.listing_url!} target="_blank">
                {data?.listing_url}
              </Link>
            </dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  );
}

export default Overview;
