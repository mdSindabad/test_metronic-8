import { Route, Switch } from "react-router-dom";
import { AppRoutes } from "../config/AppRoutes";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { CreateLink } from "./pages/links/CreateLink/CreateLink";

export const AuthenicatedApp = () => {
  return (
    <Switch>
      <Route exact path={AppRoutes.DASHBOARD} component={Dashboard} />
      <Route exact path={AppRoutes.CREATE_LINK} component={CreateLink} />
    </Switch>
  );
};
