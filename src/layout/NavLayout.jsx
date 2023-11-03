import React from 'react';
import Navbar from '../Components/Navbar/Navbar';

const NavLayout = (props) => {
  return (
    <>
        <Navbar/>
        {props.children}
        
    </>
  );
};

export default NavLayout;