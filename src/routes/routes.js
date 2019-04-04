import React from "react";
import { BrowserRouter , Route, NavLink, Switch} from "react-router-dom";
import { Provider } from "react-redux";
import store from "../reduxStore/store"

import Welcome from "../components/app";
import Login from "../components/login";
import Game from "../components/game";
import "./routes.css";

const Allroutes = (
    <Provider store={ store }>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <NavLink exact activeClassName="active" to="/">Welcome</NavLink>
           </li>
           <li>
             <NavLink activeClassName="active" to="/login">Login</NavLink>
           </li>
           <li>
             <NavLink activeClassName="active" to="/game">Game</NavLink>
           </li>
         </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/login" component={Login} />
        <Route path="/game" component={Game} />
      </Switch>
    </BrowserRouter>
  </Provider>
)

export default Allroutes;