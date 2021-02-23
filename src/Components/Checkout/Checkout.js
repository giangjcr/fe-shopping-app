import React, { useContext, useState } from 'react';
import "./Checkout.css";

import {ProductsContext} from "../../Contexts/ProductContext";
import { v1 as uuidv1 } from 'uuid';
import { useHistory } from 'react-router-dom';

function Checkout({match}) {
  const history = useHistory();

  const {  cart, user, checkout} = useContext(ProductsContext);
  let total = cart.reduce((accumulator ,item)=>{
    return accumulator += item.price * item.amount;
  },0)
  let d = new Date();
  const [infoCheckout] = useState({
    date: `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`,
    id: user._id,
    idOrder: uuidv1(),
    total: total,
    name: user.fullName,
    phone: user.phoneNumber,
    email: user.email,
    address: user.city,
    cart: cart,
  })

  const proceedCheckout=(e)=>{
    //setInfoCheckout({...infoCheckout,cart: cart})
    e.preventDefault();  
    checkout(infoCheckout)
    history.push('/account/order')
  }
  
    return (
   <>
           
      <div className="col l-9 m-12 c-12">
        <div className="checkout-right">
          
          <div className="checkout-right__order">
            <div className="checkout-right__order-subtotal">
              <div className="checkout-right__order-subtotal--left">Sub Total ({cart.length} item)</div>
              <div className="checkout-right__order-subtotal--right">${total}</div>
            </div>
            <div className="checkout-right__order-ship">
              <div className="checkout-right__order-ship--left">Shipping Fee:</div>
              <div className="checkout-right__order-ship--right">Free </div>
            </div>
            <div className="checkout-right__order-Total">
              <div className="checkout-right__order-Total--left">Total:</div>
              <div className="checkout-right__order-Total--right">${total}</div>
            </div>
          </div>
          <div className="checkout-right__info">
            <form>
            <div className="checkout-right__info-name">
              <div className="checkout-right__info--left">Name:</div>
              <div className="checkout-right__info--right">{user.fullName} </div>
            </div>
            <div className="checkout-right__info-phone">
              <div className="checkout-right__info-phone--left">Phone:</div>
              <div className="checkout-right__info-phone--right">{user.phoneNumber}</div>
            </div>
            <div className="checkout-right__info-email">
              <div className="checkout-right__info-email--left">Email:</div>
              <div className="checkout-right__info-email--right">{user.email}</div>
    
            </div>
            {/* <div className="checkout-right__info-city">
              <div className="checkout-right__info-city--left">City</div>
              <select name="city" className="checkout-right__info-city--right">
                <option value="volvo">{user.city}</option>
              </select>
            </div>
            <div className="checkout-right__info-district">
              <div className="checkout-right__info-district--left">District</div>
              <select name="ciy" className="checkout-right__info-district--right">
                <option value="volvo">{user.district}</option>
              </select>
            </div>
            <div className="checkout-right__info-district">
              <div className="checkout-right__info-district--left">Sub-District</div>
              <select name="ciy" className="checkout-right__info-district--right">
                <option value="volvo">{user.subDistrict}</option>               
              </select>
            </div>
            <div className="checkout-right__info-district">
              <div className="checkout-right__info-district--left">Street</div>
              <select name="ciy" className="checkout-right__info-district--right">
                <option value="volvo">{user.street}</option>               
              </select>
            </div> */}
            <div className="checkout-right__info-address">
              <div className="checkout-right__info-address--left">Address:</div>
              <div className="checkout-right__info-address--right">{`${user.street}, ${user.subDistrict}, ${user.district}, ${user.city}`}</div>
             
            </div>
            <button disabled={cart.length <=0 ? "disabled" : ""} type="submit" onClick={(event)=> proceedCheckout(event)} className="checkout-btn">{cart.length <=0 ? "Please add product to cart":"Proceed to checkout"}</button>
          </form>
          </div>
        </div>
      </div>
      
    </>
    );
}

export default Checkout;