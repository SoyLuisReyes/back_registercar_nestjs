import { Vehicle } from "@/src/schemas";
import { revalidatePath } from "next/cache";

export default function DeleteVehicleForm({vehicleId} : {vehicleId : Vehicle['id']}) {

    const handleDeleteVehicle = async () =>{
        "use server"

        const url = `${process.env.API_URL}/vehicles/${vehicleId}`
        const req = await fetch(url, {
            method: 'DELETE'
        })
        await req.json()
        revalidatePath('/vehicles')
    }

    return (
        <form
             action={handleDeleteVehicle}
        >
            <input type="submit" 
                className="text-red-600 hover:text-red-800 cursor-pointer"
                value='Eliminar'
            />
        </form>
    )
}