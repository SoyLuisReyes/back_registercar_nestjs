import { Vehicle } from "@/src/schemas";

// Suponiendo que tienes una función para traer los tipos si vinieran de la DB, 
// o simplemente los definimos aquí.ç
const vehicleTypes = ["Sedan", "Camioneta", "Microbuss", "Motocicleta"];

export default async function VehicleForm({ vehicle }: { vehicle?: Vehicle }) {
  return (
    <>
      <div className="space-y-2">
        <label htmlFor="model" className="block font-medium">
          Modelo del Vehículo h
        </label>
        <input
          id="model"
          type="text"
          name="model"
          placeholder="Ej. Toyota Hilux 2024"
          className="border border-gray-300 w-full p-2"
          defaultValue={vehicle?.model}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="type" className="block font-medium">
          Tipo de Vehículo
        </label>
        <select
          id="type"
          name="type"
          className="border border-gray-300 w-full p-2 bg-white"
          defaultValue={vehicle?.type}
        >
          <option value="">Seleccionar Tipo</option>
          {vehicleTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="plate" className="block font-medium">
          Placa / Matrícula
        </label>
        <input
          id="plate"
          type="text"
          name="plate"
          placeholder="Ej. M 123456"
          className="border border-gray-300 w-full p-2"
          defaultValue={vehicle?.plate}
        />
      </div>

      {/* Reutilizando tu lógica de imagen que ya tienes implementada */}
      <div className="space-y-2">
        <label className="block font-medium">Imagen del Vehículo</label>

        <p className="text-xs text-gray-400 italic">La imagen es opcional.</p>
      </div>
    </>
  );
}