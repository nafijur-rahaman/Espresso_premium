import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Components/Home";
import AddCoffee from "../Components/Addcoffee";
import UpdateCoffee from "../Components/UpdateCoffee";
import CoffeeDetails from "../Components/CoffeeDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
      {
        index:true,
        loader: ()=>fetch("http://localhost:3000/coffees"),
        Component:Home,
        hydrateFallbackElement: <span className="loading loading-dots loading-xl"></span>
      },
      {
        path: "add_coffee",
        Component: AddCoffee
      },
      {
        path:"updateCoffee",
        Component:UpdateCoffee
      },
      {
        path:"coffeeDetails/:id",
        Component:CoffeeDetails 
      }

    ]
  },
]);