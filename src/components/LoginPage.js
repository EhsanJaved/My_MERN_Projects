import React from 'react'
import './StyleSheetOfLoginPage.css';
import PropTypes from 'prop-types'
export default function LoginPage (props){
 
    return(
        <>
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
            <form action="" className="form">
                <h1 className="form__title"><b>SIGN IN</b> 
                    <img id="logoOfLogin" src={props.Logo} alt="HM dentail"/>
                </h1>
                
                <div className="form__div">
                    <input type="text" className="form__input" placeholder=" "/>
                    <label for="" className="form__label">Username</label>
                </div>

                <div className="form__div">
                    <input type="password" className="form__input" placeholder=" "/>
                    <label for="" className="form__label">Password</label>
                </div>

                <input type="submit" className="form__button" value="Login"/>
            </form>
        </div>
    </body>
        </>
    )

}
LoginPage.propTypes ={
    logo : PropTypes.object
};