import React, { Component } from "react";
import { connect } from 'react-redux';
import PixiApp from '../gameboard/pixie';
import '../css/game.css';


class Game extends Component {
    constructor() {
        super();
        this.state = {
            showGame: null,
            btnText: 'Start the Game'
        }
        this.revealGame = this.revealGame.bind(this)
    }
    revealGame () {
        this.setState({
            showGame: this.state.showGame ? null :true,
        })
        this.setState({
            btnText: this.state.btnText === 'Start the game' ? 'Stop the Game' :'Start the game',
        })
    }
    render() {
        const{ user } = this.props.auth;
        const { btnText} = this.state
        return (
            <div id="game">
                <div id="info">
                    <h1>
                    Game Canvas
                    </h1>
                </div>
                <button onClick={ this.revealGame}>{btnText === 'Start the game' ? 'Stop the Game' :'Start the game'}</button>
                {this.state.showGame ? <PixiApp /> : null }
                {this.state.btnText === 'Stop the Game' ? <h2>Thank you for playing</h2> : null}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
})

export default connect(mapStateToProps)(Game);
