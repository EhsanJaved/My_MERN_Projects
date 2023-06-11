import React,{useState} from 'react'
import './StyleSheetOfLoginPage.css';
import PropTypes from 'prop-types'
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios'
import logoimage from '../iconsAndImages/dental logo png_7034946.png'
export default function LoginPage (props){
    const [statusMsg, setStatusMsg] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(`Email: ${email} Password: ${password}`);
        // Add your authentication logic here
        if (email === email) {
          try {
            // const url = API_URL + '/users/login'
            const response = await axios.post('http://localhost:5000/mainuser/login', {
              email,
              password,
            }).then((res) => {
              navigate('/dashboard')
              setStatusMsg(`Login Successfull`)
            }).catch((err) => {
              
              // navigate('/auth/api/user/signup')
              // alert()
              setStatusMsg(`Login Failed want to signup?`)
              console.log(err)
            })
            let data = response.data;
            console.log(`Email: ${email} Password:${password}`)
            console.log(data)
          }
          catch (error) {
            console.error(error)
          }
        }
      };
    
    return(
        <div className="login-page">

           <div className="area" >
        <ul className="circles">
                <li>
                <img className="position-absolute top-50 start-50 translate-middle img-responsive" height={70} src={logoimage} alt="HN dental" />
                </li>
                <li>
                <img className="position-absolute top-50 start-50 translate-middle img-responsive" height={50} src={logoimage} alt="HN dental" />
                </li>
                <li>
                <img className="position-absolute top-50 start-50 translate-middle img-responsive" height={100} src={logoimage} alt="HN dental" />
                </li>
                <li>
                <img className="position-absolute top-50 start-50 translate-middle img-responsive" height={50} src={logoimage} alt="HN dental" />
                </li>
                <li>
                <img className="position-absolute top-50 start-50 translate-middle img-responsive" height={40} src={logoimage} alt="HN dental" />
                </li>
                <li>
                <img className="position-absolute top-50 start-50 translate-middle img-responsive" height={60} src={logoimage} alt="HN dental" />
                </li>
                <li>
                <img className="position-absolute top-50 start-50 translate-middle img-responsive" height={80} src={logoimage} alt="HN dental" />
                </li>
                <li>
                <img className="position-absolute top-50 start-50 translate-middle img-responsive" height={90} src={logoimage} alt="HN dental" />
                </li>
                <li>
                <img className="position-absolute top-50 start-50 translate-middle img-responsive" height={100} src={logoimage} alt="HN dental" />
                </li>
                <li >
                  <img className="position-absolute top-50 start-50 translate-middle img-responsive" height={100} src={logoimage} alt="HN dental" />
                </li>
                
        </ul>
      </div >
    <body>
        <div className="l-form">
            <form action="" className="form" onSubmit={handleSubmit}>
                <h1 className="form__title"><b>SIGN IN</b> 
                {/* <Navbar.Brand href="#home">
            <img
              src={props.MainLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand> */}
                    <img id="logoOfLogin" src={props.logo} alt="HN dental" />
                    <h5>
                  {statusMsg}
                </h5>
                </h1>
                
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
                Want to Signup 
                <Link to='/signup'>
                 <i> Click here</i>
                </Link>
                <button type="submit" className="form__button" value="Login" onSubmit={handleSubmit} >Login</button>
            </form>
        </div>
    </body>
    </div>
    )

}
LoginPage.propTypes ={
    logo : PropTypes.object
};