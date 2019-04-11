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
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
             <li className="nav-item">
               <NavLink exact activeClassName="active" to="/">Welcome</NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" to="/login">Login</NavLink>
            </li>
            <li  className="nav-item">
              <NavLink activeClassName="active" to="/game">Game</NavLink>
            </li>
          </ul>
        </div>
          
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