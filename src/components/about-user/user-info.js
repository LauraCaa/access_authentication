import 'bootstrap/dist/css/bootstrap.min.css';
import'@/assets/styles/globals.css'
import Profile from'@/assets/images/profile.png'

export default function UserInfo(){
    return(
            <div className="container">
                <table className=" p-3 table table-collapse border-top border-bottom">
                    <tbody>
                        <tr className="border-primary">
                            <td>user.name</td>
                        </tr>
                        <tr>
                            <td>user.email</td>
                        </tr>
                        <tr>
                            <td>user.country</td>
                        </tr>
                        <tr>
                            <td>user.age</td>
                        </tr>
                        <tr>
                            <td>user.phone</td>
                        </tr>    
                    </tbody>
                </table>
            </div>
    );
  };
  

       
