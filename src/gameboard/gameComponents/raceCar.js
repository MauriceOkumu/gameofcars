import {Sprite, Graphics } from '@inlet/react-pixi';
import React, {Component } from 'react';
const keyboard = require('pixi.js-keyboard');
const Mouse = require('pixi.js-mouse');

const img = require('../sprites').default;

  class RaceCar extends Component {
     constructor() {
         super();
      this. state = { rotation: 0 }
      this.tick = this.tick.bind(this)
      this.moveCar = this.moveCar.bind(this)
     }

    componentDidMount() {
      this.props.app.ticker.add(this.tick)
       keyboard.update();
     
    }
    moveCar() {
      if( keyboard.isKeyDown('ArrowRight', 'KeyD') ) {
          this.setState({
           rotation: this.state.rotation + .1
          })
        
      }
    }

    componentWillUnmount() {
      this.props.app.ticker.remove(this.tick)
    }

    tick (delta)  {
      keyboard.update()
      // this.setState(state => ({
      //   rotation: state.rotation + 0.01 
      // }))
      this.moveCar();
    }

    render() {
      return (
        <Sprite image={img}
                scale={[0.4, 0.4]}
                anchor={[0.5, 0.5]}
                rotation={this.state.rotation}
        />
      )
    }
  }

  export default RaceCar;

  //look into pixi-sound, pixi-keyboard, pixi-tiled, pixi-particles