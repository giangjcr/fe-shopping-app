// import React, { useContext, useEffect, useState } from 'react';
import React from 'react';
// import {ProductsContext} from "../../Contexts/ProductContext";
import "./OrderSuccess.css";
// import OrderSuccessItem from './OrderSuccessItem/OrderSuccessItem';
function OrderSuccess(props) {
  // const { infoOrderSuccess} = useContext(ProductsContext);
  // const [listItemSuccess, setListItemSuccess] = useState([])
  // useEffect(() => {
  //   let mang = [];
  //   if(infoOrderSuccess.length != 0){
      
  //     mang.push(infoOrderSuccess.data) 
  //     setListItemSuccess(mang);
  //   }
    
  // },[infoOrderSuccess])

  // let duy =  infoOrderSuccess.map((item,index)=>{
  //   return item.id;
  // })
  //  console.log(duy);
     // console.log(a);
  // console.log( listItemSuccess);
  // console.log( listItemSuccess[0].id);
  
    return (
      <div className="app_container">
        
        <div className="order__success">
        <div className="grid wide">
          <div className="row">
            <div className="order__success-content">
              <div className="col l-12 m-12 c-12 ">
                <div className="Order-Received hide-on-mobile">
                  <div className="Order-Received__id">
                    <p className="Order-Received__id-detail">Mã đơn hàng</p>
                    <p className="Order-Received__id-detail-code"></p>
                  </div>
                  <div className="Order-Received__date">
                    <p className="Order-Received__date-detail">Thời gian đặt hàng</p>
                    <p className="Order-Received__date-detail-date"> 11/11/2020</p>
                  </div>
                  <div className="Order-Received__total">
                    <p className="Order-Received__total-detail">Tổng tiền</p>
                    <p className="Order-Received__total-detail-money"> $1000</p>
                  </div>
                  <div className="Order-Received__Payment">
                    <p className="Order-Received__Payment-detail"> Phương thức thanh toán</p>
                    <p className="Order-Received__Payment-detail-pay"> thanh toán khi nhận hàng</p>  
                  </div>
                </div>
                <div className="Order-Received-mobile hide-on-pc hide-on-tablet">
                  <div className="Order-Received-mobile__id">
                    <p className="Order-Received-mobile__id-detail">Mã đơn hàng</p>
                    <p className="Order-Received-mobile__id-detail-code">rfygddddsdsdduhsdusadhisahdiusa</p>
                  </div>
                  <div className="Order-Received-mobile__date">
                    <p className="Order-Received-mobile__date-detail">Thời gian đặt hàng</p>
                    <p className="Order-Received-mobile__date-detail-date"> 11/11/2020</p>
                  </div>
                  <div className="Order-Received-mobile__total">
                    <p className="Order-Received-mobile__total-detail">Tổng tiền</p>
                    <p className="Order-Received-mobile__total-detail-money"> $1000</p>
                  </div>
                  <div className="Order-Received-mobile__Payment">
                    <p className="Order-Received-mobile__Payment-detail"> Phương thức thanh toán</p>
                    <p className="Order-Received-mobile__Payment-detail-pay"> thanh toán khi nhận hàng</p>  
                  </div>
                </div>
              </div>
              <div className="col l-12 m-12 c-12">
                <div className="order__order-details">
                  <h2 className="order__order-details-title">Order Details</h2>
                  <h3 className="order__order-details-total-product">Tổng: 10 sản phẩm</h3>
                  <div className="order__order-details-content">
                    <div className="order__order-details-list">

                      <div className="order__order-details-list-item">
                        <img className="order__order-details-img" src="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09193219/Icecream2.jpg" alt="" />
                        <div className="order__order-details-name">
                          sản phẩm 1
                        </div>
                        <div className="order__order-details-price">
                          $15
                        </div>
                      </div>
                      
                    </div>
                    <div className="order__order-details-delivery">
                      <div className="order__order-details-delivery--left">
                        Phí giao hàng
                      </div>
                      <div className="order__order-details-delivery--right">
                        $1
                      </div>
                    </div>
                    <div className="order__order-details-payment">
                      <div className="order__order-details-payment--left">
                        Phương thức thanh toán:
                      </div>
                      <div className="order__order-details-payment--right">
                        Thanh toán khi giao hàng
                      </div>
                    </div> 
                    <div className="order__order-details-total">
                      <div className="order__order-details-total--left">
                        TỔNG
                      </div>
                      <div className="order__order-details-total--right">
                        $120
                      </div>
                    </div>
                    {/* <div className="order__order-details-note">
                      <div className="order__order-details-note--left">
                        Ghi chú
                      </div>
                      <div className="order__order-details-note--right">
                        no note
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
}

export default OrderSuccess;