import { Vehicle } from '@/src/schemas';
import Link from 'next/link';
import DeleteVehicleForm from './DeleteVehicleForm';


export default function VehicleTable({ vehicles }: { vehicles: Vehicle[] }) {

  //console.log(vehicles);


  return (
    <div className="overflow-x-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Administración de Vehículos</h1>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
        <thead className="bg-gray-50 text-left text-gray-600 uppercase text-xs font-semibold">
          <tr>
            <th className="px-6 py-3 border-b">Imagen</th>
            <th className="px-6 py-3 border-b">Modelo</th>
            <th className="px-6 py-3 border-b">Tipo</th>
            <th className="px-6 py-3 border-b">Placa</th>
            <th className="px-6 py-3 border-b">Acciones</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {vehicles?.map((vehicle) => (
            <tr key={vehicle.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4">
                <div className="relative h-12 w-20 overflow-hidden rounded-md border">
                  <img
                    src={vehicle.image}
                    alt={vehicle.model}
                    className="object-cover w-full h-full"
                  />
                </div>
              </td>
              <td className="px-6 py-4 font-medium text-gray-900">
                <Link href={`/vehicles/${vehicle.id}`} className="block w-full h-full hover:underline">
                  {vehicle.model}
                </Link>
              </td>
              <td className="px-6 py-4 text-gray-600">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  {vehicle.type}
                </span>
              </td>
              <td className="px-6 py-4 font-mono text-gray-600">{vehicle.plate}</td>
              <td className="px-6 py-4 text-gray-600">
                <div className='flex gap-5 justify-end items-center'>
                  <Link
                    className="text-indigo-600 hover:text-indigo-800"
                    href={`vehicles/${vehicle.id}/edit`}
                  > Editar <span className='sr-only'>, {vehicle.model} </span>
                  </Link>
                  <DeleteVehicleForm
                    vehicleId={vehicle.id}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}