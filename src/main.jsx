import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./components/ErrorPage";
import Root from "./Providers/Root";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import BlogDetail from "./components/BlogDetail";
import Artists from "./components/Artists";
import AuthProvider from "./Providers/AuthProvider";
import AddCraftItem from "./components/AddCraftItem";
import AllCraftItems from "./components/AllCraftItems";
import MyList from "./components/MyList";
import PrivateRoute from "./Providers/PrivateRoute";
import CraftDetail from "./components/CraftDetail";
import LandscapePainting from "./components/Categories/LandscapePainting";
import PortraitDrawing from "./components/Categories/PortraitDrawing";
import WatercolourPainting from "./components/Categories/WatercolourPainting";
import OilPainting from "./components/Categories/OilPainting";
import CharcoalSketching from "./components/Categories/CharcoalSketching";
import CartoonDrawing from "./components/Categories/CartoonDrawing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("blogData.json"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/item/:id",
        element: <BlogDetail />,
        loader: () => fetch("blogData.json"),
      },
      {
        path: "/privateArtist",
        element: <Artists />,
        loader: () => fetch("artistData.json"),
      },
      {
        path: "/addItem",
        element: (
          <PrivateRoute>
            <AddCraftItem />
          </PrivateRoute>
        ),
      },
      {
        path: "/myList",
        element: (
          <PrivateRoute>
            <MyList />
          </PrivateRoute>
        ),
      },
      {
        path: "/allCraftItems",
        element: <AllCraftItems />,
        loader: () => fetch("http://localhost:5000/craft"),
      },
      {
        path: "/craft/:id",
        element: (
          <PrivateRoute>
            <CraftDetail />
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/craft"),
      },

      // Categories ----------------------->
      {
        path: "/category/landscapePainting",
        element: <LandscapePainting />,
        loader: () => fetch("http://localhost:5000/craft"),
      },
      {
        path: "/category/portraitDrawing",
        element: <PortraitDrawing />,
        loader: () => fetch("http://localhost:5000/craft"),
      },
      {
        path: "/category/watercolourPainting",
        element: <WatercolourPainting />,
        loader: () => fetch("http://localhost:5000/craft"),
      },
      {
        path: "/category/oilPainting",
        element: <OilPainting />,
        loader: () => fetch("http://localhost:5000/craft"),
      },
      {
        path: "/category/charcoalSketching",
        element: <CharcoalSketching />,
        loader: () => fetch("http://localhost:5000/craft"),
      },
      {
        path: "/category/cartoonDrawing",
        element: <CartoonDrawing />,
        loader: () => fetch("http://localhost:5000/craft"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
