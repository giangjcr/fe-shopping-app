import React, { useContext, useState } from 'react';

import "./Order.css";
import {ProductsContext} from "../../Contexts/ProductContext";
// import ListOrder from './ListOrder/ListOrder';
function Order(props) {
  const [InfoDetail, setInfoDetail] = useState({})
  const {  user, } = useContext(ProductsContext);

    const orderDetails=(id)=>{
      let detailOrdermini = user.order.find(item =>{
        return item.idOrder === id
      })
      setInfoDetail(detailOrdermini)
    }

    let myOrder ;
    // let add = user.order.reverse();
    // console.log(add);
    if(user.order){
      myOrder = user.order.map((item,index)=>{
      return(
        <label key={index} onClick={()=> orderDetails(item.idOrder)} htmlFor={`my-order${item.idOrder}`}>
        <div className="order__my-order-list">
          <div className="order__my-order-item-title">Order#{index+1}</div>
          <div className="order__my-order-item-date">
            <p className="order__my-order-item-date__left">Order Date</p>
            <p className="order__my-order-item-date__right">{item.date}</p>
          </div>
          <div className="order__my-order-item-id">
            <p className="order__my-order-item-id__left">
              Order ID:
            </p>
            <p className="order__my-order-item-right">
              {item.idOrder.slice(0,8)}
            </p>
          </div>
          <div className="order__my-order-item-total">
            <p className="order__my-order-item-total__left">
              Total price:
            </p>
            <p className="order__my-order-item-total__right">
              ${item.total}
            </p>
          </div>
          <input type="radio" className="my-order" name="my-order" id={`my-order${item.idOrder}`} />
          <div className="order__my-order-item-detail">
            <h2 className="order__my-order-item-detail-title">Order Details</h2>
            <h3 className="order__my-order-item-detail-total-product">Total: {item.cart.length} product
            </h3>
            <div className="order__my-order-item-detail-content">
              <div className="order__my-order-item-detail-list">
               {
                 item.cart.map((sp,index)=>{
                   return(
                     <div key={index} className="order__my-order-item-detail-list-item">
                  <img className="order__my-order-item-detail-img" src={sp.image} alt="" />
                  <div className="order__my-order-item-detail-name">
                    {sp.name}
                  </div>
                  <div className="order__my-order-item-detail-price">
                    ${sp.amount * sp.price}
                  </div>
                </div>
                   )
                 })
               }
                
              
          
              </div>
              <div className="order__my-order-item-detail-delivery">
                <div className="order__my-order-item-detail-delivery--left">
                Delivery charges:
                </div>
                <div className="order__my-order-item-detail-delivery--right">
                  FREE
                </div>
              </div>
              <div className="order__my-order-item-detail-payment">
                <div className="order__my-order-item-detail-payment--left">
                  Payment methods:
                </div>
                <div className="order__my-order-item-detail-payment--right">
                  Payment on delivery
                </div>
              </div>
              <div className="order__my-order-item-detail-total">
                <div className="order__my-order-item-detail-total--left">
                  Total:
                </div>
                <div className="order__my-order-item-detail-total--right">
                  ${item.total}
                </div>
              </div>
              <div className="order__my-order-item-detail-note">
                <div className="order__my-order-item-detail-note--left">
                  Note:
                </div>
                <div className="order__my-order-item-detail-note--right">
                  No note
                </div>
              </div>
            </div>
          </div>
        </div>
      </label>
      )
    })
    }
    let myOrderDetail = null;
    if(Object.keys(InfoDetail).length > 0 && Object.values(InfoDetail).length > 0){
        myOrderDetail = (
          <>
          <h3 className="order__order-details-total-product">Total: {InfoDetail.cart.length} product</h3>
          <div className="order__order-details-content">
            <div className="order__order-details-list">

              {
                InfoDetail.cart.map((item, index)=>{
                  return(
                    <div key={index} className="order__order-details-list-item">
                    <img className="order__order-details-item-img" src={item.image} alt="" />
                    <div className="order__order-details-name">
                      {item.name}
                    </div>
                    <div className="order__order-details-price">
                      ${item.price * item.amount}
                    </div>
                  </div>
    
                  )
                })
              }
            
            </div>
            <div className="order__order-details-delivery">
              <div className="order__order-details-delivery--left">
                Delivery charges:
              </div>
              <div className="order__order-details-delivery--right">
                Free
              </div>
            </div>
            <div className="order__order-details-payment">
              <div className="order__order-details-payment--left">
                Payment methods:
              </div>
              <div className="order__order-details-payment--right">
              Payment on delivery
              </div>
            </div>
            <div className="order__order-details-total">
              <div className="order__order-details-total--left">
                Total:
              </div>
              <div className="order__order-details-total--right">
                ${InfoDetail.total}
              </div>
            </div>
            <div className="order__order-details-note">
              <div className="order__order-details-note--left">
                Note:
              </div>
              <div className="order__order-details-note--right">
                No note
              </div>
            </div>
          </div>
          </>
        )
        
    }
  
    return (
      <>        
        <div className="col l-4 m-6 c-12">
        <div className="order__my-order">
          <h2 className="order__my-order-title">My Order</h2>
          <div className="order__my-order-lists">
            {
              myOrder
            }
           
          </div>
        </div>
      </div>
        







      <div className="col l-5 m-6 c-0">
          <div className="order__order-details">
          <h2 className="order__order-details-title">Order Details</h2>
          {myOrderDetail}
      </div>
      </div>
        </>
   
    );
}

export default Order;