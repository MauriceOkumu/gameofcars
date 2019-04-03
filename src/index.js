import React,{ Component } from "react";
import ReactDOM from "react-dom";

class Welcome extends React.Component{
    render() {
         return (
         <h1>The home of racing cars</h1>
         );
    }
}
ReactDOM.render(<Welcome />, document.getElementById("app"));