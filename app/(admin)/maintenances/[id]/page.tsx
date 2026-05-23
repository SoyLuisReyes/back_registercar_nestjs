import MaintenanceTable from "@/components/maintenances/MaintenanceTable"
import { MaintenancesResponseSchema } from "@/src/schemas"
import Link from 'next/link'

// 1. Modificamos la función para que reciba el vehicleId
async function getMaintenances(vehicleId: string) {
    // Usamos el filtro ?vehicle_id= que arreglamos en NestJS
    const url = `${process.env.API_URL}/maintenances?vehicle_id=${vehicleId}`
    const req = await fetch(url, { cache: 'no-store' }) // Evita que se quede congelado con datos viejos
    const json = await req.json()
    //const { data } = MaintenancesResponseSchema.parse(json)
    //return data;
    console.log('DATA DEL BACKEND ', json);

    try {
        // 2. Intentamos validar con Zod
        const data = MaintenancesResponseSchema.parse(json)
        return data;
    } catch (zodError) {
        // 3. Si Zod truena, aquí veremos qué campo falló
        console.error("ERROR DE VALIDACIÓN DE ZOD:", zodError)
        return null; 
    }
    
}

// 2. Definimos el tipo para los parámetros de la URL en Next.js 15
type Params = Promise<{ id: string }>;

export default async function MaintenancePages({ params }: { params: Params }) {
    // 3. Esperamos de forma asíncrona el ID que viene de la URL (ej: "18")
    const { id } = await params;

    // 4. Traemos los mantenimientos filtrados únicamente para ese carro
    const maintenances = await getMaintenances(id);
    // 4. Si falló la data, mostramos un aviso amigable en lugar de romper la pantalla
    if (!maintenances) {
        return (
            <div className="p-8 text-red-500 font-semibold">
                Error: La estructura de datos de la API no coincide con el Schema de Zod. 
                Revisa la terminal de VS Code para ver los detalles.
            </div>
        )
    }
    console.log(`Mantenimientos cargados para el vehículo ${id}:`, maintenances);

    return (
        <>
        
        <div className="p-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">
                    Historial del Vehículo #{id}
                </h1>
                
                {/* Le pasamos el id del vehículo a la ruta de creación para saber a quién asignarlo */}
                <Link
                    href={`/maintenances/new?vehicle_id=${id}`}
                    className='rounded bg-amber-400 font-bold py-2 px-10 hover:bg-amber-500 transition-colors'
                    >
                    Nuevo Mantenimiento
                </Link>
            </div>

            {/* Tu componente de tabla ahora recibe la lista filtrada de forma transparente */}
            <MaintenanceTable maintenances={maintenances} />
        </div>
    </>
    )
}