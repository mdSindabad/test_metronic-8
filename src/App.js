import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthenicatedApp } from "./app/AuthenicatedApp";
import { Layout } from "./app/components/common/Layout";
import { SignInPage } from "./app/pages/auth/SignIn";
import { AppRoutes } from "./config/AppRoutes";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoutes.SIGN_IN} component={SignInPage} />
        <Layout>
          <AuthenicatedApp/>
        </Layout>
        
        
      </Switch>
      {/**   <Layout>

       <Dashboard/>

       </Layout>*/}
    </BrowserRouter>
  );
}

export default App;
