import VehicleTable from '@/components/vehicles/VehicleTable'
import React from 'react'

export default function page() {
  return (  
<div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Administración de Vehículos</h1>
      
      {/* Renderizado del componente */}
      <VehicleTable />
      
    </div>
  )
}
