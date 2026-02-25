import VehicleTable from '@/components/vehicles/VehicleTable'
import { VehicleSchema, VehiclesResponseSchema } from '../../../src/schemas'

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
      <h1 className="text-2xl font-bold mb-6">Administración de Vehículos</h1>

      {/* Renderizado del componente */}
      <VehicleTable vehicles={vehicles}/>

    </div>
  )
}
