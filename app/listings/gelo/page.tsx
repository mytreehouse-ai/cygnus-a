import Amenities from "@/components/listings/details/amenities";
import Broker from "@/components/listings/details/broker";
import ContactForm from "@/components/listings/details/contact-form";
import Description from "@/components/listings/details/description";
import Galery from "@/components/listings/details/galery";
import Overview from "@/components/listings/details/overview";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { MapPin } from "lucide-react";

function PropertyDetails() {
  return (
    <main className="min-h-screen">
      <section className="space-y-1 px-4 pt-10 md:col-span-3">
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
      <div className="px-4 lg:grid lg:grid-cols-3 lg:gap-x-4">
        <div className="w-full space-y-4 py-10 lg:col-span-2">
          <section className="grid gap-4">
            <Galery />
            <div className="block lg:hidden">
              <Overview />
            </div>
          </section>
          <section className="grid gap-y-4">
            <Description />
            <div className="block lg:hidden">
              <Broker />
            </div>
          </section>
          <section className="grid gap-y-4">
            <Amenities />
            <div className="block lg:hidden">
              <ContactForm />
            </div>
          </section>
          <section>
            <div className="h-96 border">Address and map</div>
          </section>
        </div>
        <div className="hidden h-full space-y-4 py-10 lg:block">
          <Overview />
          <Broker />
          <ContactForm />
        </div>
      </div>
    </main>
  );
}

export default PropertyDetails;
