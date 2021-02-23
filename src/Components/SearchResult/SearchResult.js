import React, { useContext, useEffect } from "react";
import "./SearchResult.css";
import { ProductsContext } from "../../Contexts/ProductContext";
import SearchResultItem from "./SearchResultItem/SearchResultItem";
function SearchResult(props) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [])
  const {keyword, searchText, filterProduct, sortProducts} = useContext(ProductsContext);

  let ListResult =  searchText.map((item,index)=>{
    return <SearchResultItem key={index} id={item._id} name={item.name} realCost={item.realCost}
    currentCost={item.currentCost} image={item.image} star={item.star} item={item}/>
  })
  console.log(searchText);
    return (
        <div className="search-result">
        <div className="grid wide">
          <div className="row ">
            <div className="col l-3 m-0 c-0">
              <div className="app_container__filter--left hide-on-mobile-tablet">
                <div className="app_container__filter-by">
                  <div className="app_container__filter-by-title">
                    Filter By
                  </div>
                  <div className="app_container__filter--warrap">
                    <div className="app_container__filter-list">
                      <h3 className="app_container__filter-list-title">Rate: </h3>
                      <div className="app_container__filter">
                        <input type="radio" className="app_container__filter-list-rating__checked" name="star-a1" id="app_container__filter-list-rating-id" />
                        <label onClick={()=> filterProduct("0", "star")} htmlFor="app_container__filter-list-rating-id" className="app_container__filter-list-rating-star1">
                          <div className="app_container__filter-list-star  ">
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                            <div className="app_container__filter-list-star-1">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                          </div>
                          <p className="app_container__filter-list-star-text ">&amp; up</p>
                        </label>
                        <input type="radio" className="app_container__filter-list-rating__checked2" name="star-a1" id="app_container__filter-list-rating-id2" />
                        <label onClick={()=> filterProduct("20", "star")} htmlFor="app_container__filter-list-rating-id2" className="app_container__filter-list-rating-star2">
                          <div className="app_container__filter-list-star2  ">
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                            <div className="app_container__filter-list-star-2">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                          </div>
                          <p className="app_container__filter-list-star-text ">&amp; up</p>
                        </label>
                        <input type="radio" className="app_container__filter-list-rating__checked3" name="star-a1" id="app_container__filter-list-rating-id3" />
                        <label onClick={()=> filterProduct("40", "star")}  htmlFor="app_container__filter-list-rating-id3" className="app_container__filter-list-rating-star3">
                          <div className="app_container__filter-list-star3  ">
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                            <div className="app_container__filter-list-star-3">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                          </div>
                          <p className="app_container__filter-list-star-text ">&amp; up</p>
                        </label>
                      </div>
                    </div>
                    <div className="app_container__filter-list-star-price">
                      <h3 className="app_container__filter-list-star-price-title">Price: </h3>
                      <label className="container-filter">Under 100$
                        <input type="radio" name="radio" />
                        <span className="checkmark-filter" />
                      </label>
                      <label className="container-filter">100$ to 200$
                        <input type="radio" name="radio" />
                        <span className="checkmark-filter" />
                      </label>
                      <label className="container-filter">100$ to 200$
                        <input type="radio" name="radio" />
                        <span className="checkmark-filter" />
                      </label>
                      <label className="container-filter">Above 200$
                        <input type="radio" name="radio" />
                        <span className="checkmark-filter" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col l-9 m-12 c-12">
              <div className="app_container-search">
                <div className="app_container-search-text">Search Result</div>
                <div className="app_container-search-categories">
                  <div className="app_container-search-result">{searchText.length} items for "{keyword}"</div>
                  <div className="sort-by">
                    <select onChange={(event) => sortProducts(event)} className="sort-by__select sort-by__select-border" name="cars">
                      <option className="sort-by__select-value" hidden={true}>Sort Products By</option>
                      <option className="sort-by__select-value"  value={1}>List products sale</option>
                      <option className="sort-by__select-value" value={2}>Price: Low to High</option>
                      <option className="sort-by__select-value" value={3}>Price: High to low</option>
                    </select>
                  </div> 
                </div>
              </div>
              <div className="app_container__products">
                <div className="row sm-gutter app_container__products">
                  
                   {ListResult}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default SearchResult;