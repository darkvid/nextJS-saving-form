import { Inter } from 'next/font/google'
import SavingForm from '@/components/savingForm'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h1>Mi formulario de ahorro</h1>
      <SavingForm />
    </main>
  )
}
