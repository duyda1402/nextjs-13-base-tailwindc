import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold text-blue-500 underline">Hello world!</h1>
    </main>
  )
}
