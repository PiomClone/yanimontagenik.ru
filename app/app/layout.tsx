import type React from "react"
import type { Metadata } from "next"
import "./global.css"

export const metadata: Metadata = {
  title: "Yani_Montagenik — сноуборд как способ жить",
  description: "Yani_Montagenik — сноуборд как способ жить. Все мои соцсети, команда и сборная на одной странице.",
  generator: "v0.app",
  icons: {
    icon: "/assets/profile_image.jpg",
    apple: "/assets/profile_image.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
