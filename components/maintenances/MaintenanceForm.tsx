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
    <>
    
      <div className="space-y-2">
        <label htmlFor="model" className="block font-medium">
          Mantenimiento
        </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Ej. Toyota Hilux 2024"
          className="border border-gray-300 w-full p-2"
          defaultValue={maintenance?.name}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="model" className="block font-medium">
          Kilometraje
        </label>
        <input
          id="mileage"
          type="text"
          name="mileage"
          placeholder="Ej. Toyota Hilux 2024"
          className="border border-gray-300 w-full p-2"
          defaultValue={maintenance?.mileage}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="model" className="block font-medium">
          Costo
        </label>
        <input
          id="mileage"
          type="cost"
          name="cost"
          placeholder="Ej. Toyota Hilux 2024"
          className="border border-gray-300 w-full p-2"
          defaultValue={maintenance?.cost}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="vehicleId" className="block font-medium">
          Vehiculo
        </label>
        <select
          id="vehicleId"
          name="vehicleId"
          className="border border-gray-300 w-full p-2 bg-white"
          defaultValue={maintenance?.vehicleId}
        >
          <option value="">Seleccionar Vehiculo</option>
          {vehicle.map((car) => (
            <option key={car.id} value={car.id}>
              {car.model}
            </option>
          ))}
        </select>
      </div>


      {/* Reutilizando tu lógica de imagen que ya tienes implementada */}
      <div className="space-y-2">
        <label className="block font-medium">Imagen de algun cambio</label>

        <p className="text-xs text-gray-400 italic">La imagen es opcional.</p>
      </div>
    </>
  );
}