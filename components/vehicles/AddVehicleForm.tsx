"use client"

import { ActionStateType, addVehicle } from "@/actions/add-vehicle-actions"
import { useRouter } from "next/navigation"
import { useActionState } from "react"


export default function AddVehicleForm ({children} : {children : React.ReactNode}) {


    const router = useRouter()

    const initialState: ActionStateType = {
        errors: [],
        success: ''
    }

   const [state, dispatch] = useActionState(addVehicle , initialState)

  return (
    <form
    action={dispatch}
    >
        {children}
        <input 
            type="submit" 
            className="rounded bg-green-400 font-bold py-2 w-full cursor-pointer"
            value="Agregar Producto"
        />
    </form>
  )
}
