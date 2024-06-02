import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import HomePage from "../pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);
