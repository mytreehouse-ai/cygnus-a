"use client";
import z from "zod";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import ValuationStepper from "@/store/useStepperStore";
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
    <main>
      <div className="bg-emerald-50 px-4 pb-4 pt-10 md:px-6 lg:flex lg:gap-6  lg:pb-0">
        <div className="lg:w-3/4">
          <h1 className="text-4xl font-bold md:text-5xl">
            Expert Property
            <span className="text-emerald-600"> Valuation Service</span>
          </h1>
          <h2 className="pb-10 pt-4 text-gray-950 md:text-base">
            Trust in our expertise to accurately assess and reveal the true
            value of your assets, empowering you to make informed decisions with
            confidence
          </h2>
        </div>
        <div className="hidden h-56 w-2/5 rounded-t-full lg:block lg:border"></div>
      </div>
      <div className="px-4 pb-4 pt-10  md:pt-12">
        <h3 className="text-center text-3xl font-bold md:hidden">
          Tell us about your property
        </h3>
        <p className="tex-sm mt-4 text-center text-slate-500 md:hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed
          tristique.
        </p>
        <Progress
          className="mt-8 md:mx-auto md:max-w-2xl md:rounded-b-none"
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
        <Card className="relative mx-auto mt-4 w-full min-w-[320px] max-w-[1000px] overflow-y-auto rounded-xl border-none shadow-none md:mt-0 md:min-w-[480px] md:max-w-2xl md:rounded-xl md:rounded-t-none md:border md:p-6 md:shadow-lg">
          <CardHeader className="hidden md:block">
            <h3 className="text-center text-3xl font-bold ">
              Tell us about your property
            </h3>
            <p className="tex-sm mt-4 text-center text-slate-500 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed
              tristique.
            </p>
          </CardHeader>
          <CardContent className="px-0">
            {ComponentToRender && <ComponentToRender />}
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default PropertyValuation;
