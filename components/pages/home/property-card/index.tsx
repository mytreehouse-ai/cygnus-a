import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import { Shrink, Building } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { formatCurrency } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface PropertyCardProps {
  img: string;
  propertyName: string;
  propertyType: string;
  location: string;
  price: number;
  sqm: number;
  type: "for-rent" | "for-sale";
}

function PropertyCard({
  img,
  location,
  price,
  propertyName,
  propertyType,
  sqm,
  type,
}: PropertyCardProps) {
  return (
    <Card className="rounded-xl p-1 shadow-none">
      <CardHeader className="p-2">
        <div className="relative h-0 w-full" style={{ paddingTop: "56.25%" }}>
          <Image
            src={img}
            alt={`${propertyName} image`}
            fill
            style={{ objectFit: "cover" }}
            placeholder="empty"
            className="rounded-lg"
          />
          <Badge
            className={cn(
              "absolute left-0 top-0 m-2 rounded-md",
              type === "for-rent" ? "bg-orange-400" : "bg-red-500",
            )}
          >
            {type === "for-rent" ? "For Rent" : "For Sale"}
          </Badge>
        </div>
        <CardTitle className="truncate text-lg ">
          <p className="tracking-wide">{propertyName}</p>
          <p className="inline-flex items-center gap-x-2 text-sm font-normal text-slate-500 ">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </p>
        </CardTitle>
        <CardContent className="p-0">
          <div className="my-1 flex gap-x-2">
            <p className="inline-flex items-center gap-x-2 text-sm font-normal text-slate-500 ">
              <Shrink className="h-4 w-4" />
              <span>{sqm}</span>
            </p>
            <p className="inline-flex items-center gap-x-2 text-sm font-normal text-slate-500 ">
              <Building className="h-4 w-4" />
              <span>{propertyType}</span>
            </p>
          </div>
          <Separator className="my-4" />
          <h3 className="text-lg font-bold text-emerald-600">
            {formatCurrency(price ?? 0)}
          </h3>
        </CardContent>
      </CardHeader>
    </Card>
  );
}

export default PropertyCard;
