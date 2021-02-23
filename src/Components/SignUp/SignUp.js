import React, { useState, useEffect, useContext } from 'react';
import "./SignUp.css";
import {
    Link, Redirect } from 'react-router-dom';
import {ProductsContext} from "../../Contexts/ProductContext";
import validateSignUp from './validateSignUp';

function SignUp(props) {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, [])
    const { isLogined, submitSignUp} = useContext(ProductsContext);
    const [infoSignUp, setInfoSignUp] = useState([])
    const [quanAPI, setQuanAPI] = useState([])
    const [phuongapi, setPhuongAPI] = useState([])
  const [errors, seterrors] = useState({})

    const city = [
        {
            name: "Hồ Chí Minh",
            quan: ["Quận 1", "Quận 2", "Quận 3"]
        },
        {
            name: "Hà Nội",
            quan: ["Huyện Ba Vì", "Huyện Chương Mỹ", "Huyện Đan Phượng"]
        }
    ]
    const phuong = [
        {

            quan: "Quận 1",
            phuong: ["Phường Bến Nghé"," Phường Bến Thành","Phường Cầu Kho","Phường Cầu Ông Lãnh"]
        },
        {
            quan: "Quận 2",
            phuong: ["Phường An Khánh", "Phường An Lợi Đông", "Phường An Phú", "Phường Bình An", "Phường Bình Khánh"]
        },
        {
            quan: "Quận 3",
            phuong: ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5"]
        },
        
        {
            quan: "Huyện Ba Vì",
            phuong: ["Thị Trấn Tây Đằng", "Xã Ba Trại", " Xã Ba Vì", "Xã Cẩm Lĩnh"]
        },
        
        {
            quan: "Huyện Chương Mỹ",
            phuong: ["Thị Trấn Chúc Sơn", "Thị Trấn Xuân Mai", "Xã Đại Yên", "Xã Đồng Lạc"]
        },
        {
            quan: "Huyện Đan Phượng",
            phuong: ["Thị Trấn Phùng", "Xã Đan Phượng", "Xã Đồng Tháp"]
        },
        
    ]
    const isClick = (event)=>{
        const value = event.target.value;
        //console.log(value);
        let tp = city.find(item =>{
            return item.name === value
        })
        if(tp){
            setQuanAPI(tp.quan)
            setPhuongAPI([])
        }
        //console.log(tp);
        
    }
    const isClickQuan = (event)=>{
        const value = event.target.value;
        //console.log(value);
        const inPhuong = phuong.find(item =>{
            return item.quan === value
        })
        if(inPhuong){
            setPhuongAPI(inPhuong.phuong)
        }
        
    }
    const handleSignup = (event)=>{
        let name = event.target.name
        let value = event.target.value

        setInfoSignUp({
        ...infoSignUp,
        [name]: value
        })
    }
    const handleSubmitSignUp =(e)=>{
         e.preventDefault();
         seterrors(validateSignUp(infoSignUp))
    
        if(Object.keys(errors).length === 0 && Object.values(errors).length === 0){
            submitSignUp(infoSignUp)
        }else{
          console.log("error");
        }
       
      }
    //console.log(infoSignUp);

    return (
        <div>
 {isLogined ? <Redirect to="/" /> : (
        <div className="app_container">
            <div className="loggin">

             <div className="sign-content">
              <div className="sign__header">Sign Up</div>
              <div className="sign__title-">By signing up, you agree to Pickbazar's</div>
              <form>
              <div className="sign-form-group">
                <label htmlFor="" className="sign__label">Full Name:</label><br />
                <input onChange={(event)=>handleSignup(event)} name="fullName" type="text" className="sign__input" /><br />
                {errors.fullName  && <p className="errorValue">{errors.fullName}</p>}
              </div>
              <div className="sign-form-group">
                <label htmlFor="" className="sign__label">User Name:</label><br />
                <input onChange={(event)=>handleSignup(event)} name="userName" type="text" className="sign__input" /><br />
                {errors.userName  && <p className="errorValue">{errors.userName}</p>}
              </div>
              <div className="sign-form-group">
                <label htmlFor="" className="sign__label">Email:</label><br />
                <input onChange={(event)=>handleSignup(event)} name="email" type="email" className="sign__input" /><br />
                {errors.email  && <p className="errorValue">{errors.email}</p>}
              </div>
              <div className="sign-form-group">
                <label htmlFor="" className="sign__label">Phone:</label><br />
                <input onChange={(event)=>handleSignup(event)} name="phoneNumber" type="number" className="sign__input" /><br />
                {errors.phoneNumber  && <p className="errorValue">{errors.phoneNumber}</p>}
              </div>
              <div className="sign-form-group">
                <label htmlFor="" className="sign__label">Password:</label><br />
                <input onChange={(event)=>handleSignup(event)} name="password" type="password" className="sign__input" /><br />
                {errors.password  && <p className="errorValue">{errors.password}</p>}
              </div>
              
              <div className="sign-form-group">
                <label htmlFor="" className="sign__label">City:</label><br />
                <select onChange={(event)=>handleSignup(event)} onClick={(event) => isClick(event)}  name="city" id="" className="sign__input">
                
                    <option hidden={true}  >Tỉnh/Thành Phố</option>
                    <option  value={"Hồ Chí Minh"}>Hồ Chí Minh</option>
                    <option  value={"Hà Nội"}>Hà Nội</option>
                </select>
                {errors.city  && <p className="errorValue">{errors.city}</p>}

              </div>
               <div className="sign-form-group">
                <label htmlFor="" className="sign__label">District:</label><br />
                        
                <select onChange={(event)=>handleSignup(event)} onClick={(event) => isClickQuan(event)}  name="district" id="" className="sign__input">
                    <option hidden={true}>Quận</option>
                    {
                        quanAPI.map((item, index) =>{
                            return <option  key={index} defaultValue={item}>{item}</option>
                        })
                    }
                </select>
                {errors.district  && <p className="errorValue">{errors.district}</p>}

              </div>
              <div className="sign-form-group">
                <label htmlFor="" className="sign__label">Sub-District:</label><br />
                <select onChange={(event)=>handleSignup(event)} name="subDistrict" id="" className="sign__input">
                <option hidden={true} >Phường</option>
                {
                 phuongapi.map((item, index) =>{
                     return <option key={index} defaultValue={item}>{item}</option>
                 })
                }
                </select> 
                {errors.subDistrict  && <p className="errorValue">{errors.subDistrict}</p>}

              </div>
              <div className="sign-form-group">
                <label htmlFor="" className="sign__label">Street:</label><br />
                <input onChange={(event)=>handleSignup(event)} name="street" type="text" className="sign__input" /><br />
                {errors.street  && <p className="errorValue">{errors.street}</p>}
                
              </div>
              
              <button type="submit" onClick={(event) => handleSubmitSignUp(event)} className="sign__btn-continue">Continue</button>
              
              </form>
              <div className="sign__loggin">
                Already have an account?
               <Link to="/signin"> <p className="sign__loggin-account">Sign In</p></Link>
              </div>
            </div> 
        </div>
</div>
)

    }
</div>
    
    
    
    );
}

export default SignUp;