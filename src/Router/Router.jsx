import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../LayOuts/Root";
import Home from "../Pages/Home";
import AddCoffee from "../Pages/AddCoffee";
import UpdateCoffee from "../Pages/UpdateCoffee";
import CoffeeDetails from "../Components/CoffeeDetails";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("http://localhost:3000/coffees"),
        hydrateFallbackElement: <p>data is loading</p>,
      },
      {
        path: "/addCoffee",
        Component: AddCoffee,
      },
      {
        path: "/coffees/:id",
        Component: CoffeeDetails,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
      },
      {
        path: "/updateCoffee/:id",
        Component: UpdateCoffee,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
      },
    ],
  },
]);

export default Router;
