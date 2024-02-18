import SearchBar from "@/components/pages/home/search-bar";
import PropertyCard from "@/components/pages/home/property-card";
import Navbar from "@/components/global/nav-bar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-emerald-50 p-4">
        <SearchBar />
        <PropertyCard
          img="/property-image.png"
          location="Paseo de Roxas, Makati"
          price={146000}
          sqm={304}
          propertyName="Furnished Condominium Unit"
          propertyType="Condominium"
          type="for-rent"
        />
      </div>
    </>
  );
}
