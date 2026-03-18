"use server"

import { ErrorResponseSchema, VehicleFormSchema } from "@/src/schemas"

export type ActionStateType = {
    errors: string[],
    success: string
}

export async function addVehicle(prevState: ActionStateType, formData: FormData) {

    const vehicle = VehicleFormSchema.safeParse({
        model: formData.get('model'),
        type: formData.get('type'),
        plate: formData.get('plate')
    })

    //mostramos los errores en un toast en caso de existir
    if (!vehicle.success) {
        return {
            errors: vehicle.error.issues.map(issue => issue.message),
            success: ''
        }
    }

    // si todo es ok, nos comunicamos con la api del backend para guardar el registro
    const url = `${process.env.API_URL}/vehicles`
    const req = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(vehicle.data)
    })

    const json = await req.json()

    if (!req.ok) {
        const errors = ErrorResponseSchema.parse(json)
        return {
            errors: errors.message.map(issue => issue),
            success: ''
        }
    }

    return {
        errors: [],
        success: 'Producto Agregado Correctamente'
    }
}
