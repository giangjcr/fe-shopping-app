import React, { useContext,useEffect } from "react";
import "./ShopAppItem.css";
import {
    Link
  } from "react-router-dom";
import { ProductsContext } from "../../Contexts/ProductContext";
function ShopAppItem(props) {
    const {cart ,products, addToCart,congNumber, truNumber, IsAutoScroll} = useContext(ProductsContext);
    const style_star = { clipPath: `inset(0 ${props.star}% 0 0)`}
    useEffect(() => {
        if(IsAutoScroll === true){
             window.scrollTo({ top: 405, behavior: "smooth" });
        }
       
    },[products,IsAutoScroll])
    const chuyenDoiURL = (str) => {
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();     
        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');
        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');  
        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-'); 
        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, ''); 
        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, ''); 
        // return
        return str;
    }
    let btnCount =  <button onClick={()=> addToCart(props.item, props.id)} className="app_container__products-add">Add to cart</button>
    
    let findIdbtn = cart.find((item)=>{
        return item._id === props.id
    })
    if(findIdbtn){
        btnCount = (
            
            <div className="app_container__products-item-counter">
                <button onClick={()=>truNumber(props.id)} className="app_container__products-item-counter-update">-</button>
                {
                    cart.map((item,index) => {
                        if(item._id === props.id){
                            return <p key={index} className="app_container__products-item-counter-value">{item.amount}</p>
                        }
                        return true
                    })
                } 
                <button onClick={()=>congNumber(props.id)} className="app_container__products-item-counter-update ">+</button>
            </div>
        )
    }
    
    return (
        <div className="col l-2-4 m-3 c-6 ">
            <div className="app_container__products-item">
            <Link to={"/product-detail/" + chuyenDoiURL(props.name) + "." + props.id + ".html"}>
                   
                <div className="app_container__products-link">
                    {props.currentCost === 0 ? " " :  <div className="app_container__products-sale">Sale</div>}
                   
                    <img className="app_container__products-img" src={props.image} alt="" />
                    <div className="rating">
                        <div className="star">
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                        <div className="star-1" style={style_star}>
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                        </div>
                        </div>
                    </div>
                    <h3 className="app_container__products-title">{props.name}</h3>
               
                       
                        
                    
                </div>
                </Link> 
                {props.currentCost === 0 ? (
                            <div className="app_container__products-price">
                                
                                <p className="products-real-cost">{props.realCost}$</p>
                            </div>
                        ):(
                            <div className="app_container__products-price">
                                <p className="app_container__products-current-cost">{props.currentCost}$</p>
                                <p className="app_container__products-real-cost">{props.realCost}$</p>
                            </div>
                        )}  
               {btnCount}
             
            </div>          
           
        </div>
    );
}

export default ShopAppItem;