import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Components/Home";
import AddCoffee from "../Components/Addcoffee";
import UpdateCoffee from "../Components/UpdateCoffee";
import CoffeeDetails from "../Components/CoffeeDetails";
import Register from "../Components/Register";
import Login from "../Components/Login";

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
        Component:CoffeeDetails,
        loader: ({params})=> fetch(`http://localhost:3000/coffees/${params.id}`) ,
        hydrateFallbackElement: <span className="loading loading-dots loading-xl"></span>

      },
      {
        path:"updateCoffee/:id",
        Component:UpdateCoffee,
        loader: ({params})=> fetch(`http://localhost:3000/coffees/${params.id}`),
        hydrateFallbackElement: <span className="loading loading-dots loading-xl"></span>
      },
      {
        path: "register",
        Component: Register
      },{
        path: "login",
        Component: Login
      }

    ]
  },
]);