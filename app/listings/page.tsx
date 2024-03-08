import React, { Suspense } from "react";
import { Separator } from "@/components/ui/separator";
import PropertySort from "@/components/listings/property-sort";
import Pagination from "@/components/global/pagination";
import Properties from "@/components/listings/properties";
import SearchFilter from "@/components/listings/search-filter";

/**
 * The Listings component renders a list of property cards with search and pagination functionality.
 * It displays property listings, allowing users to filter through them using the SearchFilter component,
 * sort them with the PropertySort component, and navigate through pages with the Pagination component.
 */
function Listings() {
  return (
    <main className="flex min-h-screen flex-col justify-between pb-4 pt-2">
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <SearchFilter />
        </Suspense>
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
          <Suspense fallback={<div>Loading...</div>}>
            <Properties />
          </Suspense>
        </section>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Pagination className="mt-4 flex justify-start px-4" />
      </Suspense>
    </main>
  );
}

export default Listings;
