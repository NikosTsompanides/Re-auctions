import Home from "../containers/Home";
import Login from "../containers/Login";
import SignUp from "../containers/SignUp";

export const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/signup",
    component: SignUp,
  },
];
