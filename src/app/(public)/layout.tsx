import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { WhatsappButton } from '@/components/layout/whatsapp-button'

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  )
}
