import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/homepage/homePage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);
