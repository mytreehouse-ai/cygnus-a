"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import { Shrink, Building } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { formatCurrency } from "@/lib/utils";
import { cn } from "@/lib/utils";
import type { IProperty } from "@/types/property";
interface PropertyCardProps {
  onClick?: () => void;
  property: IProperty;
}

function PropertyCard({ property, onClick }: PropertyCardProps) {
  // console.log(env.NEXT_PUBLIC_NODE_ENV);

  return(
    <Card
      className="rounded-xl p-1 shadow-none hover:cursor-pointer"
      onClick={onClick}
    >
      <CardHeader className="p-2">
        <div className="relative h-0 w-full" style={{ paddingTop: "56.25%" }}>
          <Image
            src="/property-image.png"
            alt={`${property.estate.building_name} image`}
            fill
            style={{ objectFit: "cover" }}
            placeholder="empty"
            className="rounded-lg"
          />
          <Badge
            className={cn(
              "absolute left-0 top-0 m-2 rounded-md",
              property.listing_type.id === 1 ? "bg-orange-400" : "bg-red-500",
            )}
          >
            {property.listing_type.id === 1 ? "For Sale" : "For Rent"}
          </Badge>
        </div>
        <CardTitle className="truncate text-lg ">
          <p className="tracking-wide">{property.estate.building_name}</p>
          <p className="inline-flex items-center gap-x-2 text-sm font-normal text-slate-500 ">
            <MapPin className="h-4 w-4" />
            <span>{property.estate.address}</span>
          </p>
        </CardTitle>
        <CardContent className="p-0">
          <div className="my-1 flex gap-x-2">
            <p className="inline-flex items-center gap-x-2 text-sm font-normal text-slate-500 ">
              <Shrink className="h-4 w-4" />
              <span>{property.estate.floor_size}</span>
            </p>
            <p className="inline-flex items-center gap-x-2 text-sm font-normal text-slate-500 ">
              <Building className="h-4 w-4" />
              <span>{property.property_type.description}</span>
            </p>
          </div>
          <Separator className="my-4" />
          <h3 className="text-lg font-bold text-emerald-600">
            {property.price_formatted}
          </h3>
        </CardContent>
      </CardHeader>
    </Card>,
  );
}

export default PropertyCard;
