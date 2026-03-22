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

// SCHEMA PARA LA VALIDACION DEL FORMULARIO AL CREAR MANTENIMIENTO
export const MaintenanceSchema = z.object({
    id: z.number,
    name: z.string,
    mileage: z.number,
    cost: z.number,
    image: z.string,
    vehicleId: z.number
})


export const MaintenanceFormSchema = z.object({
    name: z.string()
        .min(1, {message: 'El mantenimiento no puede ir vacio'}),
    mileage: z.coerce.number({message: 'Kilometraje no valido'})
        .min(1, { message: 'EL kilometraje debe ser mayor a cero'}),
    cost: z.coerce.number({message: 'Costo no valido'})
        .min(1, { message: 'el costo debe ser mayor a cero'}),
    vehicleId: z.coerce.number({ message: 'Vehiculo no valido' })    
})

export type Maintenance = z.infer<typeof MaintenanceSchema>

export type Vehicle = z.infer<typeof VehicleSchema>
export const VehiclesResponseSchema = z.array(VehicleSchema)