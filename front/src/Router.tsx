import { BrowserRouter, Switch, Route } from "react-router-dom";
import Top from "./components/pages/Top";
import Sample from "./components/pages/sample";

/**
 * Router ルーター
 */
export const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Top} />
          <Route exact path="/test" component={Sample} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
