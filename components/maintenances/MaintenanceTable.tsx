import { Maintenance} from '@/src/schemas';
import Link from 'next/link';


export default function MaintenanceTable({maintenances}: {maintenances : Maintenance[]}) {

  
  return (
    <div className="overflow-x-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Administración de Mantenimiento</h1>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
        <thead className="bg-gray-50 text-left text-gray-600 uppercase text-xs font-semibold">
          <tr>
            <th className="px-6 py-3 border-b">Concepto</th>
            <th className="px-6 py-3 border-b">Kilometraje</th>
            <th className="px-6 py-3 border-b">Costo</th>
            <th className="px-6 py-3 border-b">Imagen </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {maintenances?.map((maintenance) => (

            <tr key={maintenance.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-medium text-gray-900">{maintenance.name}</td>
              
              <td className="px-6 py-4 text-gray-600">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  {maintenance.mileage}
                </span>
              </td>

              <td className="px-6 py-4 font-mono text-gray-600">{maintenance.cost}</td>


              <td className="px-6 py-4">
                <div className="relative h-12 w-20 overflow-hidden rounded-md border">
                  <img
                    src={maintenance.image}
                    alt={maintenance.image}
                    className="object-cover w-full h-full"
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