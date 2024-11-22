import React,{lazy , Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
import About from "./src/Components/About";
import Contact from "./src/Components/Contact";
import RestaurantMenu from "./src/Components/RestaurantMenu";
import Error from "./src/Components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Grocery from "./src/Components/Grocery";

// chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// Om demand loading

const Grocery = lazy(() => import("./src/Components/Grocery"));



const AppLayout = () => {
  return <div className="app">
    <Header />
    <Outlet/>
  </div>
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading!!!!</h1>}>
            <Grocery />  
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
            
root.render(<RouterProvider router={appRouter} />);
