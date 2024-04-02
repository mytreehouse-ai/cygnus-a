"use client";

import React from "react";
import PropertyCard from "@/components/property-card";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import usePropertiesQuery from "@/hooks/usePropertiesQuery";
import PropertiesLocation from "../properties-location";
import PropertySort from "../property-sort";
import useMediaQuery from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";

const Properties = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const media = useMediaQuery();

  const isMapVisible = searchParams.get("map") === "true";

  const { data: propertiesData } = usePropertiesQuery(searchParams);

  if (propertiesData?.count === 0) {
    return (
      <div className="my-auto mt-4 flex h-40 w-full items-center justify-center rounded-md text-center font-bold text-neutral-200">
        <p>No results found</p>
      </div>
    );
  }

  return (
    <div className="mt-10">
      {isMapVisible && media !== "desktop" ? (
        <PropertiesLocation
          properties={propertiesData?.results!}
          className="absolute left-0 top-44 z-10 h-screen w-screen py-4 md:top-36"
        />
      ) : (
        <div>
          <div className="mb-4 md:flex md:w-full md:justify-between">
            <div>
              <h3 className="text-3xl font-bold">Property listing</h3>
              <p className="py-2 text-sm text-slate-500">
                There are currently 10000 properties.
              </p>
            </div>
            <PropertySort />
          </div>
          <ul className="flex gap-x-4">
            <div
              className={cn(
                "space-y-6 md:grid md:grid-cols-3 md:gap-6 md:space-y-0",
                isMapVisible &&
                  media === "desktop" &&
                  "w-1/2 overflow-y-auto lg:h-[calc(809px)] lg:grid-cols-2",
              )}
            >
              {propertiesData?.results?.map((property) => (
                <li key={property.id}>
                  <PropertyCard
                    property={property}
                    onClick={() =>
                      void router.push(`/listings/${property.slug}`)
                    }
                  />
                </li>
              ))}
            </div>

            {isMapVisible && media === "desktop" && (
              <PropertiesLocation
                properties={propertiesData?.results!}
                className="col-start-3 row-span-4 row-start-1 h-[calc(809px)] w-1/2 rounded-2xl"
              />
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Properties;
