import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import HomePage from "../pages/Home/HomePage";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import RoomDetails from "../pages/RoomDetails/RoomDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "room/:id",
        element: <RoomDetails />,
      },
      {
        path: "room/:id",
        element: <RoomDetails />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "sign-up",
    element: <SignUp />,
  },
]);
