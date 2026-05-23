import AddMaintenancesForm from "@/components/maintenances/AddMaintenancesForm";
import MaintenanceForm from "@/components/maintenances/MaintenanceForm";


import Heading from "@/components/ui/Heading";

export default function NewMaintenancePage(){
    return (
        <>
           <div className="max-w-2xl mx-auto bg-white p-8 mt-10 shadow-sm border border-gray-100 rounded-lg" >
                <Heading>Nuevo Mantenimiento</Heading>
                
                <AddMaintenancesForm>
                        <MaintenanceForm />
                </AddMaintenancesForm>
           </div>
        </>
    )
}