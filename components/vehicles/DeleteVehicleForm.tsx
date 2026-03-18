import { Vehicle } from "@/src/schemas";

export default function DeleteVehicleForm({vehicleId} : {vehicleId : Vehicle['id']}) {

    const handleDeleteVehicle = async () =>{
        "use server"
        console.log('producto Eliminado...');
        
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