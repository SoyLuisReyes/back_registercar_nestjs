import { Maintenance } from '@/src/schemas';

// Definimos la interfaz de las Props que va a recibir la tabla
interface MaintenanceTableProps {
  maintenances: Maintenance[];
}

export default function MaintenanceTable({ maintenances }: MaintenanceTableProps) {
  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
        <thead className="bg-gray-50 text-left text-gray-600 uppercase text-xs font-semibold">
          <tr>
            <th className="px-6 py-3 border-b">Concepto</th>
            <th className="px-6 py-3 border-b">Kilometraje</th>
            <th className="px-6 py-3 border-b">Costo</th>
            <th className="px-6 py-3 border-b text-center">Imagen</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {maintenances && maintenances.length > 0 ? (
            maintenances.map((maintenance) => (
              <tr key={maintenance.id} className="hover:bg-gray-50 transition-colors">
                {/* Concepto / Nombre del mantenimiento */}
                <td className="px-6 py-4 font-medium text-gray-900">
                  {maintenance.name}
                </td>

                {/* Kilometraje */}
                <td className="px-6 py-4 text-gray-600">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-semibold">
                    {maintenance.mileage.toLocaleString()} km
                  </span>
                </td>

                {/* Costo formateado en dólares */}
                <td className="px-6 py-4 font-mono font-bold text-emerald-600">
                  ${Number(maintenance.cost).toFixed(2)}
                </td>

                {/* Imagen del recibo o repuesto */}
                <td className="px-6 py-4 flex justify-center">
                  <div className="relative h-12 w-20 overflow-hidden rounded-md border bg-gray-50 flex items-center justify-center">
                    {maintenance.image && maintenance.image !== 'default.svg' && maintenance.image !== 'null' ? (
                      <img
                        src={maintenance.image}
                        alt={maintenance.name}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <span className="text-[10px] text-gray-400 font-medium uppercase">Sin foto</span>
                    )}
                  </div>
                </td>
              </tr>
            ))
          ) : (
            // Estado vacío por si el vehículo no registra nada aún
            <tr>
              <td colSpan={4} className="px-6 py-12 text-center text-gray-400 italic bg-gray-50">
                No hay mantenimientos registrados para este vehículo todavía.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}