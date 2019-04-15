import React ,{Component }from 'react';
import { BrowserRouter , Route, NavLink, Switch} from 'react-router-dom';
import { connect } from 'react-redux';;
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import Welcome from '../components/app';
import Login from '../components/login';
import Game from '../components/game';
import Register from '../components/register';
import { logoutUser } from '../actions/authentication'
import "../css/routes.css";



class Allroutes extends Component {
  onLogout (e) {
    this.props.logoutUser(this.props.history)
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <div>
        <ul className="navbar-nav ml-auto">
        <li  className="nav-item">
              <NavLink activeClassName="active" to="/game">Game</NavLink>
        </li>
        <li  className="nav-item">
          <NavLink activeClassName="active"  onClick={this.onLogout.bind(this)} to="/">Logout </NavLink>
        </li>
      </ul>
      </div>
    )

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
             <li className="nav-item">
               <NavLink exact activeClassName="active" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" to="/login">Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" to="/add">Register</NavLink>
            </li>
          </ul>
    )
    return (
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse">
          {isAuthenticated ? authLinks : guestLinks}
        </div>
          
      </nav>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/add" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route  path="/game" component={Game} />
      </Switch>
    </BrowserRouter>
    )
  }
}

Allroutes.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = dispatch => bindActionCreators({logoutUser}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps) (Allroutes);