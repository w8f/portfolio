import { BrowserRouter, Switch, Route } from "react-router-dom";
import Top from "./pages/Top";
import Test from "./pages/Test";

/**
 * Router ルーター
 */
export const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Top} />
          <Route exact path="/test" component={Test} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
