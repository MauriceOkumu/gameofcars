import {Sprite, Graphics } from '@inlet/react-pixi';
import React, {Component } from 'react';

const img = require('../sprites').default;

  class RaceCar extends Component {
     constructor() {
         super();
    //   this. state = { rotation: 0 }
    //   this.tick = this.tick.bind(this)
     }

    componentDidMount() {
    //   this.props.app.ticker.add(this.tick)
     
    }

    componentWillUnmount() {
    //   this.props.app.ticker.remove(this.tick)
    }

    tick (delta)  {
      this.setState(state => ({
        // rotation: state.rotation + 0.1 * delta
      }))
    }

    render() {
      return (
        <Sprite image={img}
                scale={[0.4, 0.4]}
                anchor={[0.5, 0.5]}
                mask={Graphics.mask} 
        />
      )
    }
  }

  export default RaceCar;

  //look into pixi-sound, pixi-keyboard, pixi-tiled, pixi-particles