"use strict";
import React,{ Component } from "react";
import axios from 'axios';
import { connect } from 'react-redux';
import '../css/app.css';

class Welcome extends Component{
    constructor() {
        super();
        this.state = {
           data: []
        }
    }
    componentDidMount() {
        this.callBackendApi()
       
    }
    callBackendApi  () {
        axios.get('http://localhost:5000/users/')
        .then(data => {
            this.setState({data: data.data})
           })
    }
    render() {
        const { data} = this.state;
        const{user} = this.props.auth;
        // const  users = data.map((user, key) => <li key={key}>{user.name}</li>)
         return (
         
            <div>
                {!user.name && <h1>Welcome Guest Please login or register to start the game</h1>}
              {user.name && <h1>Welcome  {user.name} enjoy the game</h1>}
              {/* <h1>All registered users</h1> */}
              <ul>
                  {/* { users } */}
              </ul>
            </div>
            
         );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
})

export default connect(mapStateToProps)(Welcome)
