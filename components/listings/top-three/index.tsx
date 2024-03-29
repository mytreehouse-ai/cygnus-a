"use client";

import PropertyCard from "@/components/property-card";
import { PropertyListing } from "@/types";
import { useRouter } from "next/navigation";

interface TopThreeListingsProps {
  propertiesData: PropertyListing[];
}

function TopThreeListings({ propertiesData }: TopThreeListingsProps) {
  const router = useRouter();

  return (
    <ul className="mt-10 space-y-6 md:grid md:grid-cols-3 md:gap-6 md:space-y-0">
      {propertiesData?.map((property) => (
        <li key={property.id}>
          <PropertyCard
            property={property}
            onClick={() => void router.push(`/listings/${property.slug}`)}
          />
        </li>
      ))}
    </ul>
  );
}

export default TopThreeListings;
