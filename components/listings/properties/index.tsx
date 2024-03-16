"use client";

import React from "react";
import PropertyCard from "@/components/property-card";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import usePropertiesQuery from "@/services/usePropertiesQuery";

const Properties = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { data: propertiesData } = usePropertiesQuery({
    search: searchParams?.has("search")
      ? searchParams.get("search") ?? ""
      : undefined,
    property_type_id: searchParams?.has("property_type")
      ? parseInt(searchParams.get("property_type") ?? "", 10)
      : undefined,
    city_id: searchParams?.has("location")
      ? parseInt(searchParams.get("location") ?? "", 10)
      : undefined,
    listing_type_id: searchParams?.has("listing-type")
      ? parseInt(searchParams.get("listing-type") ?? "", 10)
      : undefined,
    num_bathrooms_min: searchParams?.has("bathroom")
      ? parseInt(searchParams.get("bathroom") ?? "", 10)
      : undefined,
    num_bedrooms_min: searchParams?.has("bedroom")
      ? parseInt(searchParams.get("bedroom") ?? "", 10)
      : undefined,
    price_min: searchParams?.has("min_price")
      ? parseInt(searchParams.get("min_price") ?? "", 10)
      : undefined,
    price_max: searchParams?.has("max_price")
      ? parseInt(searchParams.get("max_price") ?? "", 10)
      : undefined,
    page: searchParams?.has("page")
      ? parseInt(searchParams.get("page") ?? "", 10)
      : 1,
    page_size: searchParams?.has("pageSize")
      ? parseInt(searchParams.get("pageSize") ?? "", 10)
      : 12,
  });

  if (propertiesData?.count === 0) {
    return (
      <div className="my-auto mt-4 flex h-40 w-full items-center justify-center rounded-md text-center font-bold text-neutral-200">
        <p>No results found</p>
      </div>
    );
  }

  return (
    <ul className="mt-10 space-y-6 md:grid md:grid-cols-3 md:gap-6 md:space-y-0">
      {propertiesData?.results?.map((property) => (
        <li key={property.id}>
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
