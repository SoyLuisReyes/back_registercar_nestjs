"use server"


import { ErrorResponseSchema, MaintenanceFormSchema } from "@/src/schemas"

export type ActionStateType = {
    errors: string[],
    success: string
}

export async function addMaintenance(prevState: ActionStateType, formData: FormData) {
    
    const maintenance = MaintenanceFormSchema.safeParse({
        name : formData.get('name'),
        mileage: formData.get('mileage'),
        cost: formData.get('cost'),
        vehicleId: formData.get('vehicleId')
    })

    //Mostramos errores si llegaran a existir 
    if (!maintenance.success) {
        return {
            errors : maintenance.error.issues.map(issue => issue.message),
            success: ''
        }
    }

    // si todo esta OK, comunicamos con el backend
    const url = `${process.env.API_URL}/maintenances`
    const req = await fetch(url, {
        method: 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(maintenance.data)
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
        success: 'Mantenimiento Agregado Correctamente'
    }
}