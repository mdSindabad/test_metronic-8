import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthenicatedApp } from "./app/AuthenicatedApp";
import { Layout } from "./app/components/common/Layout";
import { SignInPage } from "./app/pages/auth/SignIn";
import StepperForms from "./app/pages/stepperForms/StepperForms";
import { AppRoutes } from "./config/AppRoutes";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoutes.SIGN_IN} component={SignInPage} />
        <Layout>
          <AuthenicatedApp />
        </Layout>


      </Switch>
      {/**   <Layout>

       <Dashboard/>

       </Layout>*/}
      <StepperForms />
    </BrowserRouter>
  );
}

export default App;
