import'@/assets/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import LoginButton from '@/components/loginbutton'

export default function Form(){
    return(
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <form className="col-md-6 p-2">
                    <h1 className="font">Create an account</h1>
                    <p>let's get started with your 30 days free trial</p>
                    <fieldset className="row border-bottom">
                        <input className="border-0 p-1" id="name" type="text" placeholder="Name"/>
                    </fieldset>
                    <fieldset className="row border-bottom">
                        <input className="border-0 p-1" id="email" type="text" placeholder="Email"/>
                    </fieldset>
                    <fieldset className="row border-bottom">
                        <input className="border-0 p-1" id="password" type="password" placeholder="Password"/>
                    </fieldset>
                    <div className="row p-2">
                        <input className="btn btn-dark" id="button" type="submit" value="create account"/>
                    </div>
                </form>
                <div className="col-md-6">
                    <img src='/images/main.png'/>
                    <LoginButton></LoginButton>
                </div>
            </div>
        </div>
    )
}