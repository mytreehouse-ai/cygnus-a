"use client";
import z from "zod";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import ValuationStepper from "@/hooks/useStepperStore";
import PropertyDetails from "./property-details";
import PersonalDetails from "./personal-details";
import ValuationResult from "./valuation-result";

const componentsMap = {
  Property: PropertyDetails,
  Personal: PersonalDetails,
  Results: ValuationResult,
};

const PropertyValuation: React.FC = () => {
  const { steps, currentStepIndex, markStepAsComplete } = ValuationStepper();

  const ComponentToRender =
    componentsMap[
      steps[currentStepIndex]?.name as keyof typeof componentsMap
    ] || null;

  return (
    <Card className="relative mx-auto w-full min-w-[320px] max-w-[1000px] overflow-y-auto rounded-xl border-none shadow-none md:min-w-[480px] md:rounded-xl">
      <div className="sticky left-0 top-0 z-10 flex h-20 w-full items-center justify-center bg-white px-6">
        <Progress
          value={
            currentStepIndex === 1
              ? 33.33
              : currentStepIndex === 2
                ? 100
                : currentStepIndex === 3
                  ? 100
                  : 0
          }
        />
      </div>
      <CardContent>{ComponentToRender && <ComponentToRender />}</CardContent>
    </Card>
  );
};

export default PropertyValuation;
