import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/footer";

const DefaultLayout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
