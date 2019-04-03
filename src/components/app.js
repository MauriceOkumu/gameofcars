import React,{ Component } from "react";

class Welcome extends Component{
    constructor() {
        super();
        this.state = {
            user: "Maurice",
            signed: false
        }
    }
    render() {
        const { user} = this.state;
         return (
         <h1>Welcome {user} Please login to start the game</h1>
         );
    }
}

export default Welcome;