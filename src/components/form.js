import'@/assets/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';

import LoginButton from '@/components/loginbutton'

export default function Form(){
    return(
        <div className="container">
            <div className="row d-flex row justify-content-center align-items-center">
                <div className="col-md-5">
                    <form  className="">
                        <div className="pt-2 pb-4">
                            <h2 className="font" >Create an account</h2>
                            <p>Let's get started with your 30 days free trial</p>
                        </div>
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