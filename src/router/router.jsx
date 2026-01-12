import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import RootLayout from "../layouts/RootLayout";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      }
    ]
  }
]);