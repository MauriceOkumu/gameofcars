import React, { Component } from "react";
import { connect } from 'react-redux';
import FairyLand from '../gameboard/fairyLand';
import '../css/game.css';


class Fairy extends Component {
    constructor() {
        super();
    }
    render() {
        const{ user } = this.props.auth;
        return (
            <div id="game">
                <div id="info">
                    <h1>
                    Fairy Canvas
                    </h1>
                </div>
                <FairyLand />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
})

export default connect(mapStateToProps)(Fairy);
