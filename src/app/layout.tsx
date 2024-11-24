import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'SIH Project',
  description: 'Next.js Project',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Layout UI */}
        <main>{children}</main>
      </body>
    </html>
  )
}