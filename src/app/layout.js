import { Inter } from 'next/font/google'
import './globals.css'
import { Klee_One } from "next/font/google";
const KleeOne = Klee_One({ weight: "600", subsets: ["latin"] });

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://runteq-fes-vol4.vercel.app/'), //本番環境のアプリ名
  title: 'runteq-fes-vol4',
  description: 'RUNTEQ祭の応募一覧アプリ',
  openGraph: {
		title: 'runteq-fes-vol4',
    description: 'RUNTEQ祭の応募一覧アプリ',
	},
	twitter: {
		title: 'runteq-fes-vol4',
    description: 'RUNTEQ祭の応募一覧アプリ',
		card: 'summary_large_image',
	},
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={KleeOne.className}>{children}</body>
    </html>
  )
}
