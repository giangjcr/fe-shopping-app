import React, { useState, useEffect,useContext } from 'react';
import "./ProductDetail.css";
import { ProductsContext } from "../../Contexts/ProductContext";
// import {useParams} from 'react-router-dom'
function ProductDetail(props) {
  // const params = useParams()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [])
  const { cart, products, truNumber, congNumber, addToCart} = useContext(ProductsContext);
  // console.log(props.match.params.id);
  // console.log(typeof(props.match.params.id));
  const [detailProduct, setDetailProduct] = useState([])
  const [detailProductCart, setDetailProductCart] = useState([])
  
  useEffect(() =>{
    if(props.match.params.id){
      products.forEach(product => {
          if(product._id === props.match.params.id) 
          setDetailProduct(product)
        })
      
    }
  },[props.match.params.id, products])
  
  useEffect(() =>{
      if(cart.length > 0){
        cart.forEach(productCart => {
          if(productCart._id === props.match.params.id) 
          setDetailProductCart(productCart)
        })
      }
    
  },[props.match.params.id,cart])
  if(detailProduct.length === 0) return null;

  let inputCount = (
    <div className="product-detail__related-add-btn" >
        <button onClick={()=> addToCart(detailProduct)} className="product-detail__related-add btn-detail">Add to cart</button>
    </div>
  )
  
  let findCount = cart.find(item=>{
    return item._id === props.match.params.id
  })

  if(findCount){
    inputCount=(
        <div className="product-detail--right-count-content">
          <div className="product-detail--right-value">{detailProductCart.amount}</div>    
            <div className="product-detail--right-updata">
                <button onClick={()=> congNumber(detailProductCart._id)} className="product-detail--right-count-top">+</button>
                <button onClick={()=> truNumber(detailProductCart._id)} className="product-detail--right-count-bottom">-</button>
            </div>
        </div>
    )
  }
 
     
 //console.log(detailProductCart.amount);
 
    return (
      <div className="app_container">
        <div className="product-detail">
          <div className="grid wide">
            <div className="row">
              <div className="product-detail__content" >
                  <div className="col l-6 m-6 c-12">
                    <div className="product-detail--left">
                      <img className="product-detail--left-img" src={detailProduct.image} alt="" />
                    </div>
                  </div>
                  <div className="col l-6 m-6 c-12">
                    <div className="product-detail--right"> 
                      <div className="product-detail--right-title">{detailProduct.name}</div>
                      <div className="product-detail--right-price">{detailProduct.realCost}$</div>
                      <div className="product-detail--right-des">{detailProduct.descripttion}</div>
                      <div className="product-detail--right-stock">{detailProduct.stock} in stock</div>
                      <div className="product-detail--right-count">
                        {inputCount}
                      </div>
                    </div> 
                  </div>
              </div>
              {/* <div className="product-detail__reviews">
                <div className="col l-12">
                  <div className="product-detail__reviews-content">
                    <hr />
                    <div className="product-detail__rating">
                      Your rating *
                    </div>
                    <label htmlFor="your-review" className="product-detail__your-review">Your review *</label>
                    <form action="">
                      <textarea className = "true" id="your-review" name="your-review" rows={10} cols={50} defaultValue={""} /><br />
                      <input className="product-detail__reviews--submit" type="button" defaultValue="Submit" />
                    </form> 
                  </div>
                </div>
              </div> */}
              {/* <div className="product-detail__related">
                <div className="col  l-12">
                  <div className="row n-gutter">
                    <div className="col l-2-4 m-3 c-6">
                      <div className="product-detail__related-item">
                        <a className="product-detail__related-link" href="/">
                          <img className="product-detail__related-img" src=" https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09210135/canned-food1-3.jpg" alt="" />
                          <p className="product-detail__related-price">15$</p>
                          <h3 className="product-detail__related-title">lsd jfsdijf thuay y7sdy s7dyas
                            h7yas7dy yd7syds ssssss ssss sdsifj jdisfjid</h3>
                        </a>
                        <button className="product-detail__related-add">Add to cart</button>
                        <div className="product-detail__related-item-counter">
                          <button className="product-detail__related-item-counter-update">-</button>
                          <p className="product-detail__related-item-counter-value">1</p>
                          <button className="product-detail__related-item-counter-update ">+</button>
                        </div>
                      </div>
                    </div>
                    <div className="col l-2-4 m-3 c-6">
                      <div className="product-detail__related-item">
                        <a className="product-detail__related-link" href="/">
                          <img className="product-detail__related-img" src=" https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09210135/canned-food1-3.jpg" alt="" />
                          <p className="product-detail__related-price">15$</p>
                          <h3 className="product-detail__related-title">lsd jfsdijf thuay y7sdy s7dyas
                            h7yas7dy yd7syds ssssss ssss sdsifj jdisfjid</h3>
                        </a>
                        <button className="product-detail__related-add">Add to cart</button>
                        <div className="product-detail__related-item-counter">
                          <button className="product-detail__related-item-counter-update">-</button>
                          <p className="product-detail__related-item-counter-value">1</p>
                          <button className="product-detail__related-item-counter-update ">+</button>
                        </div>
                      </div>
                    </div>
                    
                    
                    
                  </div>
                </div>
              </div> */}


            </div>
          </div>
        </div>
      </div>
    );
}

export default ProductDetail;