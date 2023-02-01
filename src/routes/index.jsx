import { useRoutes } from "react-router-dom";
import { routes } from "./routes";

const Routes = () => {
  const routing = useRoutes(routes);

  return routing;
};

export default Routes;
