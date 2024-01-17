import React from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";

const DefaultHOC = ({ component: Component, ...rest }) => {
  const Fun = (props) => {
    return (
      <DefaultLayout>
        <Component {...props} />{" "}
      </DefaultLayout>
    );
  };
  return (
    <>
      <Routes>
        <Route {...rest} element={Fun(rest)} />
      </Routes>
    </>
  );
};

export default DefaultHOC;
