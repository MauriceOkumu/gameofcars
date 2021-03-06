import React, {Component } from 'react';
import { Sprite } from '@inlet/react-pixi';

  class Palms extends Component {
    constructor(props) {
      super(props);
      this.state = {
          posX:1000,
          posY: -40
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
             <Sprite image={require('../../../static/sprites/palms.png')} 
                position={{
                  x: this.state.posX,
                  y: this.state.posY
                }} 
                anchor={[0, 0.1]}/> 
      )
    }
  }
  
  export default Palms;

  