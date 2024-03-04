import React from "react";
import SearchBar from "@/components/search-bar";
import PropertyCard from "@/components/property-card";
import { ImageKitLoader } from "@/components/global/imagekit-loader";
import { useQuery } from "@tanstack/react-query";

export const propertyCardsData = [
  {
    img: "/path/to/image1.jpg",
    propertyName: "Sunny Apartment",
    propertyType: "Apartment",
    location: "Downtown",
    price: 1200,
    sqm: 85,
    type: "for-rent",
  },
  {
    img: "/path/to/image2.jpg",
    propertyName: "Cozy Cottage",
    propertyType: "House",
    location: "Countryside",
    price: 250000,
    sqm: 120,
    type: "for-sale",
  },
  {
    img: "/path/to/image3.jpg",
    propertyName: "Modern Studio",
    propertyType: "Studio",
    location: "City Center",
    price: 900,
    sqm: 45,
    type: "for-rent",
  },
];

const Home = () => {
  return (
    <main className="mx-auto">
      <section className="bg-emerald-50 px-6 py-14 lg:flex lg:justify-between lg:px-12 lg:pb-0">
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold md:text-6xl">
            Your Competitive Edge In Today&apos;s{" "}
            <span className="text-emerald-600">Real Estate Market.</span>
          </h1>
          <h2 className="pb-10 pt-4 text-gray-950 md:text-xl">
            Discover the ideal property effortlessly with our advanced search
            functionalities.
          </h2>
          <SearchBar />
        </div>
        <div className="hidden lg:block">
          <ImageKitLoader
            responsive={false}
            className="h-[500px] w-[500px]"
            src={"public/homepage-header-img.png"}
            alt={`homepage header image`}
            height={500}
            width={500}
          />
        </div>
      </section>
      <section className="px-6 py-14 lg:px-12">
        <h3 className="text-3xl font-bold"> Latest properties</h3>
        <p className="py-2 text-sm text-slate-500">
          Find your dream property with our listing
        </p>
        <ul className="mt-10 space-y-6 md:grid md:grid-cols-3 md:gap-6 md:space-y-0">
          {/* {propertyCardsData.map((property) => (
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
          ))} */}
        </ul>
      </section>
    </main>
  );
};

export default Home;
