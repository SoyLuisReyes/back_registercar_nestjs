import Image from 'next/image';

const autos = [
  {
    id: 1,
    modelo: "Tesla Model 3",
    tipo: "Eléctrico",
    placa: "ABC-1234",
    imagen: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 2,
    modelo: "Toyota Hilux",
    tipo: "Pick-up",
    placa: "XYZ-5678",
    imagen: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=200"
  }
];

export default function VehicleTable() {
  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
        <thead className="bg-gray-50 text-left text-gray-600 uppercase text-xs font-semibold">
          <tr>
            <th className="px-6 py-3 border-b">Imagen</th>
            <th className="px-6 py-3 border-b">Modelo</th>
            <th className="px-6 py-3 border-b">Tipo</th>
            <th className="px-6 py-3 border-b">Placa</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {autos.map((auto) => (
            <tr key={auto.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4">
                <div className="relative h-12 w-20 overflow-hidden rounded-md border">
                  <img
                    src={auto.imagen}
                    alt={auto.modelo}
                    className="object-cover w-full h-full"
                  />
                </div>
              </td>
              <td className="px-6 py-4 font-medium text-gray-900">{auto.modelo}</td>
              <td className="px-6 py-4 text-gray-600">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  {auto.tipo}
                </span>
              </td>
              <td className="px-6 py-4 font-mono text-gray-600">{auto.placa}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}