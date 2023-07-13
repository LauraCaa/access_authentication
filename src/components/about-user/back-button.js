import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import'@/assets/styles/globals.css'

export default function backButton(){
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
         { url  == '/user' ? (
                <div>
                    <div className="position-absolute">
                        <a className="position-relative t-decoration" href= "/users">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                                </svg>
                        </a>
                    </div>
                    <h2 className="row justify-content-center">Personal Data</h2>
                </div>
            ):(
                <div>
                    <a className="position-relative t-decoration" href= "/user">
                        <svg className="pt-2 bi bi-arrow-left position-absolute" xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                        </svg>
                    </a>
                    <h2 className="row justify-content-center">Update Data</h2>
                </div>
            )}
        </div>
    )
}