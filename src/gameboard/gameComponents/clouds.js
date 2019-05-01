import React, { Component} from 'react';
import { Graphics } from '@inlet/react-pixi';

class Clouds  extends Component {
    constructor() {
        super();
        this.state = {
            x : 0,
        }
        this.moveClouds = this.moveClouds.bind(this);
    }

    componentDidMount() {
         this.props.app.ticker.add(this.moveClouds)
    }

    componentWillUnmount() {
        this.props.app.ticker.remove(this.moveClouds)
    }

    moveClouds(delta) {
     if(this.state.x < 1200) {
        this.setState({
            x: this.state.x + 1 * delta
           })
       } else {
         this.setState({x: -10})
      }
    }

    render() {
        return (
           
                <Graphics
                draw={ g => {
                    g.clear()
                    g.lineStyle(0)
                    g.beginFill(0xffffff)
                    g.drawCircle( -50, 80, 30)
                    g.drawCircle(  0, 80, 40)
                    g.drawEllipse( 0, 120, 90, 50)
                    g.endFill()
                }
            }
               position={{x: this.state.x }}
              />
         
            
        )
    }
}

export default Clouds;