import React, { Component } from "react";
import { connect } from 'react-redux';
import * as PIXI from 'pixi.js';
import PixiApp from '../gameboard/pixie'

class Game extends Component {
    constructor() {
        super();
    }
    render() {
        const{ user } = this.props.auth;
        return (
            <div>
                <h1>
                    Game Canvas
                </h1>
                <p>{user.name}'s High Score : 0</p>
                <PixiApp />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
})

export default connect(mapStateToProps)(Game);