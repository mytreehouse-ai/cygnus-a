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

export const propertyDetailsValuationSchema = z.object({
	property_type: z.string(),
	listing_type: z.string(),
	area: z.string(),
	sqm: z.preprocess((val) => Number(val), z.number().positive()),
})

export const personalDetailsValuationSchema = z.object({
	first_name: z.string(),
	last_name: z.string(),
	phone_number: z.number(),
	email_address: z.string().email()
})

export const propertyValuationSchema = z.object({
	propertyDetails: propertyDetailsValuationSchema,
	personalDetails: personalDetailsValuationSchema
})

export type PropertyValuation = z.infer<typeof propertyValuationSchema>