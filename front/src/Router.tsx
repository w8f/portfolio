import { BrowserRouter, Switch, Route } from "react-router-dom";
import Top from "./pages/Top";

/**
 * Router ルーター
 */
export const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Top} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
