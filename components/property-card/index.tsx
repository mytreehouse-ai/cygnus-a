"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import { Shrink, Building } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { PropertyListing } from "@/types";

interface PropertyCardProps {
  onClick?: () => void;
  property: PropertyListing;
}

function PropertyCard({ property, onClick }: PropertyCardProps) {
  return (
    <Card
      className="rounded-xl p-1 shadow-none hover:cursor-pointer"
      onClick={onClick}
    >
      <CardHeader className="p-2">
        <div className="relative h-0 w-full" style={{ paddingTop: "56.25%" }}>
          <Image
            src={
              property.estate?.image_url
                ? property.estate.image_url
                : "/property-image.png"
            }
            alt="Property image."
            priority={true}
            fill={true}
            sizes="(max-width: 768px) 100vw, 700px"
            placeholder="empty"
            className="rounded-lg"
          />
          <Badge
            className={cn(
              "absolute left-0 top-0 m-2 rounded-md",
              property.listing_type.description === "For Sale"
                ? "bg-orange-400"
                : "bg-red-500",
            )}
          >
            {property.listing_type.description === "For Sale"
              ? "For Sale"
              : "For Rent"}
          </Badge>
        </div>
        <CardTitle className="truncate text-lg">
          <p className="truncate">{property.listing_title}</p>
          <p className="flex items-center gap-x-2  text-sm font-normal text-slate-500">
            <MapPin className="h-4 w-4" />
            <span className="truncate">
              {property.estate?.address
                ? property.estate.address
                : property.estate.city.name}
            </span>
          </p>
        </CardTitle>
        <CardContent className="p-0">
          <div className="my-1 flex gap-x-2">
            <p className="inline-flex items-center gap-x-2 text-sm font-normal text-slate-500">
              <Shrink className="h-4 w-4" />
              {property.property_type.description === "Warehouse" && (
                <span>{property.estate.building_size}</span>
              )}
              {["Condominium", "House", "Apartment", "Land"].includes(
                property.property_type.description,
              ) && (
                <span>
                  {property.estate.floor_size || property.estate.lot_size}
                </span>
              )}
            </p>
            <p className="inline-flex items-center gap-x-2 text-sm font-normal text-slate-500">
              <Building className="h-4 w-4" />
              <span>
                {property?.property_type?.description ? (
                  property?.property_type?.description
                ) : (
                  <span className="text-neutral-400 opacity-50">N/A</span>
                )}
              </span>
            </p>
          </div>
          <Separator className="my-4" />
          <h3 className="text-lg font-bold text-emerald-600">
            {property.price_formatted}
          </h3>
        </CardContent>
      </CardHeader>
    </Card>
  );
}

export default PropertyCard;
