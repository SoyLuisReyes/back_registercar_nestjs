import { z } from 'zod'

/**SUCCESS & ERROR RESPONSE **/

export const SuccessResponseSchema = z.object({
    message: z.string()
})

export const ErrorResponseSchema = z.object({
    message: z.array(z.string()),
    error: z.string(),
    statusCode: z.number()
})

export const VehicleSchema = z.object({
    id: z.number(),
    model: z.string(),
    type: z.string(),
    plate: z.string(),
    image: z.string()
})

// SCHEMA PARA LA VALIDACION DEL FORMULARIO AL CREAR VEHICULO
export const VehicleFormSchema = z.object({
    model: z.string()
        .min(1, {message: 'El modelo no puede ir vacio'}),
    type: z.string()
        .min(1, { message: 'El tipo de vehiculo no puede ir vacio'}),
    plate: z.string()
        .min(1, {message: 'EL número de placa no puede ir vacio'})
})


export type Vehicle = z.infer<typeof VehicleSchema>
export const VehiclesResponseSchema = z.array(VehicleSchema)