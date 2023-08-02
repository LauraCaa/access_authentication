import'@/assets/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import Logo from '@/components/logo';
import UserTable from'@/components/about-user/users-table';
import SignOut from '@/components/session/signoutbutton';

export default function Users() {
    return(
        <>
            <Logo></Logo>
            <SignOut></SignOut>
            <UserTable></UserTable>
        </>
    )
}