import React, { Component } from "react";
import { connect } from 'react-redux';
import PixiApp from '../gameboard/pixie';
import '../css/game.css'

class Game extends Component {
    constructor() {
        super();
    }
    render() {
        const{ user } = this.props.auth;
        return (
            <div id="game">
                <div id="info">
                    <h1>
                    Game Canvas
                    </h1>
                </div>
                <PixiApp />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
})

export default connect(mapStateToProps)(Game);