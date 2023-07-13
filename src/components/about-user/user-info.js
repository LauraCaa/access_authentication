import BackButton from './back-button';
import 'bootstrap/dist/css/bootstrap.min.css';
import'@/assets/styles/globals.css'

export default function UserInfo(){
    return(
        <div className="container">
            <div className="row justify-content-center">
                <form className="col col-md-4">
                        <BackButton></BackButton>
                    <fieldset className="form-group py-3 ">
                        <lable className="form-label second-font">Your Name</lable>
                        <input className="rounded form-control form-control-lg border border-secondary-subtle" id="userName" type="text" value="user.name" disabled/>
                    </fieldset>
                    <fieldset className="form-group py-3">
                        <lable className="form-label second-font">Email</lable>
                        <input className="rounded form-control form-control-lg border border-secondary-subtle " id="userEmail" type="text" value="user.email" disabled />
                    </fieldset>
                    <fieldset className="form-group py-3">
                        <lable className="form-label second-font">Country</lable>
                        <input className="rounded form-control form-control-lg border border-secondary-subtle" id="userCountry" type="text" value="user.country" disabled/>
                    </fieldset>
                    <fieldset className="form-group py-3">
                        <lable className="form-label second-font">City</lable>
                        <input className="rounded form-control form-control-lg border border-secondary-subtle" id="userCity" type="text" value="user.city" disabled/>
                    </fieldset>
                    <fieldset className="form-group py-3">
                        <lable className="form-label second-font">Phone</lable>
                        <input className="rounded form-control form-control-lg border border-secondary-subtle" id="userPhone" type="text" value="user.phone" disabled/>
                    </fieldset>
                    <fieldset className="form-group py-3">
                        <lable className="form-label second-font">Age</lable>
                        <input className="rounded form-control form-control-lg border border-secondary-subtle" id="userAge" type="text" value="user.age" disabled/>
                    </fieldset>
                </form>
            </div>
        </div>
          
    );
  };
  

       
//   "active": true,
//   "name": "some name",
//   "password": "ssdasdsd",
//   "email": "andyse@email.com",
//   "country": "some country",
//   "city": "some city",
//   "phone": "some phone",
//   "age": 27