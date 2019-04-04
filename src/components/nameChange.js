import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import  { changeName } from "../actions/changeName";

class ChangeName extends Component {
    render() {
        return (
            <div>
                <div onClick={() => {
                    console.log("Clicked")
                    return this.props.changeName()}}>Change the name</div>
                <p>{ this.props.name}</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      name: state.name
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({changeName}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChangeName);