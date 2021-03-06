import React, {Component } from 'react';
import { Sprite } from '@inlet/react-pixi';

class Dirt extends Component {
    constructor(props) {
      super(props);
      this.state = {
          posX: 1100,
          posY: 380
      }
      this.moveBackGround = this.moveBackGround.bind(this);
    }

    componentDidMount() {
      this.props.app.ticker.add(this.moveBackGround)
    }
    moveBackGround(delta) {
        this.setState({
            posX: this.state.posX -2* delta
        })
        if(this.state.posX < -1300) {
            this.setState({
                posX: 1000 
            })
        }
    }
   
    render() {
      return (
      
             <Sprite image={require('../../../static/sprites/iP4_ground.png')} 
            position={{
                x: this.state.posX,
                y: this.state.posY
            }} 
            anchor={[0, 0.1]}/>
      )
    }
  }
  
  export default Dirt;

  