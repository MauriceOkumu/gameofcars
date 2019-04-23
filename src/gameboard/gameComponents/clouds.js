import React, { Component} from 'react';
import { Graphics } from '@inlet/react-pixi';

class Sun  extends Component {
    render() {
        return (
           
                <Graphics
                draw={ g => {
                    g.lineStyle(0)
                    g.beginFill(0xffffff, 0.5)
                    g.drawCircle(195, 60, 30)
                    g.drawCircle(250, 60, 40)
                    g.drawEllipse(250, 100, 90, 50)
                    g.endFill()
                }
            }
                />
         
            
        )
    }
}

export default Sun;