import { create } from "zustand";
import { z } from "zod";

import type { PropertyValuation } from "@/schema/valuation";
import { ValuationResult } from "@/types/valuation-result";

interface FormStore extends Pick<PropertyValuation, "propertyDetails" | "personalDetails"> {
	valuationResult: ValuationResult | null;
  setPropertyDetailValues: (values: Pick<PropertyValuation, "propertyDetails">) => void;
  setPersonalDetailValues: (values: Pick<PropertyValuation, "personalDetails">) => void;
	setValuationResult: (result: ValuationResult) => void; 
}

const useValuationFormStore = create<FormStore>((set) => ({
	valuationResult: null,
	propertyDetails: {
	area: "",
	listing_type: "",
	property_type: "",
	sqm: 0,
	address: ""
},
  personalDetails: {
		email_address: "",
		first_name: "",
		last_name: "",
		phone_number: "09",
		termsAndConditions: false,
		offers: false,
	},
  setPropertyDetailValues: (values) =>
    set(() => ({ propertyDetails: {
			...values.propertyDetails
		} })),
  setPersonalDetailValues: (values) =>
    set(() => ({ personalDetails: {
			...values.personalDetails
		} })),
	setValuationResult: (result) =>
    set(() => ({ valuationResult: result })), // 
}));

export default useValuationFormStore;
