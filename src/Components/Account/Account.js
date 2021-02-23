import React, { useContext,useEffect } from "react";
import "./Account.css";

import {
    Route, Redirect, NavLink,
  } from "react-router-dom";
import Order from '../Order/Order';
import Checkout from '../Checkout/Checkout';
import AccountInfo from '../AccountInfo/AccountInfo';
import { ProductsContext } from "../../Contexts/ProductContext";

function Account({match}) {
    const {isLogined, deleteCookie} = useContext(ProductsContext);
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, [])

    return (

   <div className="app_container">
    <div className="order">

        <div className="grid wide">
            <div className="row">
                <div className="col l-12 m-12 c-12  ">
                    <nav className="order__menu-mini hide-on-pc">
                        <ul className="order__menu-mini-list">
                            <li className="order__menu-mini-item">
                                <NavLink activeClassName="actice2" to={`${match.url}/info`} >
                                <p className="order__menu-mini-link">My Account</p>
                                </NavLink>
                            </li>

                            <li className="order__menu-mini-item">
                                <NavLink activeClassName="actice2" to={`${match.url}/order`} >
                                <p className="order__menu-mini-link">My order</p>
                                </NavLink> 
                            </li>
                        
                            <li className="order__menu-mini-item">
                                <NavLink activeClassName="actice2" to={`${match.url}/checkout`} >
                                <p className="order__menu-mini-link">Checkout</p>
                                </NavLink>
                            </li>
                            <li className="order__menu-mini-item">
                                <NavLink  to="/" onClick={()=> deleteCookie()}>
                                <p className="order__menu-mini-link">Log Out</p>
                                </NavLink>
                            </li>                
                        
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="row">
                
                <div className="col l-3 m-0 c-0">
                    <nav className="order__menu hide-on-tablet hide-on-mobile">
                    <ul className="order__menu-list">
                        <NavLink activeClassName="actice" to={`${match.url}/info`} >
                            <li className="order__menu-list-item">
                                <p className="order__menu-list-item-link">My Account </p>
                            </li>
                        </NavLink > 

                        <NavLink activeClassName="actice"  to={`${match.url}/order`} >
                            <li className="order__menu-list-item">
                                <p  className="order__menu-list-item-link">My order </p>
                            </li>
                        </NavLink >

                        <NavLink activeClassName="actice" to={`${match.url}/checkout`} >
                            <li className="order__menu-list-item">
                                <p className="order__menu-list-item-link">Checkout</p>
                            </li>
                        </NavLink>
                        <NavLink  to="/" onClick={()=> deleteCookie()}>
                            <li className="order__menu-list-item">
                                <p className="order__menu-list-item-link">Log Out </p>
                            </li>
                        </NavLink>
                    </ul>
                    </nav>
                </div>
            

{/*    
    <Route path={`${match.url}/checkout`} component={Order} /> */}

    <Route path={`${match.url}/info`}> {isLogined ? <AccountInfo/> : <Redirect to="/signin" />}</Route>
    <Route path={`${match.url}/order`}> {isLogined ? <Order/> : <Redirect to="/signin" />}</Route>
    <Route path={`${match.url}/checkout`}> {isLogined ? <Checkout/> : <Redirect to="/signin" />}</Route>
                    
            </div>
        </div>
    </div>
</div>
        
        
    );
}

export default Account;