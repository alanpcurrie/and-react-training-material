import { Route, Routes } from "react-router-dom";
import routes from "router/routes";

const Router = () => {
  const pageRoutes = routes.map(({ path, title, element }, index) => {
    return (
      <Route
        key={`$route-${title}-${index}`}
        path={`/${path}`}
        element={element}
      />
    );
  });
  return <Routes>{pageRoutes}</Routes>;
};

export default Router;
