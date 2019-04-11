import React,{ Component } from "react";
import ChangeName from "./nameChange";
import Register from'./register';

class Welcome extends Component{
    constructor() {
        super();
        this.state = {
            user: "Initial User",
            signed: false
        }
    }
    render() {
        const { user} = this.state;
         return (
         
            <div>
              <h1>Welcome {user} Please login or register to start the game</h1>
              <ChangeName name={this.state.name}/>
              <Register />
            </div>
            
         );
    }
}

export default Welcome;
