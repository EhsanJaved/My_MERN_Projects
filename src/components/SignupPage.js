import React,{useState} from 'react'
import './StyleSheetOfLoginPage.css';
import PropTypes from 'prop-types'
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function Signup (props){
    const [statusMsg, setStatusMsg] = useState('')
    const [email, setEmail] = useState('');
    const [Name, setName] = useState('');
    const [password, setPassword] = useState('');
 const navigate = useNavigate();
    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     console.log(`Email: ${email} Password: ${password}`);
    //     // Add your authentication logic here
    //     if (email === email) {
    //       try {
    //         // const url = API_URL + '/users/login'
    //         const response = await axios.post('http://localhost:5000/mainuser/login', {
    //           email,
    //           password,
    //         }).then((res) => {
    //           navigate('/dashboard')
    //           setStatusMsg(`Login Successfull`)
    //         }).catch((err) => {
              
    //           // navigate('/auth/api/user/signup')
    //           // alert()
    //           setStatusMsg(`Login Failed want to signup?`)
    //           console.log(err)
    //         })
    //         let data = response.data;
    //         console.log(`Email: ${email} Password:${password}`)
    //         console.log(data)
    //       }
    //       catch (error) {
    //         console.error(error)
    //       }
    //     }
    //   };
    
    return(
        <div className="login-page">

           <div className="area" >
        <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                
        </ul>
      </div >
    <body>
        <div className="l-form">
            <form action="" className="form"
            //  onSubmit={handleSubmit}
            >
                <h1 className="form__title"><b>SIGN UP</b> 
                    <img id="logoOfLogin" src={props.Logo} alt="HM dentail"/>
                    <h5>
                  {statusMsg}
                </h5>
                </h1>
                <div className="form__div">
                    <input type="text" 
                    onChange={(event) => setName(event.target.value)}
                     className="form__input" placeholder=" "/>
                    <label htmlFor="user" className="form__label">Name</label>
                </div>

                <div className="form__div">
                    <input type="text" 
                    onChange={(event) => setEmail(event.target.value)}
                     className="form__input" placeholder=" "/>
                    <label htmlFor="user" className="form__label">Email</label>
                </div>

                <div className="form__div">
                    <input type="password"
                    onChange={(event) => setPassword(event.target.value)}
                    className="form__input" placeholder=" "/>
                    <label htmlFor="password" className="form__label">Password</label>
                </div>
                {/* <Link to='/dashboard'> */}
                {/* <input type="submit" className="form__button" value="Login" handleSubmit/> */}
                {/* </Link> */}
                <button type="submit" className="form__button" value="Login" 
                // onSubmit={handleSubmit}
                 >Signup</button>
            </form>
        </div>
    </body>
    </div>
    )

}
Signup.propTypes ={
    logo : PropTypes.object
};