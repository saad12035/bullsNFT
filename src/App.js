import React from "react";
import Home from "./pages/homePage/homepage";
import {BrowserRouter,Switch,Route} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"}>
            <Home/>
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
