import * as React from "react"
import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-gray-200", className)}
      {...props}
    />
  )
}

function SkeletonText({ className, lines = 1 }: { className?: string, lines?: number }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton key={i} className={cn("h-4 w-full", className)} />
      ))}
    </div>
  )
}

function SkeletonCard() {
  return (
    <div className="rounded-lg border bg-white p-4 space-y-4 shadow-sm">
      <Skeleton className="h-40 w-full rounded-md" />
      <SkeletonText lines={2} />
      <div className="flex justify-between items-center pt-4">
        <Skeleton className="h-6 w-20" />
        <Skeleton className="h-8 w-24 rounded-md" />
      </div>
    </div>
  )
}

function SkeletonImage({ className }: { className?: string }) {
  return <Skeleton className={cn("w-full h-full min-h-[200px]", className)} />
}

export { Skeleton, SkeletonText, SkeletonCard, SkeletonImage }
