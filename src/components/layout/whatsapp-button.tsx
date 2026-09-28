'use client'

import { useEffect, useState } from 'react'

export function WhatsappButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isPulsing, setIsPulsing] = useState(true)

  useEffect(() => {
    // Show after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1500)

    // Stop pulsing after 10 seconds to not be too annoying
    const pulseTimer = setTimeout(() => {
      setIsPulsing(false)
    }, 10000)

    return () => {
      clearTimeout(timer)
      clearTimeout(pulseTimer)
    }
  }, [])

  if (!isVisible) return null

  const phoneNumber = '5511999999999' // Replace with actual number
  const message = encodeURIComponent('Olá! Gostaria de tirar uma dúvida.')
  const waUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 ${
        isPulsing ? 'animate-bounce' : ''
      }`}
      aria-label="Fale conosco pelo WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-8 w-8"
      >
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.082 21.166c-1.558 0-3.047-.411-4.364-1.157l-4.85 1.275 1.3-4.73c-.822-1.35-1.258-2.909-1.258-4.545 0-4.966 4.041-9.006 9.006-9.006 4.966 0 9.006 4.041 9.006 9.006 0 4.966-4.041 9.006-9.006 9.006z" />
      </svg>
    </a>
  )
}
