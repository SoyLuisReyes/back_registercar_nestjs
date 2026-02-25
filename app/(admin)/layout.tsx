import Navbar from '@/components/ui/Navbar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="max-w-7xl mx-auto py-6">
        {children}
      </main>
    </div>
  );
}