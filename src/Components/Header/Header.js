import React, { useContext, useState } from "react";
import './Header.css';
import CartItem from "./CartItem/CartItem";
import {
 Link, NavLink,useHistory ,
} from "react-router-dom";
import { ProductsContext } from "../../Contexts/ProductContext";
function Header(props) {
    const {cart, user,isLogined, valueSearch} = useContext(ProductsContext);
    const [searchResult, setsearchResult] = useState("")
    const history = useHistory();
    let itemCart = cart.map((item,index)=>{
        return <CartItem id={item._id} key={index} name={item.name} image={item.image}
        realCost={item.realCost} currentCost={item.currentCost} amount={item.amount} price={item.price}/>
    })

    let listCart;
    if(cart.length === 0){
      listCart = (
        <div className="cart__list-no-item">
            <img className="cart__list-no-item-img"src="https://cartsy.redq.io/baby-care/wp-content/themes/cartsy/assets/images/not-found-alt.svg" alt=""/>
            <p className="cart__list-no-item-text">No products in the cart.</p>
        </div>
      )
    }

    let total = cart.reduce((accumulator ,item, index)=>{
      return accumulator += item.price * item.amount;
    },0)
   
    //console.log(total);
    let myAccount = (
      <Link to="/signin">
        <div className="header__menu-account ">
            Account
        </div>
      </Link>
    )
    if(isLogined){
      myAccount = (
        <NavLink to="/account/info"><div className="my-account">Hi {user.userName}</div></NavLink> 
      )
    }
     
    const submitValueSearch =(event)=>{
      event.preventDefault();
      valueSearch(searchResult)
      history.push('/searchresult')
    }

    return ( 
<div>
          <header className="header">
            <div className="grid wide">
                <div className="row">
                    <div className="col l-12 m-12 c-12">
                    <div className="header__menu">
                        <div className="header__menu-search-tablet">
                        <label className="btn-input-search-icon" htmlFor="btn-input-search-icon">
                          <i className="header__menu-search-tablet-icon fas fa-search" />
                          </label>
                        </div>
                        <div className="header__menu-left">
                        <a href="/" className="header__menu-logo">
                            <img src="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/16065923/Grocery.svg" alt="" className="header__menu-img-logo" />
                        </a>
                        </div>
                        <div className="header__menu-search hide-on-tablet hide-on-mobile">
                        <div className="header__menu-search--background">
                          <form onSubmit={submitValueSearch}>
                            <i className="header__menu-search-icon fas fa-search" />
                            <input onChange={(event)=> setsearchResult(event.target.value)} className="header__menu-search-input" type="text" placeholder="Search your product from here" />
                          </form>
                        </div>
                        </div>
                        <input type="checkbox" className="btn-input-search" id="btn-input-search-icon" />
                        <div className="header__menu-search-mini  ">
                          <div className="header__menu-search-mini--background">
                              <label htmlFor="btn-input-search-icon">
                              <i className="header__menu-search-icon-mini fas fa-arrow-left" />
                              </label>
                              <div className="search-mini">
                              <i className="header__menu-search-icon-mini fas fa-search" /> 
                              <form className="form-mini" onSubmit={submitValueSearch}>
                                <input className="header__menu-search-input-mini" type="text" placeholder="Search product" />   
                             </form>
                              </div>
                              <label htmlFor="header__menu-navbar-cart" className=" cart-mini header__menu-navbar">
                              <i className="header__menu-navbar-icon fas fa-shopping-cart" />
                              <label htmlFor="header__menu-navbar-cart" className="header__menu-navbar--count-mini">{cart.length}</label>
                              </label>
                          </div>
                        </div>
                        <div className="header__menu-right">
                         
                        {myAccount}
                        <label htmlFor="header__menu-navbar-cart" className="header__menu-navbar">
                            <i className="header__menu-navbar-icon fas fa-shopping-cart" />
                            <label htmlFor="header__menu-navbar-cart" className="header__menu-navbar--count">{cart.length}</label>
                        </label>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </header>
        <input type="checkbox" name="" className="navbar-input-cart" id="header__menu-navbar-cart" />
        <label htmlFor="header__menu-navbar-cart" className="overflow" />
        <div className="cart">
          <div className="cart__hearder">
            <div className="cart__hearder--left">
              <i className="fas fa-shopping-bag cart__hearder-bag" />
              <div className="cart__hearder-count">{cart.length} item</div>
            </div>
            <label htmlFor="header__menu-navbar-cart" className="cart__hearder--right">
              <i className="fas fa-times cart__hearder-close" />
            </label>
          </div>

          <div className="cart__list">   
            {itemCart}
            {listCart}

          </div>
          <label  onClick={() => history.push('/account/checkout')} htmlFor="header__menu-navbar-cart" className="cart__checkout">
            <div className="cart__checkout-inner">
              <h4 className="cart__checkout-item--left"> Checkout</h4>
              <p className="cart__checkout-total">
                ${total}
              </p>
            </div>
            
          </label>
        </div>

        

</div>


    
    );
}

export default Header;