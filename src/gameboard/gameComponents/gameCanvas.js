import * as PIXI from 'pixi.js';
import React, {Component } from 'react';

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

const basicText = new PIXI.Text('Car game for all people\'s enjoyment', style);
stage.addChild(basicText);

const animate = () => {
    requestAnimationFrame(animate)
     renderer.render(stage)
}


class GameCanvas extends Component {
    componentDidMount() {
        document.body.appendChild(renderer.view)
    }
    render() {
        console.log(this)
        return (
            <div >
              {animate() }
            </div>
        )
    }
}
export default GameCanvas;