import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../LayOuts/Root";
import Home from "../Pages/Home";
import AddCoffee from "../Pages/AddCoffee";
import UpdateCoffee from "../Pages/UpdateCoffee";
import CoffeeDetails from "../Components/CoffeeDetails";
import SignIn from "../Components/SignIn";
import SignUp from "../Components/SignUp";
import Users from "../Components/Users";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        loader: () =>
          fetch("https://coffee-store-server-bice-seven.vercel.app/coffees"),
        hydrateFallbackElement: <p>data is loading</p>,
      },
      {
        path: "/users",
        Component: Users,
        loader: () =>
          fetch("https://coffee-store-server-bice-seven.vercel.app/users"),
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
          fetch(
            `https://coffee-store-server-bice-seven.vercel.app/coffees/${params.id}`
          ),
      },
      {
        path: "/updateCoffee/:id",
        Component: UpdateCoffee,
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-server-bice-seven.vercel.app/coffees/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/signin",
    Component: SignIn,
  },
  {
    path: "/signup",
    Component: SignUp,
  },
]);

export default Router;
