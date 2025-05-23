// app/providers.tsx
"use client"

import {NextUIProvider} from '@nextui-org/react'

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      {/* <main className="dark text-foreground bg-background"> */}
      <main>
        {children}
      </main>
    </NextUIProvider>
  )
}