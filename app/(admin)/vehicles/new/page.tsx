import Heading from "@/components/ui/Heading";
import ToastNotification from "@/components/ui/ToastNotification";
import AddVehicleForm from "@/components/vehicles/AddVehicleForm";

import ProductForm from "@/components/vehicles/ProductForm";


export default function NewVehiclePage() {
  return (
    <>
      <div className="max-w-2xl mx-auto bg-white p-8 mt-10 shadow-sm border border-gray-100 rounded-lg">

        <Heading>Nuevo Producto</Heading>
        <AddVehicleForm >
          <ProductForm />
        </AddVehicleForm >


      </div>
    </>
  )
}
