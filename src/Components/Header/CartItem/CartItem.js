import React, { useContext } from "react";
import "./CartItem.css"
import { ProductsContext } from "../../../Contexts/ProductContext";

function CartItem(props) {
  const {congNumber, truNumber, deleteItemCart} = useContext(ProductsContext);

  let priceItem = props.price * props.amount;
    return (
        <div className="cart__list-product">
              <div className="cart__list-product-count">
                <button onClick={()=>truNumber(props.id)} className="cart__list-product-count-update">-</button>
                  <p className="cart__list-product-value">{props.amount}</p>
                <button onClick={()=>congNumber(props.id)} className="cart__list-product-count-update">+</button>
              </div>
              <img className="cart__list-product-img" src={props.image} alt="" />
              <div className="cart__list-product-title">{props.name}</div>
              <div className="cart__list-product-total">${priceItem}</div>
              <i onClick={()=>deleteItemCart(props.id)} className="fas fa-times cart__list-product--close" />
        </div>
    );
}

export default CartItem;