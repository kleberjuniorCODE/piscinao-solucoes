import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'pool' | 'success' | 'warning' | 'danger' | 'outline'
  size?: 'sm' | 'md'
}

function Badge({ className, variant = "default", size = "sm", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
          "border-transparent bg-primary text-white": variant === "default",
          "border-transparent bg-gray-100 text-gray-800": variant === "secondary",
          "border-transparent bg-pool text-white": variant === "pool",
          "border-transparent bg-green-500 text-white": variant === "success",
          "border-transparent bg-yellow-500 text-white": variant === "warning",
          "border-transparent bg-red-500 text-white": variant === "danger",
          "text-foreground border-gray-300": variant === "outline",
          "text-xs px-2.5 py-0.5": size === "sm",
          "text-sm px-3 py-1": size === "md",
        },
        className
      )}
      {...props}
    />
  )
}

export { Badge }
