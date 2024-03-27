"use client";
import { Button } from "@/components/ui/button";
import ValuationStepper from "@/store/useStepperStore";
import useValuationFormStore from "@/store/useValuationFormStore";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";

import { Separator } from "@/components/ui/separator";

const ValuationResult: React.FC = () => {
  const { setCurrentStepIndex } = ValuationStepper();

  const { propertyDetailValues } = useValuationFormStore();

  // const { data: valuationData } = useGetValuationResultHook({
  //   sqm: propertyDetailValues.sqm,
  //   yearBuilt: parseInt(propertyDetailValues.yearBuilt),
  //   location: propertyDetailValues.location,
  //   propertyType: propertyDetailValues.propertyType,
  // });

  // const forSaleValue = valuationData?.phpFormat.withoutClosedTransaction.forSale;
  // const forRentValue = valuationData?.phpFormat.withoutClosedTransaction.forRent

  const forSaleValue = {
    pricePerSqm: 1460000,
    appraisalValue: 1460000,
  };
  const forRentValue = {
    pricePerSqm: 1460000,
    appraisalValue: 1460000,
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
              {formatCurrency(forSaleValue.pricePerSqm)}
            </p>
            <p className="text-sm text-slate-500">Estimated value</p>
          </div>
          <Separator />
          <div>
            <p className="text-lg font-semibold text-emerald-600">
              {formatCurrency(forSaleValue.appraisalValue)}
            </p>
            <p className="text-sm text-slate-500">Appraisal value</p>
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
              {formatCurrency(forSaleValue.pricePerSqm)}
            </p>
            <p className="text-sm text-slate-500">Estimated value</p>
          </div>
          <Separator />
          <div>
            <p className="text-lg font-semibold text-emerald-600">
              {formatCurrency(forSaleValue.appraisalValue)}
            </p>
            <p className="text-sm text-slate-500">Appraisal value</p>
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
