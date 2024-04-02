import React, { useMemo } from "react";
import Map from "@/components/global/map";
import { Marker } from "react-map-gl";
import type { PropertyListing } from "@/types";
import { Home } from "lucide-react";
import "mapbox-gl/dist/mapbox-gl.css";
import { cn } from "@/lib/utils";
import { HoverCard, HoverCardContent } from "@/components/ui/hover-card";
import { HoverCardTrigger } from "@radix-ui/react-hover-card";
import PropertyCard from "@/components/property-card";
import { formatCurrency } from "@/lib/utils";
interface IPropertiesLocation {
  properties: PropertyListing[];
  className?: string;
}

const PropertiesLocation = ({ properties, className }: IPropertiesLocation) => {
  const pins = useMemo(
    () =>
      properties?.map((property) => {
        return (
          <Marker
            key={property.estate.id}
            longitude={Number(property.estate.longitude)}
            latitude={Number(property.estate.latitude)}
            anchor="top"
          >
            <PinnedLocationMarker property={property} />
          </Marker>
        );
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [properties],
  );

  return (
    <div className={cn(className)}>
      <Map
        initialViewState={{
          latitude: 14.609054,
          longitude: 121.022257,
          zoom: 7,
        }}
      >
        {pins}
      </Map>
    </div>
  );
};

export default PropertiesLocation;

const PinnedLocationMarker = ({ property }: { property: PropertyListing }) => {
  return (
    <div className="flex flex-col items-center hover:cursor-pointer">
      <HoverCard>
        <HoverCardTrigger className="rounded-3xl bg-white p-2 shadow-sm">
          <p className="text-xs font-medium hover:underline">
            {formatCurrency(parseInt(property.price))}
          </p>
        </HoverCardTrigger>

        <HoverCardContent className="rounded-xl border-none p-0 shadow-none">
          <PropertyCard property={property} />
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};
