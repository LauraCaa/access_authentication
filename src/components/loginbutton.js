import'@/assets/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';

export default function LoginButton() {
    return(
        <>
            <div className="">
                <img className="rounded-4 img-fluidd-block w-100" src='/images/main.png'/>
            </div>
            <div className="p-relative" >
                <a href="/login" className="p-absolute rounded-pill btn btn-dark">Log in</a>        
            </div>
        </>
    )
}