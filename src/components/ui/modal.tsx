'use client'

import * as React from "react"
import { cn } from "@/lib/utils"

interface ModalProps extends React.DialogHTMLAttributes<HTMLDialogElement> {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export function Modal({ isOpen, onClose, children, className, ...props }: ModalProps) {
  const dialogRef = React.useRef<HTMLDialogElement>(null)

  React.useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (isOpen && !dialog.open) {
      dialog.showModal()
    } else if (!isOpen && dialog.open) {
      dialog.close()
    }
  }, [isOpen])

  React.useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    const handleCancel = (e: Event) => {
      e.preventDefault()
      onClose()
    }

    dialog.addEventListener('cancel', handleCancel)
    return () => dialog.removeEventListener('cancel', handleCancel)
  }, [onClose])

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      onClose()
    }
  }

  return (
    <dialog
      ref={dialogRef}
      onClick={handleBackdropClick}
      className={cn(
        "backdrop:bg-black/50 backdrop:backdrop-blur-sm rounded-lg shadow-xl p-0 w-full max-w-lg overflow-hidden bg-white text-gray-900 m-auto open:animate-in open:fade-in-90 open:zoom-in-95",
        className
      )}
      {...props}
    >
      {children}
    </dialog>
  )
}

export function ModalHeader({ children, className }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("px-6 py-4 border-b border-gray-200", className)}>{children}</div>
}

export function ModalBody({ children, className }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("px-6 py-4", className)}>{children}</div>
}

export function ModalFooter({ children, className }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("px-6 py-4 border-t border-gray-200 flex justify-end gap-2", className)}>{children}</div>
}
