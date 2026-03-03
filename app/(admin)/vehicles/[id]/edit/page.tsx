import Heading from '@/components/ui/Heading'
import EditVehicleForm from '@/components/vehicles/EditVehicleForm'
import VehicleForm from '@/components/vehicles/VehicleForm'
import { VehicleSchema } from '@/src/schemas'
import { notFound } from 'next/navigation'

async function  getVehicles(id: string){
    const url = `${process.env.API_URL}/vehicles/${id}`
    const req = await fetch(url)
    const json = await req.json()
    if(!req.ok){
        notFound()
    }

    const vehicle = VehicleSchema.parse(json)
    return vehicle 
}

//Pasamos el id via generic para ser leido desde la url
type Params = Promise<{id: string}>

export default async function EditProductPage({params} : {params : Params}) {
    const { id } = await params
    const vehicle = await getVehicles(id)
    //console.log(vehicle);
    
  return (
    <> 
        <Heading> Editar Vehiculo: { vehicle.model} </Heading>
   
    
    <EditVehicleForm>
        <VehicleForm 
            vehicle={vehicle}
        />
    </EditVehicleForm>  
 </>
  )
}
