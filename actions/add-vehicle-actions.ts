"use server"

export type ActionStateType = {
    errors: string[],
    success: string
}

export async function addVehicle(prevState: ActionStateType, formData: FormData) {

    console.log("desde addVehicle actions")


    return {
           errors: [],
        success: 'Producto Agregado Correctamente'
    }
}
