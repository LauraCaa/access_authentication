import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import'@/assets/styles/globals.css'

export default function backButton({id}){
    const [url, setUrl] = useState();
    const router  = useRouter();
    useEffect(() => {
        if(router.isReady) {
            console.log(router)
            setUrl(router.pathname)
        } 
    }, [router.isReady])
    return(
        <div>
         { url  == '/users/[id]' ? (
                <div>
                    <div className="position-absolute">
                        <Link className="position-relative t-decoration" href= "/users">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                            </svg>
                        </Link>
                    </div>
                    <h2 className="row justify-content-center">Personal Data</h2>
                </div>
            ):(
                <div>
                    <Link className="position-relative t-decoration" href={`/users/${id}`}>
                        <svg className="pt-2 bi bi-arrow-left position-absolute" xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                        </svg>
                    </Link>
                    <h2 className="row justify-content-center">Update Data</h2>
                </div>
            )}
        </div>
    )
}