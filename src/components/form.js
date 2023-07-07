import'@/assets/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { useState} from 'react';
import LoginButton from '@/components/loginbutton'

export default function Form() {
    const [user,setUser] = useState({});

    function handleSubmit(event){
        event.preventDefault();
        
        axios.post('https://faed-190-25-96-238.ngrok-free.app/users', user)
        .then((response) => {
            window.location.href = '/login';
        })
        .catch((error) => {
            console.log(error);
        })
    }

   return(
        <div className="container">
            <div className="row d-flex row justify-content-center align-items-center">
                <div className="col-md-5">
                    <form onSubmit={handleSubmit}>
                        <div className="pt-2 pb-4">
                            <h2 className="font" >Create an account</h2>
                            <p>Let's get started with your 30 days free trial</p>
                        </div>
                        <fieldset className="row border-bottom">
                            <input className="border-0 p-1" id="name" type="text" placeholder="Name" onChange={(event) => setUser({...user, name: event.target.value})}/>
                        </fieldset>
                        <fieldset className="row border-bottom">
                            <input className="border-0 p-1" id="email" type="text" placeholder="Email" onChange={(event) => setUser({...user, email: event.target.value})}/>
                        </fieldset>
                        <fieldset className="row border-bottom">
                            <input className="border-0 p-1" id="password" type="password" placeholder="Password" onChange={(event) => setUser({...user, password: event.target.value})}/>
                        </fieldset>
                        <div className="row p-2">
                            <input className="rounded-pill btn btn-dark" id="button" type="submit" value="create account"/>
                        </div>
                    </form>
                </div>
                <div className="col-md-7">
                    <LoginButton></LoginButton>
                </div>
            </div>
        </div>
    )
}

// seudocodigo
// 1. permitir escribir datos 
// 2. sincronizar datos (campos de texto y la constante)
// 3. crear evento onSubmit 
// 4. llamar a una funcion con el onSubmit
// 5. detener el comportamiento por defecto del formulario
// 6. enviar los datos a mi Api usando axios
//  6.1 si se crea el usuario redireccionar al login 
//  6.2 si no mostrar el error en la pagina 

