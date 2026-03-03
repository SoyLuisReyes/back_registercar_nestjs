import { ErrorResponseSchema, Vehicle, VehicleFormSchema } from "@/src/schemas"
import { success } from "zod"

type ActionStateType = {
  errors: string[],
  success: string
}

export async function UpdatedVehicle(vehicleId: Vehicle['id'], prevState: ActionStateType, formData: FormData) {

  const vehicle = VehicleFormSchema.safeParse({
    model: formData.get('model'),
    type: formData.get('type'),
    plate: formData.get('plate')
  })

  // en caso de errores los mostramos en pantalla mediante un toast
  if (!vehicle.success) {
    // Renderizamos los errores con useEffect y los mostramos en pantalla con un toast
    return {
      errors: vehicle.error.issues.map(issue => issue.message),
      success: ''
    }
  }

  // si la validacion es correcta la enviamos a nuestra api
  const url = `${process.env.API_URL}/vehicles/${vehicleId}`
  const req = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
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
    success: 'Vehiculo Actualizado Correctamente'
  }
}