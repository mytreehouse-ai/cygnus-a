import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface PropertyCardProps {
  img: string;
  propertyName: string;
  propertyType: string;
  location: string;
  price: number;
  sqm: number;
}

function PropertyCard({
  img,
  location,
  price,
  propertyName,
  propertyType,
  sqm,
}: PropertyCardProps) {
  return (
    <Card className="shadow-sm">
      <CardHeader className="p-2">
        <div className="w-full p-4">
          <Image
            src={img}
            alt="property-image"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <CardTitle></CardTitle>
      </CardHeader>
    </Card>
  );
}

export default PropertyCard;
