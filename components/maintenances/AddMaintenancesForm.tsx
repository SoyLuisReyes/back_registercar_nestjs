import { ActionStateType } from "@/actions/add-vehicle-actions"
import { useRouter } from "next/navigation"

export default function AddMaintenancesForm({children} : {children : React.ReactNode}) {

    const router = useRouter()

    const initialState: ActionStateType = {
        errors: [],
        success: ''
    }
        

    return (
        <form
         
        >
            {children}
            <input
                type="submit"
                className="rounded bg-green-400 font-bold py-2 w-full cursor-pointer"
                value="Agregar Mantenimiento"
            />
        </form>
    )
}