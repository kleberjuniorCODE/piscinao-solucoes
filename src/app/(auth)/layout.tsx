import Link from 'next/link'
import { Container } from '@/components/ui/container'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-cream flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link href="/" className="flex justify-center mb-6">
          <div className="text-3xl font-bold tracking-tighter">
            <span className="text-pool">Piscinão</span>
            <span className="text-primary"> Soluções</span>
          </div>
        </Link>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-primary/10">
          {children}
        </div>
      </div>
    </div>
  )
}
