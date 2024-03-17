import Amenities from "@/components/listings/details/amenities";
import Broker from "@/components/listings/details/broker";
import Description from "@/components/listings/details/description";
import Galery from "@/components/listings/details/galery";
import Overview from "@/components/listings/details/overview";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { MapPin } from "lucide-react";

function PropertyDetails() {
  return (
    <main className="min-h-screen space-y-8 px-4 py-10">
      <section className="space-y-1 md:col-span-3 ">
        <div className="md:flex md:items-center md:gap-x-2">
          <h3 className="text-2xl font-bold">Furnished Condominium Unit</h3>
          <Badge className={cn(" rounded-md bg-orange-400 ")}>For Rent</Badge>
        </div>
        <p className="flex items-center gap-x-2 py-2 text-sm text-slate-500">
          <MapPin className="h-4 w-4 text-slate-500" />
          <span> Paseo de Roxas, Makati</span>
        </p>
        <h3 className="text-3xl font-bold text-emerald-600">$146,000</h3>
      </section>
      <section className="grid gap-y-8 lg:grid-cols-2 lg:gap-x-4 xl:grid-cols-3">
        <Galery />
        <Overview />
      </section>
      <section className="grid gap-y-8 lg:grid-cols-2 lg:gap-x-4">
        <Description />
        <Broker />
      </section>
      <section className="grid gap-y-8 lg:grid-cols-2 lg:gap-x-4">
        <Amenities />
      </section>
    </main>
  );
}

export default PropertyDetails;
