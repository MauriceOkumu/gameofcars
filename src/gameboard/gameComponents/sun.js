import React, { Component} from 'react';
import { Graphics } from '@inlet/react-pixi';

class Sun  extends Component {
    constructor() {
        super();
        this.state = {
            posX: -10,
            posY: 340
        }
        this.moveSun = this.moveSun.bind(this);
        this.getPosition = this.getPosition.bind(this);
    }
    componentDidMount() {
        this.props.app.ticker.add(this.moveSun);
    }

    componentWillUnmount() {
        this.props.app.ticker.remove(this.moveSun)
    }

    moveSun(delta) {
      if(this.state.posX < 1200) {
          this.setState({
              posX: this.state.posX + .5 * (delta + 0.1)
          })
      } else {
          this.setState({posX: -10})
      }
 
 
    if(this.state.posX < 600) {
      if(this.state.posY >= 50) {
        this.setState({
          posY: this.state.posY - .4 * (delta + 0.1)
      })
     }
    } else {
      if(this.state.posY <=400)
        this.setState({
          posY: this.state.posY + .4 * (delta + 0.1)
        })
    }
  }

  getPosition() {
    return {
      x: this.state.posX,
      y: this.state.posY
    };
  }

    render() {
        return (
                <Graphics
                draw={ g => {
                    g.clear()
                    g.lineStyle(0)
                    g.beginFill(0xffff40)
                    g.drawCircle(40, 0, 40)
                    g.endFill()
                }
              }
              position={this.getPosition()}
            />
        
        )
    }
}

export default Sun;