import Heading from "@/components/ui/Heading";
import AddVehicleForm from "@/components/vehicles/AddVehicleForm";

import ProductForm from "@/components/vehicles/VehicleForm";


export default function NewVehiclePage() {
  return (
    <>
      <div className="max-w-2xl mx-auto bg-white p-8 mt-10 shadow-sm border border-gray-100 rounded-lg">

        <Heading>Nuevo Vehiculo</Heading>
        <AddVehicleForm >
          <ProductForm />
        </AddVehicleForm >


      </div>
    </>
  )
}
