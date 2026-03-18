'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  // Configuración de los links para fácil mantenimiento
  const navLinks = [
    { name: 'Vehículos', href: '/vehicles' },
    { name: 'Mantenimientos', href: '/admin/maintenance' },
    { name: 'Nuevo Registro', href: '/admin/maintenance/new' },
  ];

  return (
    <nav className="bg-slate-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo o Título */}
          <div className="flex items-center">
            <Link href="/vehicles" className="flex-shrink-0 font-bold text-xl tracking-wider text-blue-400">
              GESTOR<span className="text-white">AUTO</span>
            </Link>
          </div>

          {/* Links de Navegación */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive 
                        ? 'bg-blue-600 text-white' 
                        : 'text-gray-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Perfil o Logout (Opcional) */}
          <div className="text-xs text-gray-400">
            Admin Mode
          </div>
        </div>
      </div>
    </nav>
  );
}