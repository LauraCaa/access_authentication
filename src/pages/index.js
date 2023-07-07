import'@/assets/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import Form from '@/components/form'
import Navbar from '@/components/navbar'

export default function Home() {
  return (
    <main className="container">
      <Navbar></Navbar>
      <Form></Form>
    </main>
  )
}