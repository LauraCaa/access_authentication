import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import Link from "next/link";
import axios from 'axios';
import Cookies from 'js-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import'@/assets/styles/globals.css';

const AUTH_TOKEN = 'Bearer ' + Cookies.get('token')
axios.defaults.headers.common['Authorization']= AUTH_TOKEN

export default function userButton() {
    const [url, setUrl] = useState();
    const [user, setUser] = useState({});
    const router  = useRouter();
   
    useEffect(() => {
        if(router.isReady){
            const { id } = router.query;
            setUrl(router.pathname)
            axios.get(`https://authorin.andreslopezferro.com/users/${id}`)
            .then ((response) => {
                console.log('respondio bien', response.data)
                setUser(response.data.user)
            })
            .catch((error) => {
                console.error(error);
            });
        }
    }, [router.isReady])

    function handleDelete(id) {
        if (window.confirm("Are you sure you want to proceed?")) {
            axios.delete(`https://authorin.andreslopezferro.com/users/${id}`)
            .then(() => {
                setRefresh(true)
            }) 
            .catch((error) => {
                console.error(error);
            })
        }
    }
    return(
        <div>
            
         {url  == '/users/[id]' ? (
                <div className="row"> 
                    <div className="col-6">
                        <a type="button" value="delete" className="btn btn-lg btn-danger mt-4 me-4 rounded-pill " onClick={() => handleDelete(user.id)} href= {'/users'}>Delete</a>
                    </div>
                    <div className="col-6">
                        <a href= {'/users/edit/' + user.id} className="btn btn-lg btn-dark mt-4 me-4 rounded-pill ">Update</a>

                    </div>
                </div>        
            ):(
                <div className="container">
                    <a type="submit" value="Save"  className="p-2 btn btn-full btn-success mt-4  rounded-pill" href= {'/users/' + user.id}>Save</a>
                </div>
            )}
        </div>
    )
}