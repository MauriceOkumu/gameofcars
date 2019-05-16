import {Sprite, Text , Container} from '@inlet/react-pixi';
import React, {Component } from 'react';
const keyboard = require('pixi.js-keyboard');
import { Move, UpdateHighScore } from './methods';
import { style } from './textStyles';

const img = require('../sprites').default;

  class RaceCar extends Component {
     constructor() {
         super();
      this. state = { 
        posX: 0,
        posY: 0,
        score: 90,
        hScore: 95,
        s:0,
        hs:null
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
      UpdateHighScore(this)
      this.setState({
        hs: (this.state.hScore / 100).toFixed()
      })
    }

    render() {
      const{ posX, posY, score,hScore, hs } = this.state
      const ScoreText = () => <Text text={`High Scores : ${hs}`} x={580} y={-350} style={style}/>
      const Score = () => <Text text={`Scores : ${score}`} x={580} y={-320} style={style}/>
      return (
        <Container x={120} y={360}>
          <Sprite image={img}
                scale={[0.4, 0.4]}
                anchor={[0.5, 0.5]}
                position={{x: posX, y: posY}}
          />
          <ScoreText />
          <Score />
        </Container>
      )
    }
  }

  export default RaceCar;

  //look into pixi-sound, pixi-keyboard, pixi-tiled, pixi-particles