import'@/assets/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';

export default function LoginButton() {
    return(
        <div className="position-relative">
            <a href="/login" className="position-absolute top-0 end-0  mt-4 me-4 rounded-pill btn btn-dark">Log in</a>        
            <img className="rounded-4 img-fluid-block w-100" src='/images/main.png'/>
        </div>
    )
}