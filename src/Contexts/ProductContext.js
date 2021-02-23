import React, { useEffect, useState,createContext } from 'react';
import Cookies from 'js-cookie';

let jwt = require('jsonwebtoken');
const axios = require('axios');

export const ProductsContext = createContext();
function ProductContext(props) {
    const [products, setProducts] = useState([]);
    const [so, setSo] = useState(1);
    const [load, setLoad] = useState(true);
    const [loading, setLoading] = useState(false);
    const [isLogined, setIsLogined] = useState(true);
    const [incorrect , setIncorrect ] = useState(false);
    const [user, setUser] = useState([]);
    const [searchText,setsearchText]= useState([]);
    const [keyword,setkeyword]= useState("");
    const [infoOrderSuccess, setInfoOrderSuccess] = useState([]);
    const [cart, setCart] = useState(() => {
        const initCart = localStorage.getItem('sp');
        //console.log(initCart);
        return initCart ? JSON.parse(initCart) : [];
    });
    const [IsAutoScroll, SetIsAutoScroll] = useState(false) ;
  
    const [Filters, setFilters] = useState({
        species: "",
        star: 0,
        price: []
      });
    useEffect(() => {
        axios.get('https://conggiang-shopping-app.herokuapp.com/api/products')
            .then( response => {
                setProducts(response.data)
                //console.log(response.data);
            })
            .catch(error =>{
                console.log(error);
            }) 
    }, []);
 
    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        //console.log(token);
        if(token){
            var idUser = jwt.verify(token, 'mk')
            //console.log(idUser);
            let id = idUser.id
            axios.get('https://conggiang-shopping-app.herokuapp.com/api/users/'+id)
                .then(res => {
                    setUser(res.data.user)
                    setIsLogined(true);
                })
                .catch(err => {
                    setIsLogined(false);
                    console.log(err);
                })
        }
        else{
            setIsLogined(false)
        }
    }, [infoOrderSuccess, user])
    const addToCart =(item, idItem)=>{
        let listproduct = cart.some(cart=>{
            return cart._id === idItem;
        });
        //console.log(listproduct);
        if(listproduct){
            if(item.currentCost === 0){
                const newCart = cart.map(item => {
                    return {
                        ...item,
                        price: item.realCost,
                        amount: item._id === idItem ? item.amount += 1 : item.amount
                    };
                });
                localStorage.setItem("sp", JSON.stringify(newCart))
                setCart(newCart)
            }else{
                const newCart = cart.map(item => {
                    return {
                        ...item,
                        price: item.currentCost,
                        amount: item._id === idItem ? item.amount += 1 : item.amount
                    };
                });
                localStorage.setItem("sp", JSON.stringify(newCart))
                setCart(newCart)
            }
            
        }
        else{
            const newCart = [...cart]
            //console.log(item.amount);
            let neww = item;
            if(item.amount <= 0){
               neww.amount = 1
            }
            if(item.currentCost === 0){
                neww.price = item.realCost
            }else{
                neww.price = item.currentCost
            }
                // if(item.amount <= 0){    C2
                //     neww = {
                //      ...item,
                //      amount: item.amount + 1 
                //     }
                // }
                //console.log(neww);
            newCart.push(neww)
            localStorage.setItem("sp", JSON.stringify(newCart))
            setCart(newCart);
        }
        
    }
    const congNumber =(id)=>{
        const updataCart = cart.map(item => {
            return {
                ...item,
                amount: item._id === id ? item.amount + 1 : item.amount
            };
        });
        localStorage.setItem("sp", JSON.stringify(updataCart))
        setCart(updataCart);
    
    }
    const truNumber =(id)=>{
       // console.log(id);
        const updataCart2 = cart.map(item2 => {
            if(item2._id !== id){
                return {...item2}
            }
        
          return {
            ...item2,
            amount: item2.amount === 0 ? item2.amount = 0 : item2.amount -=1
                    
          };
          
        });
        const finditem = cart.find(item3=>{
            return item3._id === id
        });

        if(finditem.amount === 0){
            return deleteItemCart(id)
        }
        //console.log(finditem.amount);
        localStorage.setItem("sp", JSON.stringify(updataCart2))
        setCart(updataCart2)
    
      }
    const deleteItemCart =(id)=>{
        const deleteItem = cart.findIndex((item, index)=>{
            return item._id === id
        })
        const itemCart =[...cart]
        itemCart.splice(deleteItem, 1)
        setCart(itemCart);
        localStorage.setItem("sp", JSON.stringify(itemCart))
    }
    const submitSignin =(info)=>{
        axios.post('https://conggiang-shopping-app.herokuapp.com/api/users/login', info)
        .then( response => {
            localStorage.setItem("accessToken", response.data.token);
            setUser(response.data.user);
            setIsLogined(true);
       
        })
        .catch(error =>{
            setIncorrect(true);
            console.log(error);
            
        }) 
    }
    const submitSignUp =(infoSignUp)=>{
        axios.post('https://conggiang-shopping-app.herokuapp.com/api/users/', infoSignUp)
        .then( response => {
            alert("tạo tài khoản thành công");
        })
        .catch(error =>{
            console.log(error);
            alert("tạo tài khoản thất bại");
        }) 
    }
    
    const deleteCookie=()=>{
        localStorage.removeItem("accessToken")
        setIsLogined(false);
    }

    const checkout=(item)=>{
        //console.log(item);
        let orderSuccess;
        let mangorder = [];
        axios.post('https://conggiang-shopping-app.herokuapp.com/api/users/checkout', item)
        .then( response => {
            console.log(response);
            orderSuccess = response.config;
            mangorder.push(orderSuccess.data)
            //console.log(mangorder);
            setInfoOrderSuccess(mangorder);
            localStorage.removeItem("sp");
            setCart([]);
        })
        .catch(error =>{
            console.log(error);
        }) 
    }
   
    const filterProduct =(value, category)=>{
        //console.log(species);
        let newFilters = {...Filters}
        newFilters[category] = value   //tại vị trí Filters = giá trị truyền vào
        //console.log(newFilters)   
        showFilteredResults(newFilters)
        setFilters(newFilters)
        SetIsAutoScroll(true);
    } 
    const showFilteredResults = (filters) => { // Mục đích gán bằng 1 tên là filters để server nhận là là tên đó
        //console.log(filters); // 1 object Filters đã nhận dữ liệu từ handleFilters
        const variables = {
          filters: filters   // tên filters bên trái khác nhau cũng ko sao
        }
        getProduct(variables);
        setLoad(false)
        //console.log(variables);  {filters: {filters: …}}
    }
    const getProduct = (variables) => {
        axios.post('https://conggiang-shopping-app.herokuapp.com/api/products/filter', variables)
          .then(function (response) {
           // console.log(response);
            setProducts(response.data)
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    const sortProducts = (event)=>{
     
        if(event.target.value === "1"){
            const findSale = products.filter(item =>{
                return item.currentCost > 0
            })
            setProducts(findSale)
        }
        if (event.target.value === "2") {
            
          setProducts(products.slice().sort((a, b) =>  parseFloat(a.price) - parseFloat(b.price)));
          
        }
        if (event.target.value === "3") {
           
          setProducts(products.slice().sort((a, b) =>  parseFloat(b.price) - parseFloat(a.price)));
        }
    }
    const valueSearch=(keyword)=>{
        //console.log(keyword);
        setkeyword(keyword)
        var ketqua = []
        products.forEach((item)=>{
        if(item.name.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) !== -1){

            ketqua.push(item);
            setsearchText(ketqua); 
            //console.log(ketqua);
        }
        })
       
    } 
    const loadmore=()=>{
        let countLoad = so + 1;
        setLoading(true)
        axios.get(`https://conggiang-shopping-app.herokuapp.com/api/products?page=${countLoad}`  )
        .then( response => {
            let array1 = [...products]
            let array2 = response.data;
            if(response.data.length === 0){
                setLoad(false)
            }
            const array3 = array1.concat(array2);
            //pro.push(response.data);
            //console.log(pro);
            //console.log(response.data);
            setProducts(array3)
            setSo(countLoad)
            setLoading(false)
         
        })
        .catch(error =>{
            console.log(error);
        }) 
    }
    const updateInfo =(id,value)=>{
        axios.put('https://conggiang-shopping-app.herokuapp.com/api/users/' + id, value)
            .then(res => {
                console.log(res);
                alert("cập nhật tài khoản thành công")
            })
            .catch(err => {
                alert("cập nhật tài khoản thất bại")
                console.log(err);
            })
    }
    //console.log(user);
    return (
        <ProductsContext.Provider
            value={{ 
            products: products,
            addToCart: addToCart,
            cart: cart,
            congNumber: congNumber,
            truNumber: truNumber,
            deleteItemCart: deleteItemCart,
            submitSignin: submitSignin,
            submitSignUp: submitSignUp,
            isLogined: isLogined,
            incorrect: incorrect,
            user: user,
            deleteCookie: deleteCookie,
            checkout: checkout,
            filterProduct: filterProduct,
            IsAutoScroll: IsAutoScroll,
            myOrder: user.order,
            sortProducts: sortProducts,
            valueSearch: valueSearch,
            searchText: searchText,
            keyword: keyword,
            infoOrderSuccess: infoOrderSuccess,
            updateInfo: updateInfo,
            loadmore: loadmore,
            load: load,
            loading: loading
            }}
        >
        {props.children}
      </ProductsContext.Provider>
    );
}

export default ProductContext;