import React from "react";
import { Search } from "@/components/listings/search-filter";
import { Separator } from "@/components/ui/separator";
import { propertyCardsData } from "@/app/page";
import PropertyCard from "@/components/property-card";
import PropertySort from "@/components/listings/property-sort";
import Pagination from "@/components/global/pagination";
import Properties from "@/components/listings/properties";

/**
 * The Listings component renders a list of property cards with search and pagination functionality.
 * It displays property listings, allowing users to filter through them using the SearchFilter component,
 * sort them with the PropertySort component, and navigate through pages with the Pagination component.
 */
function Listings() {
  return (
    <main className="flex min-h-screen flex-col justify-between pb-4 pt-2">
      <div>
        <Search />
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
          <Properties properties={propertyCardsData} />
        </section>
      </div>
      <Pagination className="mt-4 flex justify-start px-4" />
    </main>
  );
}

export default Listings;
