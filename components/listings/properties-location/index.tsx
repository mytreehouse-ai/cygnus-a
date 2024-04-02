import React, { useMemo, useState } from "react";
import Map from "@/components/global/map";
import { Marker } from "react-map-gl";
import type { PropertyListing } from "@/types";
import "mapbox-gl/dist/mapbox-gl.css";
import { cn } from "@/lib/utils";
import { HoverCard, HoverCardContent } from "@/components/ui/hover-card";
import { HoverCardTrigger } from "@radix-ui/react-hover-card";
import PropertyCard from "@/components/property-card";
import { formatCurrency } from "@/lib/utils";
import { Home, Building, Building2, Warehouse, Trees } from "lucide-react";
interface IPropertiesLocation {
  properties: PropertyListing[];
  className?: string;
}

const PropertiesLocation = ({ properties, className }: IPropertiesLocation) => {
  const [zoomLevel, setZoomLevel] = useState<number>(9);

  const PriceMarkers = useMemo(
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

  const IconMarkers = useMemo(
    () =>
      properties?.map((property) => {
        return (
          <Marker
            key={property.estate.id}
            longitude={Number(property.estate.longitude)}
            latitude={Number(property.estate.latitude)}
            anchor="top"
          >
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-emerald-600 p-1">
                <PropertyIcon typeId={property.property_type.id} />
              </div>
              <div className="mt-[-4px] h-0 w-0 rounded-b-xl border-x-8 border-b-8 border-t-8 border-x-transparent border-b-transparent border-t-emerald-600"></div>
            </div>
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
          zoom: zoomLevel,
        }}
        onZoom={(e) => setZoomLevel(e.viewState.zoom)}
      >
        {zoomLevel >= 9 ? PriceMarkers : IconMarkers}
      </Map>
    </div>
  );
};

export default PropertiesLocation;

const PinnedLocationMarker = ({ property }: { property: PropertyListing }) => {
  return (
    <div className="  flex flex-col items-center  hover:cursor-pointer">
      <HoverCard>
        <HoverCardTrigger className="rounded-3xl bg-white p-2 shadow-sm">
          <p className="text-xs font-medium hover:underline">
            {formatCurrency(parseInt(property.price))}
          </p>
        </HoverCardTrigger>

        <HoverCardContent className=" rounded-xl border-none p-0 shadow-none">
          <PropertyCard property={property} />
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

interface PropertyIconProps {
  typeId: number;
}

const PropertyIcon: React.FC<PropertyIconProps> = ({ typeId }) => {
  console.log(typeId);
  const propertyTypeIcons = {
    "1": <Building2 className="h-3 w-3 text-white" />,
    "2": <Home className="h-3 w-3 text-white" />,
    "3": <Building className="h-3 w-3 text-white" />,
    "4": <Warehouse className="h-3 w-3 text-white" />,
    "5": <Trees className="h-3 w-3 text-white" />,
  };

  const IconComponent =
    propertyTypeIcons[typeId as unknown as keyof typeof propertyTypeIcons] ||
    null;

  return <div>{IconComponent}</div>;
};
