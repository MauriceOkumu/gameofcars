import {Sprite, Graphics } from '@inlet/react-pixi';
import React, {Component } from 'react';
const keyboard = require('pixi.js-keyboard');
const Mouse = require('pixi.js-mouse');
import { Move } from './methods';

const img = require('../sprites').default;

  class RaceCar extends Component {
     constructor() {
         super();
      this. state = { 
        rotation: 0 ,
        posX: 0,
        posY: 0
      }
      this.tick = this.tick.bind(this)
     }

    componentDidMount() {
      this.props.app.ticker.add(this.tick)
    }

    componentWillUnmount() {
      this.props.app.ticker.remove(this.tick)
    }

    tick (delta)  {
      keyboard.update()
      
      Move(this)
    }

    render() {
      const{ posX, posY, rotation } = this.state
      return (
        <Sprite image={img}
                scale={[0.4, 0.4]}
                anchor={[0.5, 0.5]}
                rotation={rotation}
                position={{x: posX, y: posY}}
        />
      )
    }
  }

  export default RaceCar;

  //look into pixi-sound, pixi-keyboard, pixi-tiled, pixi-particles