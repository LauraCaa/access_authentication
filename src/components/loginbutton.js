import'@/assets/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';

export default function LoginButton() {
    return(
        <>
            <a href="/login" className=" position-absolute right-0 btn btn-dark">Log in</a>        
        </>
    )
}