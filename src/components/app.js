"use strict";
import React,{ Component } from "react";
import ChangeName from "./nameChange";
import axios from 'axios';

class Welcome extends Component{
    constructor() {
        super();
        this.state = {
            user: "Initial User",
            name:"maurie",
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
        const { user, data} = this.state;
        const  users = data.map((user, key) => <li key={key}>{user.name}</li>)
         return (
         
            <div>
              <h1>Welcome {user} Please login or register to start the game</h1>
              <ChangeName name={this.state.name}/>
              <p>{this.state.name}</p>
              <ul>
                  { users }
              </ul>
            </div>
            
         );
    }
}

export default Welcome;
