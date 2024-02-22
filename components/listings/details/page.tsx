"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { MapPin } from "lucide-react";
import { ImageKitLoader } from "@/components/global/imagekit-loader";

const PropertyDetails = () => {
  return (
    <div className="min-h-screen px-4 pb-4 pt-10">
      <div className="space-y-1">
        <h3 className="text-2xl font-bold">Furnished Condominium Unit</h3>
        <Badge className={cn(" rounded-md bg-orange-400")}>For Rent</Badge>
        <p className="flex items-center gap-x-2 py-2 text-sm text-slate-500">
          <MapPin className="h-4 w-4 text-slate-500" />
          <span> Paseo de Roxas, Makati</span>
        </p>
      </div>
      <h3 className="text-3xl font-bold text-emerald-600">$146,000</h3>
      <div>
        <ImageKitLoader
          responsive={false}
          className="h-[500px] w-[500px]"
          src={"public/property-image.png"}
          alt={`homepage header image`}
          height={500}
          width={500}
        />
      </div>
    </div>
  );
};

export default PropertyDetails;
