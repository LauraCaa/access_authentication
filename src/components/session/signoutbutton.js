import Cookies from 'js-cookie';
import {useRouter} from 'next/router';

export default function SignOutButton(){
    const router = useRouter();
    function signingOut() {
        Cookies.remove('token');
        Cookies.remove('user_id');
        return router.push('login');
    }
    return(
        <button 
            type="button" 
            className="btn btn-lg btn-danger position-absolute top-0 end-0  m-5 rounded-pill" 
            onClick={signingOut}>Log out</button>
    )
}