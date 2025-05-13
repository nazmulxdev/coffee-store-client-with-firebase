import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <div className="max-w-7xl">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
