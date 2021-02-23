import React from "react";
// import "./App.css";
import {
  BrowserRouter as Router,
  Switch, 
  Route,
} from "react-router-dom";
import ShopApp from "./Components/ShopApp";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import OrderSuccess from "./Components/OrderSuccess/OrderSuccess";
import SearchResult from "./Components/SearchResult/SearchResult";
// import NotFound from "./Components/NotFound/NotFound";
import ProductContext from "./Contexts/ProductContext";
import Header from "./Components/Header/Header";
import Account from "./Components/Account/Account";
import SignIn  from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
// import Footer from "./Components/Footer/Footer";

function App() {

  return (
   <div className="rap" >
     <ProductContext>

        <Router>
         
            <Header/>
            
            <Switch> <Route path="/" exact component={ShopApp} />
              <Route path="/detail" exact  component={ProductDetail} />
             
              <Route path="/ordersuccess" exact  component={OrderSuccess} />

              <Route path="/account"   component={Account} />
              {/* <Route path="/order-success" exact  component={OrderSuccess} /> */}
              <Route path="/searchresult" exact  component={SearchResult} /> 
              <Route path="/signin" exact  component={SignIn} />
              <Route path="/signup" exact  component={SignUp} />
             
              
              <Route path="/product-detail/:slug.:id.html" exact  component={ProductDetail}/>
              
              <Account/>
              
            </Switch>
         
        </Router>
        
     
    </ProductContext>
 </div>
  );
}

export default App;
