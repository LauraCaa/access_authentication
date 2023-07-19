import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import Link from "next/link";
import axios from 'axios';
import Cookies from 'js-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import'@/assets/styles/globals.css';

const AUTH_TOKEN = 'Bearer ' + Cookies.get('token')
axios.defaults.headers.common['Authorization']= AUTH_TOKEN

export default function userButton({id}) {
    const [url, setUrl] = useState();
    const currentUserId = Cookies.get('user_id');
    const router  = useRouter();

    useEffect(() => {
        if(router.isReady){
            const { id } = router.query;
            setUrl(router.pathname)
        }
    }, [router.isReady])

    function handleDelete(id) {
        if (window.confirm("Are you sure you want to proceed?")) {
            axios.delete(`https://authorin.andreslopezferro.com/users/${id}`)
            .then(() => {
                router.push(`/users`);
            }) 
            .catch((error) => {
                console.error(error);
            })
        }
    }

    return(
        <div>
            {currentUserId == id && url  == '/users/[id]' ? (
                <div className="row"> 
                    <div className="col-6">
                        <button type="button" value="delete" className="btn btn-lg btn-danger mt-4 me-4 rounded-pill " onClick={() => handleDelete(id)}>Delete</button>
                    </div>
                    <div className="col-6">
                        <Link href= {'/users/' + id + '/edit'} className="btn btn-lg btn-dark mt-4 me-4 rounded-pill ">Update</Link>
                    </div>
                </div>
            ) : null}

            {currentUserId == id && url  == '/users/[id]/edit' ? (
                <div className="container">
                    <input type="submit" value="Save"  className="p-2 btn btn-full btn-success mt-4  rounded-pill"/>
                </div>
            ): null}
        </div>
    )
}