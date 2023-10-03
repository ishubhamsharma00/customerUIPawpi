import React from 'react';
import {Route, Routes} from "react-router-dom";
import CheckoutLayout from '../layout/CheckoutLayout';

const CheckoutHOC = ({component:Component,...rest}) => {
  const Fun =(props)=>{
    return (<CheckoutLayout ><Component{...props}/> </CheckoutLayout>);
  }
  return (
    <>
      <Routes >
        <Route {...rest} element ={Fun (rest)}/>
      </Routes>
    </>
  );
};

export default CheckoutHOC;