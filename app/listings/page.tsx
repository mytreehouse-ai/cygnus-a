import React from "react";
import SearchFilter from "@/components/listings/search-filter";
import { Separator } from "@/components/ui/separator";
import { propertyCardsData } from "../page";
import PropertyCard from "@/components/property-card";
import PropertySort from "@/components/listings/property-sort";
import Pagination from "@/components/global/pagination";

const Listings = () => {
  return (
    <main className="pb-4 pt-2">
      <SearchFilter />
      <Separator className="my-6" />
      <section className="mt-8 px-4">
        <div className="md:flex md:w-full md:justify-between">
          <div>
            <h3 className="text-3xl font-bold">Property listing</h3>
            <p className="py-2 text-sm text-slate-500">
              There are currently 10000 properties.
            </p>
          </div>

          <PropertySort />
        </div>

        <ul className="mt-10 space-y-6 md:grid md:grid-cols-3 md:gap-6 md:space-y-0">
          {propertyCardsData.map((property) => (
            <li key={property.propertyName}>
              <PropertyCard
                img="/property-image.png"
                location={property.location}
                price={property.price}
                sqm={property.sqm}
                propertyName="Furnished Condominium Unit"
                propertyType="Condominium"
                type={property.type}
              />
            </li>
          ))}
        </ul>
      </section>
      <Pagination className="mt-4 flex justify-start px-4" />
    </main>
  );
};

export default Listings;