import React from 'react';
import {Route, Routes} from "react-router-dom";
import NavLayout from '../layout/CheckoutLayout';

const NavHOC = ({component:Component,...rest}) => {
    const Fun =(props)=>{
      return (<NavLayout ><Component{...props}/> </NavLayout>);
    }
    return (
      <>
        <Routes >
          <Route {...rest} element ={Fun (rest)}/>
        </Routes>
      </>
    );
  };
  
  export default NavHOC;