import BackButton from './back-button';
import UserButton from './user-button';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import'@/assets/styles/globals.css'

const AUTH_TOKEN = 'Bearer ' + Cookies.get('token')
axios.defaults.headers.common['Authorization']= AUTH_TOKEN

export default function UserInfo() {
    const [user, setUser] = useState({});
    const router  = useRouter();
    const [inputDisabled, setInputDisabled] = useState(true);
      
    useEffect(() => {
        const disableInput = router.pathname === '/users/[id]';
        setInputDisabled(disableInput);
    }, [router.pathname]);
    
    useEffect(() => {
        if(router.isReady){
            const { id } = router.query;
            axios.get(`https://authorin.andreslopezferro.com/users/${id}`)
            .then ((response) => {
                setUser(response.data.user)
            })
            .catch((error) => {
                console.error(error);
            });
        }
    }, [router.isReady])

    function handleSubmit(event) {
        event.preventDefault();
        axios.put(`https://authorin.andreslopezferro.com/users/${user.id}`, {user: user})
        .then (() => {
            router.push(`/users/${user.id}`);
        })
        .catch((error) => {
            console.error(error);
        });
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <form onSubmit={handleSubmit} className="col col-md-4">
                    <BackButton id={user.id ? user.id : null}></BackButton>
                    <fieldset className="form-group py-3 ">
                        <label htmlFor="userName" className="form-label second-font">Your Name</label>
                        <input className="rounded form-control form-control-lg border border-secondary-subtle" id="userName" type="text" defaultValue={user.name} onChange={(event)=> setUser({...user, name: event.target.value})} disabled={inputDisabled}/>
                    </fieldset>
                    <fieldset className="form-group py-3">
                        <label htmlFor="userEmail" className="form-label second-font">Email</label>
                        <input className="rounded form-control form-control-lg border border-secondary-subtle " id="userEmail" type="text" defaultValue={user.email} onChange={(event)=> setUser({...user, email: event.target.value})} disabled={inputDisabled} />
                    </fieldset>
                    <fieldset className="form-group py-3">
                        <label htmlFor="userCountry"className="form-label second-font">Country</label>
                        <input className="rounded form-control form-control-lg border border-secondary-subtle" id="userCountry" type="text" defaultValue={user.country} onChange={(event)=> setUser({...user, country: event.target.value})} disabled={inputDisabled}/>
                    </fieldset>
                    <fieldset className="form-group py-3">
                        <label htmlFor="userCity"className="form-label second-font">City</label>
                        <input className="rounded form-control form-control-lg border border-secondary-subtle" id="userCity" type="text" defaultValue={user.city} onChange={(event)=> setUser({...user, city: event.target.value})} disabled={inputDisabled}/>
                    </fieldset>
                    <fieldset className="form-group py-3">
                        <label htmlFor="userPhone" className="form-label second-font">Phone</label>
                        <input className="rounded form-control form-control-lg border border-secondary-subtle" id="userPhone" type="text" defaultValue={user.phone} onChange={(event)=> setUser({...user, phone: event.target.value})} disabled={inputDisabled}/>
                    </fieldset>
                    <fieldset className="form-group py-3">
                        <label htmlFor="userAge" className="form-label second-font">Age</label>
                        <input className="rounded form-control form-control-lg border border-secondary-subtle" id="userAge" type="text" defaultValue={user.age} onChange={(event)=> setUser({...user, age: event.target.value})} disabled={inputDisabled}/>
                    </fieldset>
                    <div className="container">
                        <UserButton id={user.id ? user.id : null}></UserButton>
                    </div>
                </form>
            </div>
        </div>   
    )
  }
  