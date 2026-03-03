type ActionStateType = {
  errors: string[],
  success: string
}

export async function UpdatedVehicle ( prevState: ActionStateType, formData: FormData) {

  console.log('desde updatevehicle');
  
  return  {
    errors: [],
    success: 'Vehiculo Actualizado Correctamente'
  }
}