import'@/assets/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '@/components/navbar'
import Form from '@/components/form'

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <Form></Form>
    </main>
  )
}