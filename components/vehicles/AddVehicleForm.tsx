"use client"

import { ActionStateType, addVehicle } from "@/actions/add-vehicle-actions"
import { useRouter } from "next/navigation"
import { useActionState, useEffect } from "react"
import { toast } from "react-toastify"


export default function AddVehicleForm ({children} : {children : React.ReactNode}) {


    const router = useRouter()

    const initialState: ActionStateType = {
        errors: [],
        success: ''
    }

   const [state, dispatch] = useActionState(addVehicle , initialState)

   useEffect(() => {
    if(state.errors){
        state.errors.forEach(error => toast.error(error))
    }
    if (state.success) {
        toast.success(state.success)
        router.push('/vehicles')
    }
   }, [state])
   

  return (
    <form
    action={dispatch}
    >
        {children}
        <input 
            type="submit" 
            className="rounded bg-green-400 font-bold py-2 w-full cursor-pointer"
            value="Agregar Vehiculo"
        />
    </form>
  )
}
