import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata = {
  title: 'Minority Support Foundation | Change starts with belonging',
  description: 'Minority Support Foundation works alongside communities to create a more equitable, resilient, and hopeful future.',
  generator: 'v0.app',
}

export const viewport = {
  colorScheme: 'light',
  themeColor: '#123d2a',
  userScalable: true,
}

export default function RootLayout({ children }) {
  return <html lang="en" className="bg-[var(--paper)]"><body>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
