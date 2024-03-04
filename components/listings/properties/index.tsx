"use client";

import React from "react";
import type { IProperty } from "@/types/property";
import PropertyCard from "@/components/property-card";
import { useRouter } from "next/navigation";
import usePropertiesQuery from "@/services/properties";

// interface IProperties {
//   properties: IProperty[];
// }

const Properties = () => {
  const router = useRouter();

  const { data: propertiesData } = usePropertiesQuery({
    city_id: 1990,
  });

  console.log(propertiesData);

  return (
    <ul className="mt-10 space-y-6 md:grid md:grid-cols-3 md:gap-6 md:space-y-0">
      {propertiesData?.results?.map((property) => (
        <li key={property.estate.building_name}>
          <PropertyCard
            property={property}
            onClick={() =>
              void router.push(`/listings/${property.listing_title}`)
            }
          />
        </li>
      ))}
    </ul>
  );
};

export default Properties;
