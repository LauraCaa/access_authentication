import'@/assets/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import Cookies from 'js-cookie';
import {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import AuthButton from '../session/authbutton';
import Logo from '../logo';


export default function Form() {
    const [user,setUser] = useState({});
    const [url, setUrl] = useState();
    const router = useRouter();

    function handleSubmit(event){
        event.preventDefault();
        let endPoint = 'https://authorin.andreslopezferro.com/auth/signup'
        if(window.location.pathname === '/login'){
            endPoint = 'https://authorin.andreslopezferro.com/auth/signin'
        }
        axios.post(endPoint, {user: user})
        .then((response) => {
            if (window.location.pathname === '/login'){
                Cookies.set('token', response.data.user.token,{ expires: 1 })
                Cookies.set('user_id', response.data.user.id,{ expires: 1})
                return router.push('users') 
            }
            router.push('login');
        })
        .catch((error) => {
            console.log(error);
        }) 
    }

    useEffect(() => {
        if(router.isReady) {
            console.log(router)
            setUrl(router.pathname)
        } 
    }, [router.isReady])

   return(
        <div className= "container">
            <div className="row">
                <div className="col-md-5">
                    <div className="row">
                        <Logo></Logo>
                    </div>
                    <div className="row d-flex justify-content-center align-items-center">
                        <form className="row p-5" onSubmit={handleSubmit}>
                            { url === '/' ? (
                                <>
                                    <div className="pb-4">
                                        <h2 className="font" >Create an account</h2>
                                        <p>Let's get started with your 30 days free trial</p>
                                    </div>
                                    <fieldset className=" form-group mb-4 row border-bottom">
                                        <input className="border-0 p-1" id="name" type="text" placeholder="Name" onChange={(event) => setUser({...user, name: event.target.value})}/>
                                    </fieldset>
                                </>
                            ):(
                                <div className="pb-4">
                                    <h2 className="font" >Log in</h2>
                                    <p>Data to access your account</p>
                                </div>
                            )}          
                            <fieldset className="form-group mb-4 row border-bottom">
                                <input className="border-0 p-1" id="email" type="text" placeholder="Email" onChange={(event) => setUser({...user, email: event.target.value})}/>
                            </fieldset>
                            <fieldset className="form-group mb-4 row border-bottom">
                                <input className="border-0 p-1" id="password" type="password" placeholder="Password" onChange={(event) => setUser({...user, password: event.target.value})}/>
                            </fieldset>
                            <div className="row p-2">
                                <input className="btn btn-lg btn-dark  rounded-pill" id="button" type="submit" value={url === '/' ? 'Create account' : 'Sign in'}/>
                            </div>
                        </form>
                    </div>
                </div>     
                <div className="col-md-7">
                    <AuthButton></AuthButton>
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

// 1. validar url si es login o registro 
// 2. crear variable que llame a la API segun la  url del formulario en el que estoy
// 3.

