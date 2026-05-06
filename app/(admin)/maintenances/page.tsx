import MaintenanceTable from "@/components/maintenances/MaintenanceTable"
import { MaintenancesResponseSchema } from "@/src/schemas"
import Link from 'next/link'

async function getMaintenances() {
    const url = `${process.env.API_URL}/maintenances`
    const req = await fetch(url)
    const json = await req.json()
    const maintenances = MaintenancesResponseSchema.parse(json)
    return maintenances;

}

export default async function MaintenancePages() {

    const maintenances = await getMaintenances();
    console.log(maintenances);

    return (
        <div className="p-8">

            <Link
                href='/maintenances/new'
                className='rounded bg-amber-400 font-bold py-2 px-10'
                >Nuevo Mantenimiento : 
            </Link>
            <MaintenanceTable maintenances={maintenances} />
        </div>
    )
}