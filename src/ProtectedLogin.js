
import React from "react";
import { BrowserRouter as  Route, Redirect } from "react-router-dom";
function ProtectedLogin  ({auth, component: Component, ...rest}) {
    return(
        <Route
        {...rest}

        render ={()=> {
          if( !auth){
            return <Component/>
          }
          else{
            return <Redirect to="/account/info"/>
          }
        }}

        // render ={()=> !auth?(
        //   <Component/>
        // ):(
        //   <Redirect to="/account/info"/>
        // )}
        />
      )
}
export default ProtectedLogin;
