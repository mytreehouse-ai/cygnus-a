import { create } from "zustand";
import { z } from "zod";
import { propertyValuationFormSchema, personalDetailsFormSchema } from "@/schema/valuation";
import type { PropertyValuation } from "@/schema/valuation";

type PropertyFormType = z.infer<typeof propertyValuationFormSchema>;
type PersonalFormType = z.infer<typeof personalDetailsFormSchema>;

interface FormStore extends Pick<PropertyValuation, "propertyDetails"> {
  personalDetailValues: PersonalFormType;
  setPropertyDetailValues: (values: Pick<PropertyValuation, "propertyDetails">) => void;
  setPersonalDetailValues: (values: PersonalFormType) => void;
}

const useValuationFormStore = create<FormStore>((set) => ({
propertyDetails: {
	area: "",
	listing_type: "",
	property_type: "",
	sqm: 0,
	address: ""
},
  personalDetailValues: {} as PersonalFormType,
  setPropertyDetailValues: (values) =>
    set(() => ({ propertyDetails: {
			...values.propertyDetails
		} })),
  setPersonalDetailValues: (values) =>
    set(() => ({ personalDetailValues: values })),
}));

export default useValuationFormStore;
