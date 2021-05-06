import { BrowserRouter, Switch, Route } from "react-router-dom";
import Top from "./components/pages/Top/Top";
import Sample from "./components/pages/sample";
import Home from "./components/pages/Home/Home";
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
          <Route exact path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
