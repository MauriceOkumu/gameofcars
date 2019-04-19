import * as PIXI from 'pixi.js';
import React, {Component } from 'react';
import { connect } from 'react-redux';

const renderer = PIXI.autoDetectRenderer(800, 600, {
    backgroundColor: 0x1099bb
})


const stage = new PIXI.Container();
const style = {
    fontFamily : 'bold italic 36px Arial',
    fill : '#F7EDCA',
    stroke : '#4a1850',
    strokeThickness : 5,
    dropShadow : true,
    dropShadowColor : '#000000',
    dropShadowAngle : Math.PI / 6,
    dropShadowDistance : 6,
    wordWrap : true,
    wordWrapWidth : 440
};


const animate = () => {
    requestAnimationFrame(animate)
     renderer.render(stage)
}


class GameCanvas extends Component {
   
    componentDidMount() {
        document.body.appendChild(renderer.view)
    }
    render() {
        const { user } = this.props.auth;

        const basicText = new PIXI.Text(`Car game for ${user.name}'s enjoyment`, style);
        const scoresText = new PIXI.Text('High Scores : 0', style);
        scoresText.x = 600;
        stage.addChild(basicText);
        stage.addChild(scoresText);
        return (
            <div >
              {animate() }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps)(GameCanvas);