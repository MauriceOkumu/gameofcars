import React, {Component} from 'react';
import { Graphics } from '@inlet/react-pixi';

class Obstacle extends Component {
    constructor() {
        super();
        this.state = {
            positionX: 1000,
            color: Math.random()*0xFFFFFF,
            size: 10 * Math.random() * 10,
            initialPosY: Math.floor(Math.random() * 81) + 300,
            speed:  Math.floor(Math.random() * (10- 2 + 1)) + 2
        }
        this.moveObstacle = this.moveObstacle.bind(this);
    }
    componentDidMount() {
        this.props.app.ticker.add(this.moveObstacle);
    }

    componentWillUnmount() {
        this.props.app.ticker.remove(this.moveObstacle)
    }
    moveObstacle(delta) {
       if(this.state.positionX <=1000 && this.state.positionX > -4) {
           this.setState({
               positionX: this.state.positionX -1  * this.state.speed
           })
       } else {
           this.setState({
               positionX: 1000
           })
       }
    }
    render() {
        const {positionX, color, size, initialPosY} = this.state;
        return (
             <Graphics
               draw={g =>
                {
                    g.clear()
                g.lineStyle(0, 0xff00ff, 1)
                g.beginFill(color)
                
                g.drawRect(0, initialPosY, size ,size) 
                g.endFill()

              }
           
            }
            position={{x: positionX}}
            />
        )
    }
}

export default Obstacle;