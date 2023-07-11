import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import'@/assets/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';

export default function AuthButton() {
    const [url, setUrl] = useState();
    const router  = useRouter();
    useEffect(() => {
        if(router.isReady) {
            console.log(router)
            setUrl(router.pathname)
        } 
    }, [router.isReady])

    return(
        <div className="position-relative">
         { url  == '/' ? (
                <a href= "/login" className="btn btn-lg btn-dark position-absolute top-0 end-0  mt-4 me-4 rounded-pill ">Log in</a>
            ):(
                <a href= "/" className="btn btn-lg btn-dark position-absolute top-0 end-0  mt-4 me-4 rounded-pill">Sign Up</a>
            )}
            <img className="rounded-4 img-fluid-block w-100" src='/images/main.png'/>
        </div>
    )
}

// seudocodigo
// 1. validar la url de la pagina
// 2. condicionar la url 
// 3.imprimir el boton dependiendo de la url 