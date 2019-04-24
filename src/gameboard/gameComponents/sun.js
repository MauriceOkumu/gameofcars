import React, { Component} from 'react';
import { Graphics } from '@inlet/react-pixi';

class Sun  extends Component {
    render() {
        return (
           
                <Graphics
                draw={ g => {
                    g.lineStyle(0)
                    g.beginFill(0xffff40)
                    g.drawCircle(400, 60, 40)
                    g.endFill()
                }
            }
                />
         
            
        )
    }
}

export default Sun;