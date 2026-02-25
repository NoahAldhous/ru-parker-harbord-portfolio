import './globals.css';
import localFont from 'next/font/local';
import NavigationBar from './components/NavigationBar';

const superRetro = localFont({
  src: [
    {
      path: '../../public/fonts/Super-Retro-M54.ttf',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Super-Retro-Italic-M54.ttf',
      style: 'italic'
    },
  ],
  variable: '--superRetro'
})

export const metadata = {
  title: 'Ru Parker-Harbord',
  description: 'Ru Parker-Harbord is a Professional Photographer and Videographer based in London',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
          <body className={`${superRetro.variable} overflow-x-hidden`}>
            <NavigationBar/>
            <nav></nav>
            {children}
          </body>
    </html>
  )
}
