import React, { Component } from 'react';
import { Graphics } from '@inlet/react-pixi';


class Road extends Component {
    render() {
        return (
            <Graphics
            draw={g => {
            g.beginFill(0x141414)
            g.drawRect(0, 350, 1100, 150)
            g.endFill()

            g.lineStyle(0, 0xff00ff, 1)
            // g.beginFill(0xffffff)
            // for(let i = 50; i < 1000; i+=200) {
            //     g.drawRect(i, 385, 100, 5) 
            //     g.drawRect(i, 430, 100, 5) 
            // }
            // g.endFill()
            }
            
        }  
        />
        )
    }
}

export default Road;