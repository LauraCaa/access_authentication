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
    const router  = useRouter();
    const [user, setUser] = useState({
        name: '',
        email: '',
        country: '',
        city: '',
        phone: '',
        age: '',
      });
    const [inputDisabled, setInputDisabled] = useState(true);
    console.log(user.data)
      
    useEffect(() => {
        const disableInput = router.pathname === '/users/[id]';
        setInputDisabled(disableInput);
    }, [router.pathname]);
    
    function isOwner(userId) {
        return currentUser && currentUser.id === userId;
      }
    useEffect(() => {
        if(router.isReady){
            console.log(user.data)
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
        const { id } = router.query;
        axios.put(`https://authorin.andreslopezferro.com/users/${id}`, user)
        .then (() => {
            router.push('/users');
        })
        .catch((error) => {
            console.error(error);
        });
    }


    return (
        <div className="container">
            <div className="row justify-content-center">
                <form onSubmit={handleSubmit} className="col col-md-4">
                        <BackButton></BackButton>
                    <fieldset className="form-group py-3 ">
                        <lable htmlFor="userName" className="form-label second-font">Your Name</lable>
                        <input className="rounded form-control form-control-lg border border-secondary-subtle" id="userName" type="text" value={user.name} onChange={(event)=> setUser({...user, name: event.target.value})} disabled={inputDisabled}/>
                    </fieldset>
                    <fieldset className="form-group py-3">
                        <lable htmlFor="userEmail" className="form-label second-font">Email</lable>
                        <input className="rounded form-control form-control-lg border border-secondary-subtle " id="userEmail" type="text" value={user.email} onChange={(event)=> setUser({...user, email: event.target.value})} disabled={inputDisabled} />
                    </fieldset>
                    <fieldset className="form-group py-3">
                        <lable htmlFor="userCountry"className="form-label second-font">Country</lable>
                        <input className="rounded form-control form-control-lg border border-secondary-subtle" id="userCountry" type="text" value={user.country} onChange={(event)=> setUser({...user, country: event.target.value})} disabled={inputDisabled}/>
                    </fieldset>
                    <fieldset className="form-group py-3">
                        <lable htmlFor="userCity"className="form-label second-font">City</lable>
                        <input className="rounded form-control form-control-lg border border-secondary-subtle" id="userCity" type="text" value={user.city} onChange={(event)=> setUser({...user, city: event.target.value})} disabled={inputDisabled}/>
                    </fieldset>
                    <fieldset className="form-group py-3">
                        <lable htmlFor="userPhone" className="form-label second-font">Phone</lable>
                        <input className="rounded form-control form-control-lg border border-secondary-subtle" id="userPhone" type="text" value={user.phone} onChange={(event)=> setUser({...user, phone: event.target.value})} disabled={inputDisabled}/>
                    </fieldset>
                    <fieldset className="form-group py-3">
                        <lable htmlFor="userAge" className="form-label second-font">Age</lable>
                        <input className="rounded form-control form-control-lg border border-secondary-subtle" id="userAge" type="text" value={user.age} onChange={(event)=> setUser({...user, age: event.target.value})} disabled={inputDisabled}/>
                    </fieldset>
                    <div className="container">
                        <UserButton></UserButton>
                    </div>
                </form>
            </div>
        </div>   
    )
  }
  