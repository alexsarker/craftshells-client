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
import MyList from "./components/MyList";
import AllItems from "./components/AllItems";
import PrivateRoute from "./Providers/PrivateRoute";

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
        path: "/allItems",
        element: <AllItems />,
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
