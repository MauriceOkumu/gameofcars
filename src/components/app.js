import React,{ Component } from "react";
import ChangeName from "./nameChange";

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
              <h1>Welcome {user} Please login to start the game</h1>
              <ChangeName name={this.state.name}/>
            </div>
            
         );
    }
}

export default Welcome;
