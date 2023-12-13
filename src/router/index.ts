import React, {Component} from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "../views/Home";
import Intelligence from "../views/Intelligence";


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: Home(),
    },
    {
      path: "intelligence",
      element: Intelligence(),
    },
  ]
);

export default router
