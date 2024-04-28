"use client";
import { Button } from "@/components/ui/button";
import useStepperStore from "@/store/useStepperStore";
import useValuationFormStore from "@/store/useValuationFormStore";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Drawer, DrawerContent, DrawerHeader } from "@/components//ui/drawer";
import { Modal } from "@/types";
import { useState } from "react";
import type { PropertyListing } from "@/types";
import { Link2 } from "lucide-react";
import Link from "next/link";
import { Star } from "lucide-react";

const ValuationResult: React.FC = () => {
  const [showSimilarProperties, setShowSimilarProperties] = useState(false);
  const { setCurrentStepIndex } = useStepperStore();

  const { valuationResult } = useValuationFormStore();

  const propertyValuationResult = valuationResult?.valuation;

  const forSaleValue = {
    average_price: propertyValuationResult?.sale.average_price ?? 0,
    price_per_sqm: propertyValuationResult?.sale?.price_per_sqm ?? 0,
  };
  const forRentValue = {
    average_price: propertyValuationResult?.rent?.average_price ?? 0,
    price_per_sqm: propertyValuationResult?.rent?.price_per_sqm ?? 0,
  };

  const forSaleSimilarProperties =
    valuationResult?.valuation?.sale?.similar_properties;
  const forRentSimilarProperties =
    valuationResult?.valuation?.rent?.similar_properties;

  return (
    <>
      <SimilarProperties
        open={showSimilarProperties}
        properties={forSaleSimilarProperties ?? []}
        onOpenChange={(e) =>
          e ? setShowSimilarProperties(true) : setShowSimilarProperties(false)
        }
      />
      <div className="space-y-3">
        <Card>
          <CardContent className="space-y-4 text-center">
            <div>
              <div
                className="relative mx-auto w-12 "
                style={{ paddingTop: "30%" }}
              >
                <Image
                  src={"/for-sale.png"}
                  alt={`for rent image`}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>

              <h2 className=" text-lg font-semibold">For sale value</h2>
              {forSaleSimilarProperties &&
                forSaleSimilarProperties?.length > 0 && (
                  <p className="text-sm text-slate-500">
                    {`      There are ${forSaleSimilarProperties?.length} properties similar to yours, `}

                    <span
                      className="text-emerald-600 hover:cursor-pointer hover:text-emerald-700 hover:underline"
                      onClick={() => setShowSimilarProperties(true)}
                    >
                      Click here to view
                    </span>
                  </p>
                )}
            </div>

            <Separator />
            <div>
              <p className="text-lg font-semibold text-emerald-600">
                {forSaleValue.price_per_sqm}
              </p>
              <p className="text-sm text-slate-500">Price per sqm</p>
            </div>
            <Separator />
            <div>
              <p className="text-lg font-semibold text-emerald-600">
                {forSaleValue.average_price}
              </p>
              <p className="text-sm text-slate-500">Average price</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-4 text-center">
            <div>
              <div
                className="relative mx-auto w-12 "
                style={{ paddingTop: "30%" }}
              >
                <Image
                  src={"/for-rent.png"}
                  alt={`for rent image`}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <h2 className=" text-lg font-semibold">For rent value</h2>
              {forRentSimilarProperties &&
                forRentSimilarProperties.length > 0 && (
                  <p className="text-sm text-slate-500">
                    {`      There are ${forRentSimilarProperties?.length} properties similar to yours, `}

                    <span className="text-emerald-600 hover:cursor-pointer hover:text-emerald-700 hover:underline">
                      Click here to view
                    </span>
                  </p>
                )}
            </div>

            <Separator />
            <div>
              <p className="text-lg font-semibold text-emerald-600">
                {forRentValue?.price_per_sqm}
              </p>
              <p className="text-sm text-slate-500">Price per sqm</p>
            </div>
            <Separator />
            <div>
              <p className="text-lg font-semibold text-emerald-600">
                {forRentValue?.average_price}
              </p>
              <p className="text-sm text-slate-500">Average price</p>
            </div>
          </CardContent>
        </Card>
        <Button
          className="mt-4 w-full"
          type="submit"
          variant="outline"
          onClick={() => {
            setCurrentStepIndex(0);
          }}
        >
          Valuate again
        </Button>
      </div>
    </>
  );
};

export default ValuationResult;

interface SimilarPropertiesProps extends Omit<Modal, "onClose"> {
  properties: Pick<
    PropertyListing,
    "id" | "listing_title" | "listing_url" | "price_formatted"
  >[];
  onOpenChange: (e: boolean) => void;
}

const SimilarProperties = ({
  open,
  properties,
  onOpenChange,
}: SimilarPropertiesProps) => {
  console.log(properties);
  return (
    <Drawer open={open} onOpenChange={(e) => onOpenChange(e)}>
      <DrawerContent className="h-3/4">
        <DrawerHeader className="flex items-center justify-between px-8">
          <h2 className="text-xl font-bold md:text-2xl">Similar Properties</h2>
        </DrawerHeader>
        <div className="space-y-4 overflow-y-auto px-7 pb-4 pt-2">
          {properties.map((property) => (
            <article key={property.id} className="rounded-lg border p-4">
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-emerald-500">
                    {property.price_formatted}
                  </p>
                  <Star className="h-4 w-4 text-yellow-500 hover:cursor-pointer" />
                </div>
                <h3 className="font-semibold"> {property.listing_title}</h3>

                <h4 className="inline-flex items-center gap-2 text-sm text-slate-500 hover:cursor-pointer hover:text-emerald-500 hover:underline">
                  <Link2 className="h-4 w-4" />
                  <Link href={property.listing_url} target="_blank">
                    {property.listing_url}
                  </Link>
                </h4>
              </div>
            </article>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
};
