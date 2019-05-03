import React, { Component } from "react";
import { connect } from 'react-redux';
import PixiApp from '../gameboard/pixie';
import Other from '../gameboard/other';
// import RunningBoy from '../gameboard/gameComponents/runningBoy';
import '../css/game.css';
import Test from '../gameboard/gameComponents/spines'

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
                {/* <Other /> */}
                {/* <RunningBoy /> */}
                {/* <Test /> */}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
})

export default connect(mapStateToProps)(Game);
