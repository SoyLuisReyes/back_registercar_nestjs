import { Maintenance, VehiclesResponseSchema } from "@/src/schemas";

// hacemos una consulta a la bbdd para traernos las vehiculos
async function getVehicles(){
  const url = `${process.env.API_URL}/vehicles`
  const req = await fetch(url)
  const json = await req.json()
  const vehicles = VehiclesResponseSchema.parse(json)
  return vehicles 
}



export default async function ManintenanceForm( {maintenance }: {maintenance: Maintenance}) {
  const vehicle = await getVehicles()
  return (
    console.log(vehicle)
  );
}