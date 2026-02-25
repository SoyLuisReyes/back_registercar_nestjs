import VehicleTable from '@/components/vehicles/VehicleTable'
import { VehicleSchema, VehiclesResponseSchema } from '../../../src/schemas'
import AdminLayout from '../layout'
import Link from 'next/link'

async function getVehicles() {
  const url = `${process.env.API_URL}/vehicles`
  const req = await fetch(url)
  const json = await req.json()
  const vehicles = VehiclesResponseSchema.parse(json)
  return vehicles
}

export default async function VehiclesPage() {
  const vehicles = await getVehicles()
  console.log(vehicles);
  
  return (
    <div className="p-8">

      <Link
        href='/vehicles/new'
        className='rounded bg-amber-400 font-bold py-2 px-10'
      >Nuevo Vehiculo</Link>
      {/* Renderizado del componente */}
      <VehicleTable vehicles={vehicles}/>

    </div>
  )
}
