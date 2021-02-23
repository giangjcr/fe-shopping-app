import React, { useContext } from "react";
import "./ShopApp.css";
import { ProductsContext } from "../Contexts/ProductContext";
import ShopAppItem from "./ShopAppItem/ShopAppItem";
// import Footer from "./Footer/Footer";


function ShopApp(props) {
  const navbarList = [
    {
      name: "Fresh Vegetables",
      image: "./assets/img/Fresh-Vegetables.svg",
      value: "FreshVegetables"
    },
    {
      name: "Fresh Fruits",
      image: "./assets/img/Fresh-Fruites.svg",
      value: "FreshFruits"
    },
    {
      name: "Dairy & Eggs",
      image: "./assets/img/Dairy-eggs.svg",
      value: "DairyEggs"
    },
    {
      name: "Breakfast",
      image: "./assets/img/Bakery.svg",
      value: "Breakfast"
    },
    {
      name: "Frozen",
      image: "./assets/img/Frozen.svg",
      value: "Frozen"
    },
    {
      name: "Canned Food",
      image: "./assets/img/canned-food.svg",
      value: "CannedFood"
    },
    {
      name: "Coffee & Snacks",
      image: "./assets/img/coffee-cup.svg",
      value: "CoffeeSnacks"
    },
    {
      name: "Beverage & Juice",
      image: "./assets/img/Beverage-Juice.svg",
      value: "BeverageJuice"
    },
    {
      name: "Sauces & Jams",
      image: "./assets/img/Sauces-Jams.svg",
      value: "SaucesJams"
    },
  ]
  const { products, filterProduct, sortProducts, loadmore, load,loading} = useContext(ProductsContext);
    const listProducts = products.map((item,key)=>{
      return (
          <ShopAppItem key={key} id={item._id} name={item.name} realCost={item.realCost}
            currentCost={item.currentCost} image={item.image} star={item.star} item={item}
          />
      )
    })
 
    return (
      <div className="app_container">
        <div className="app_container--left">
          <nav className="app_container__navbar hide-on-tablet hide-on-mobile">
            <ul className="app_container__navbar-list">
            {
              navbarList.map((item, key)=>{
                return (
               
                    <li onClick={()=> filterProduct(item.value, "species")} key={key} className="app_container__navbar-item">
                      <img className="app_container__navbar-item-img" src={item.image} alt="" />
                      <p className="app_container__nabar-title">{item.name}</p>
                      <i className="fas fa-chevron-right" />
                    </li>
                 
                )
              })
            }
            </ul>
          </nav>
        </div>
        <div className="app_container--right">
          <div className="gridd wide sm">
            <div className="row sm-gutter">
              <div className="col l-12 m-12 c-12">
                <div className="app_container-banner">
                  <h2 className="app_container-banner-delivered">Products Delivered in 90 Minutes</h2><br />
                  <h3 className="app_container-banner-day"> Get your products delivered at your doorsteps all day everyday</h3>    
                </div>
              </div>
              <div className="col l-12 m-12 c-12">
                <div className="sortfirstbox">
                  <label htmlFor="categories__checkbox-id" className="categories">
                    <div className="categories-text">Categories</div>
                    <div className="categories__icon">
                      <i className="fas fa-chevron-down" />
                    </div>
                  </label>
                  <input type="checkbox" className="categories__checkbox" name="categories__checkbox" id="categories__checkbox-id" />
                  <div className="categories__checkbox-item">
                    <label htmlFor="categories__checkbox-id" className="categories categories-item">
                      <div className="categories-text">Categories</div>
                      <div className="categories__icon">
                        <i className="fas fa-times" />
                      </div>
                    </label>
                    <nav className="app_container__navbar app_container__navbar-categories ">
                    {
                      navbarList.map((item, index)=>{
                        return (
                          <label key={index} htmlFor="categories__checkbox-id">  <ul onClick={()=> filterProduct(item.value, "species")} key={index} className="app_container__navbar-list">
                            <li className="app_container__navbar-item">
                              <img className="app_container__navbar-item-img" src={item.image} alt="" />
                              <p className="app_container__nabar-title">{item.name}</p>
                              <i className="fas fa-chevron-right" />
                            </li>
                          </ul></label>
                        )
                      })
                    }
                      
                    </nav> 
                  </div>
                  <div className="filter-by">
                    <div className="filter-bys">
                      <div className="filter-by__title">Filter By</div>
                      <i className="filter-by__icon fas fa-chevron-down" />
                      <div className="filter-by__warrap">
                        <div className="filter-by__list">
                          <h3 className="filter-by__list-title">Rate: </h3>
                          <input type="radio" className="filter-by__list-rating__checked" name="star-1" id="filter-by__list-rating-id" />
                          <label onClick={()=> filterProduct("0", "star")}
                           htmlFor="filter-by__list-rating-id" className="filter-by__list-rating-star1">
                            <div className="filter-by__list-star  ">
                              <i className="far fa-star" />
                              <i className="far fa-star" />
                              <i className="far fa-star" />
                              <i className="far fa-star" />
                              <i className="far fa-star" />
                              <div className="filter-by__list-star-1">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                              </div>
                            </div>
                          </label>
                          <input type="radio" className="filter-by__list-rating__checked2" name="star-1" id="filter-by__list-rating-id2" />
                          <label  onClick={()=> filterProduct("20", "star")}
                           htmlFor="filter-by__list-rating-id2" className="filter-by__list-rating-star2">
                            <div className="filter-by__list-star2  ">
                              <i className="far fa-star" />
                              <i className="far fa-star" />
                              <i className="far fa-star" />
                              <i className="far fa-star" />
                              <i className="far fa-star" />
                              <div className="filter-by__list-star-2">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                              </div>
                            </div>
                          </label>
                          <input type="radio" className="filter-by__list-rating__checked3" name="star-1" id="filter-by__list-rating-id3" />
                          <label  onClick={()=> filterProduct("40", "star")} 
                          htmlFor="filter-by__list-rating-id3" className="filter-by__list-rating-star3">
                            <div className="filter-by__list-star3  ">
                              <i className="far fa-star" />
                              <i className="far fa-star" />
                              <i className="far fa-star" />
                              <i className="far fa-star" />
                              <i className="far fa-star" />
                              <div className="filter-by__list-star-3">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                              </div>
                            </div>
                          </label>
                        </div>
                        <div className="filter-by__list-star-price">
                          <h3 className="filter-by__list-star-price-title">Price: </h3>
                          <label className="container">Under 100$
                            <input type="radio" name="radio" />
                            <span className="checkmark" />
                          </label>
                          <label className="container">100$ to 200$
                            <input type="radio" name="radio" />
                            <span className="checkmark" />
                          </label>
                          <label className="container">100$ to 200$
                            <input type="radio" name="radio" />
                            <span className="checkmark" />
                          </label>
                          <label className="container">Above 200$
                            <input type="radio" name="radio" />
                            <span className="checkmark" />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sort-by">
                    <select onChange={(event) => sortProducts(event)} className="sort-by__select" name="cars">
                      <option className="sort-by__select-value" hidden={true}>Sort Products By</option>
                      <option className="sort-by__select-value"  value={1}>List products sale</option>
                      <option className="sort-by__select-value" value={2}>Price: Low to High</option>
                      <option className="sort-by__select-value" value={3}>Price: High to low</option>
                    </select>
                  </div> 
                </div>
              </div>
             
                {listProducts}

                {
                  load ? (
                    <div className="load-more">
                    <button onClick={()=>loadmore()} className="load-more-btn">{loading ? "Loading...": "Load More"}</button>   
                </div>
                  ): ""
                }
                
                       
            </div>
          </div>         
      </div>
      {/* <Footer/> */}
    </div>
    );
}

export default ShopApp;