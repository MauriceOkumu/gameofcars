import React, { Component} from 'react';
import { Graphics } from '@inlet/react-pixi';

const ticker = new PIXI.ticker.Ticker();
 ticker.stop();
ticker.start();

class Clouds  extends Component {
    constructor() {
        super();
        this.state = {
            x : 0,
        }
        this.animate = this.animate.bind(this);
    }

    componentDidMount() {
         ticker.add(this.animate)
    }

    animate() {
     if(this.state.x < 1200) {
        this.setState({
            x: this.state.x + 1
           })
       } else {
         this.setState({x: 0})
      }
    }

    render() {
        return (
           
                <Graphics
                draw={ g => {
                    g.lineStyle(0)
                    g.beginFill(0xffffff)
                    g.drawCircle( -50, 80, 30)
                    g.drawCircle(  0, 80, 40)
                    g.drawEllipse( 0, 120, 90, 50)
                    g.endFill()
                }
            }
               position={{x: this.state.x }}/>
         
            
        )
    }
}

export default Clouds;