"use client";
import { Button } from "@/components/ui/button";
import useStepperStore from "@/store/useStepperStore";
import useValuationFormStore from "@/store/useValuationFormStore";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

const ValuationResult: React.FC = () => {
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

  return (
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
  );
};

export default ValuationResult;
