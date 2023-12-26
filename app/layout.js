import './globals.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'


export const metadata = {
  title: '',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru" data-theme="light">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
