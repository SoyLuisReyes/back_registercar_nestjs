import { z } from 'zod'

export const VehicleSchema = z.object({
    id: z.number(),
    model: z.string(),
    type: z.string(),
    plate: z.string(),
    image: z.string()
})

export type Vehicle = z.infer<typeof VehicleSchema>