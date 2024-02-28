import z from 'zod'

export const propertyValuationFormSchema = z.object({
  propertyType: z.string(),
  address: z.string(),
  location: z.string(),
  sqm: z.preprocess((val) => Number(val), z.number().positive()),
  yearBuilt: z.string(),
  whenAreyouLookingToSell: z.string(),
});

export const personalDetailsFormSchema = z.object({
  lastName: z.string(),
  firstName: z.string(),
  phoneNumber: z.string(),
  emailAddress: z.string().email(),
  termsAndConditions: z.boolean().refine((val) => val === true),
  offers: z.boolean().optional(),
});