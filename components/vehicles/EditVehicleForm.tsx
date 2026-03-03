"use client"
import { UpdatedVehicle } from '@/actions/updated-vehicle-actions'
import { useActionState } from 'react'

export default function EditVehicleForm ({ children }: { children: React.ReactNode }) {

  const [state, dispatch] = useActionState(UpdatedVehicle, {
    errors: [],
    success: ''
  })

  return (
    <form 
      className='space-y-5' 
      action={dispatch}
      >
        {children}
        <input 
          type="submit"
          className='rounded bg-green-400 font-bold py-2 w-full cursor-pointer'
          value="Guardar Cambios" 
        />
    </form>
  )
}
