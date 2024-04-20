import z from 'zod'



export const propertyDetailsValuationSchema = z.object({
	property_type: z.string(),
	// listing_type: z.string(),
	area: z.string().min(4),
	sqm: z.preprocess((val) => Number(val), z.number().positive().min(20)),
	address: z.string().optional()
})

export const personalDetailsValuationSchema = z.object({
	first_name: z.string(),
	last_name: z.string(),
	phone_number: z.string().optional(),
	email_address: z.string().email(),
	termsAndConditions: z.boolean().refine((val) => val === true),
  offers: z.boolean().optional(),
})

export const propertyValuationSchema = z.object({
	propertyDetails: propertyDetailsValuationSchema,
	personalDetails: personalDetailsValuationSchema
})

export type PropertyValuation = z.infer<typeof propertyValuationSchema>