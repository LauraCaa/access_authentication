import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import {useRouter} from 'next/router';
import {useState, useEffect} from 'react';
import Cookies from 'js-cookie';
import Link from "next/link";

const AUTH_TOKEN = 'Bearer ' + Cookies.get('token')
axios.defaults.headers.common['Authorization']= AUTH_TOKEN

export default function UsersTable() {
    const [users,setUsers] = useState([]);
    const router  = useRouter();

    useEffect(() => {
        axios.get('https://authorin.andreslopezferro.com/users')
        .then((response) => {
            console.log('respondio bien', response.data)
            setUsers(response.data.users);
        }) 
        .catch((error) => {
            console.error(error);
        })
    },[])
    
    return(
        <div className = "container">
            <h1 className = "pt-5 font">Users</h1>
            <table className = "table table-info table-hover">
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Creation Date</th>
                        <th>Last upDate</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td className = "text-muted">{user.name}/</td>
                            <td className = "text-muted">{user.email}/</td>
                            <td className = "text-muted">{user.inserted_at} </td>
                            <td className = "text-muted">{user.updated_at}/</td>    
                            <td className = "text-muted">
                                <Link className = "btn btn-dark rounded-pill" href= {'/users/' + user.id}>Profile</Link>
                            </td>            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
