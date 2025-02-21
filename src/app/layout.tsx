import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const cairo = Cairo({ subsets: ['latin'] })

export const metadata: Metadata = {
   title: 'محمد محمود - Frontend Developer',
   description: 'الموقع الشخصي لمحمد محمود، مطور واجهات أمامية',
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="ar" dir="rtl">
         <body className={`${cairo.className} min-h-screen text-[1rem] scroll-smooth antialiased`}>
            <Header />
            {children}
            <Footer />
         </body>
      </html>
   )
}
