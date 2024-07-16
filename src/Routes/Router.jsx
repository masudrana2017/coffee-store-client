import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home/Home";
import AddCoffee from "../pages/AddCoffee/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee/UpdateCoffee";
import Register from "../components/Register/Register";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:()=>fetch('http://localhost:5000/coffee')
        },
        {
          path:"/addCoffee",
          element:<AddCoffee></AddCoffee>
        },
        {
          path:"/updateCoffee/:id",
          element:<UpdateCoffee></UpdateCoffee>,
          loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)

        },
        {
          path:"/register",
          element:<Register></Register>
        }
      ]
    },
  ]);

export default router;