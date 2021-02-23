import React, { useContext, useEffect, useState } from 'react';
import "./AccountInfo.css";
import {ProductsContext} from "../../Contexts/ProductContext";

function AccountInfo({ match }) {
  const { user, updateInfo} = useContext(ProductsContext);
  const [newInfo, setNewInfo] = useState(false)

  const [NewInfoUse, setNewInfoUser] = useState({
    fullName: user.fullName,
    userName: user.userName,
    email: user.email,
    phoneNumber: user.phoneNumber
  });
 
  useEffect(()=>{
    setNewInfoUser({
      fullName: user.fullName,
      userName: user.userName,
      email: user.email,
      phoneNumber: user.phoneNumber
    })
  },[newInfo])


  const HanlerChangeinfo=(event)=>{
    const { name, value } = event.target;

    setNewInfoUser({
      ...NewInfoUse,
      [name]: value
    })
    console.log(NewInfoUse);
  }
  const handleSubmitInfo =(e)=>{
    e.preventDefault();

    updateInfo(user._id,NewInfoUse)
    setNewInfo(false)
    // seterrors(validateInfo(info))
    // if(Object.keys(errors).length === 0 && Object.values(errors).length === 0){
    //   submitSignin(info)
    // }else{
    //   console.log("error");
    // }
  }
  const cancelEdit =()=>{

    setNewInfoUser({
      fullName: "user.fullName",
      userName:" user.userName",
      email: "user.email",
      phoneNumber: "user.phoneNumber"
    })
    setNewInfo(false);
  }
  
    return (
    
      <div className="col l-9 m-12 c-12">
        <div className="account__info">
          <h2 className="account__info-title">My Account</h2>
          <form >
          <div className="account__info--top">
            <div className="account__left">
              <div className="account__left-name">
                <p className="account__left-name-lable">
                  Full name *
                </p>
                <input name="fullName"  onChange={(event)=>HanlerChangeinfo(event)} type="text" disabled={newInfo ? "" : "disable"} defaultValue={user.fullName} className="account__left-name-input" />
              </div>
              <div className="account__left-name-login">
                <p className="account__left-name-login-lable">
                  User Name *
                </p>
                <input name="userName" onChange={(event)=>HanlerChangeinfo(event)} type="text" disabled={newInfo ? "" : "disable"} defaultValue={user.userName} className="account__left-name-login-input" />
              </div>
            </div>
            <div className="account__right">
              <div className="account__left-phone">
                <p className="account__left-phone-lable">
                  Phone number *
                </p>
                <input name="phoneNumber" onChange={(event)=>HanlerChangeinfo(event)} type="number" disabled={newInfo ? "" : "disable"} defaultValue={user.phoneNumber} className="account__left-phone-input" />
              </div>
              <div className="account__right-email">
                <p className="account__right-email-lable">
                  Email address *
                </p>
                <input name="email" onChange={(event)=>HanlerChangeinfo(event)} type="text" disabled={newInfo ? "" : "disable"} defaultValue={user.email} className="account__right-email-input" />
              </div>
              <div className="account__right-edit">
                {newInfo ? (
                  <>
                  <button type="submit"  onClick={(event)=> handleSubmitInfo(event)} className="account__right-edit-btn">Sửa</button> 
                  <button onClick={()=> cancelEdit()} className="account__right-edit-btn">Cancel</button> 
                  </>
                ) :
                <input type="button" onClick={()=> setNewInfo(true)} className="account__right-edit-btn" value="Sửa thông tin"  />

                }   

              </div>
            </div>
          </div>
          </form>
        </div>
      </div>
            
    
    );
}

export default AccountInfo;