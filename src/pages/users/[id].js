import UserInfo from '@/components/about-user/user-info'
import Logo from '@/components/logo'
import'@/assets/styles/globals.css'


export default function Show(){
    return(
        <div className="container">
            <Logo></Logo>
            <UserInfo></UserInfo>
        </div>
    )
}