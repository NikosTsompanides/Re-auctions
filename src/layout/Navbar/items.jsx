import { ShoppingCart } from "../../components/misc/icons";

export const navbarItems = [
  {
    title: "Home",
    link: "/",
    exact: true,
  },
  {
    title: "Shop",
    link: "/shop",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
  {
    title: "Cart",
    link: "/shopping-cart",
    icon: <ShoppingCart size={18} />,
  },
];
