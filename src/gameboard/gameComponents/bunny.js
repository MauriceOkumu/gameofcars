import {Sprite } from '@inlet/react-pixi';
import React, {Component } from 'react';
const img = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png';
// const img = require('../sprites').default;
console.log('img---------',img)

  class RotatingBunny extends Component {
     constructor() {
         super();
      this. state = { rotation: 0 }
      this.tick = this.tick.bind(this)
     }

    componentDidMount() {
      this.props.app.ticker.add(this.tick)
    }

    componentWillUnmount() {
      this.props.app.ticker.remove(this.tick)
    }

    tick (delta)  {
      this.setState(state => ({
        rotation: state.rotation + 0.1 * delta
      }))
    }

    render() {
      return (
        <Sprite image={img}
                scale={[4, 4]}
                rotation={this.state.rotation}
                anchor={[0.5, 0.5]} />
      )
    }
  }

  export default RotatingBunny;