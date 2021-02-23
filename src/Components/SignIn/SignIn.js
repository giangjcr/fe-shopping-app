import React, { useState,useContext } from 'react';
import "./SignIn.css";
import validateInfo from './validateInfo';
import {ProductsContext} from "../../Contexts/ProductContext";
import { Link, Redirect } from 'react-router-dom';


function SignIn(props) {
  const { isLogined, submitSignin,incorrect} = useContext(ProductsContext);
  const [info, setinfo] = useState({
    email: "",
    password: ""
  })
  const [errors, seterrors] = useState({})
  const handleSignin =(event)=>{
    let name = event.target.name
    let value = event.target.value

    setinfo({
      ...info,
      [name]: value
    })
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    seterrors(validateInfo(info))
    if(Object.keys(errors).length === 0 && Object.values(errors).length === 0){
      submitSignin(info)
    }else{
      console.log("error");
    }
  }
  //console.log(errors);
    return (
      <>
      {isLogined ? <Redirect to="/" /> : (
        <div className="app_container">
        <div className="loggin">
            <label htmlFor="header__menu-my-account-id" className="loggin-overlay"></label>
            <div className="loggin-content">
              <div className="loggin__header">Welcome Back</div>
              <div className="loggin__title-">Login with your email &amp; password</div>
              <form>
                  <div className="loggin-form-group">
                    {!errors.email && !errors.password && incorrect && <p className="valueFail">Incorrect username or password</p>}
                    <label htmlFor="" className="loggin__label">User Name:</label><br />
                    <input onChange={(event)=>handleSignin(event)} name="email" type="text" className="loggin__input" placeholder="Ex: demo@gmail.com" /><br />
                    {errors.email  && <p className="errorValue">{errors.email}</p>}
                  </div>
                  <div className="loggin-form-group">
                    <label htmlFor="" className="loggin__label" >Password:</label><br />
                    <input  onChange={(event)=>handleSignin(event)} name="password" type="password" className="loggin__input" placeholder="Ex: 123456" /><br />
                    {errors.password && <p className="errorValue">{errors.password}</p>}
                  </div>
                  <button onClick={(event)=> handleSubmit(event)} type="submit" className="loggin__btn-continue">Continue</button>
                </form>
              <div className="loggin__sign">
                Don't have an account? 
               <Link to="/signup"> <p className="loggin__sign-account"> Sign Up</p></Link>
              </div>
            </div>
    
        </div>
      </div>
      )

    }
   
    </>
    );
}

export default SignIn;