import 'bootstrap/dist/css/bootstrap.css';

export default function UsersTable() {
    return(
        <div className = "container">
            <h1 className = "pt-5 font">Users</h1>
            <table className = "table table-info table-hover">
                <tbody>
                    <tr>
                        <td className = "text-muted"><strong>{/* {user.name}{user.email} */}</strong>name email </td>
                        <td className = "text-muted"> <strong>{/* {user.creationdate} */} </strong>subscribe date</td>
                        <td className = "text-muted"><strong>{/* {user.upDate} */}</strong>{/* {user.upDate} */} renew date</td>    
                        <td className = "text-muted">
                            <a type="button" className = "btn btn-dark rounded-pill">Ver perfil</a>
                        </td>            
                    </tr>
                    <tr>
                        <td className = "text-muted"><strong>{/* {user.name}{user.email} */}</strong>name email </td>
                        <td className = "text-muted"> <strong>{/* {user.creationdate} */} </strong>subscribe date</td>
                        <td className = "text-muted"><strong>{/* {user.upDate} */}</strong>{/* {user.upDate} */} renew date</td>    
                        <td className = "text-muted">
                            <a type="button" className = "btn btn-dark rounded-pill">Ver perfil</a>
                        </td>            
                    </tr>
                </tbody>
            </table>
        </div>
    )
}