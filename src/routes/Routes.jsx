import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";


import Shops from "../pages/shop/shops";
import EventDetails from "../pages/details/EventDetails";
import PrivateRoute from "./PrivateRoute";
import BarcelonaTour from "../pages/tour/BarcelonaTour";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('/services.json')
      },
      {
        path: '/services/:id',
        element: <PrivateRoute>
          <EventDetails></EventDetails>
          </PrivateRoute>
      },
      {
        path: "/jersey-shop", 
        element: <PrivateRoute>
          <Shops></Shops>
        </PrivateRoute>
      },
      {
        path: "/barcaTour", 
        element: <PrivateRoute><BarcelonaTour></BarcelonaTour></PrivateRoute>
      },
      
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
