import Cookies from 'js-cookie';

export default function SignOutButton(){
    function signingOut() {
        Cookies.remove('token');
        Cookies.remove('user_id');
        return window.location.href = '/login' 
    }
    return(
        <button type="button" className="btn btn-lg btn-danger position-absolute top-0 end-0  m-5 rounded-pill" onClick={ signingOut}>Log out</button>
    )
}