import React, { useMemo } from "react";
import Map from "@/components/global/map";
import { Marker } from "react-map-gl";
import type { PropertyListing } from "@/types";
import { Home } from "lucide-react";
import "mapbox-gl/dist/mapbox-gl.css";
import { cn } from "@/lib/utils";

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
            <PinnedLocationMarker />
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

const PinnedLocationMarker = () => {
  return (
    <div className="flex flex-col items-center hover:cursor-pointer">
      <div className="rounded-full bg-emerald-600 p-2">
        <Home className="h-3 w-3 text-white" />
      </div>
      <div className="mt-[-4px] h-0 w-0 rounded-b-xl border-x-8 border-b-8 border-t-8 border-x-transparent border-b-transparent border-t-emerald-600"></div>
    </div>
  );
};
