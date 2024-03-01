"use client";

import React from "react";
import type { IProperty } from "@/types/property";
import PropertyCard from "@/components/property-card";
import { useRouter } from "next/navigation";

interface IProperties {
  properties: IProperty[];
}

const Properties = ({ properties }: IProperties) => {
  const router = useRouter();

  return (
    <ul className="mt-10 space-y-6 md:grid md:grid-cols-3 md:gap-6 md:space-y-0">
      {properties.map((property) => (
        <li key={property.propertyName}>
          <PropertyCard
            img="/property-image.png"
            location={property.location}
            price={property.price}
            sqm={property.sqm}
            propertyName="Furnished Condominium Unit"
            propertyType="Condominium"
            type={property.type}
            onClick={() =>
              void router.push(`/listings/${property.propertyName}`)
            }
          />
        </li>
      ))}
    </ul>
  );
};

export default Properties;
