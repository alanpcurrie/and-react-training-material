import Products from "pages/Products";
import App from "App";

const routes = [
  {
    path: "/",
    element: <App />,
    title: "home"
  },
  {
    path: "products",
    element: <Products />,
    title: "products"
  }
];

export default routes;
