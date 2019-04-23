import React, { Component } from 'react';
import { Graphics } from '@inlet/react-pixi';

class Road extends Component {
    render() {
        return (
            <Graphics
            draw={g => {
            g.lineStyle(2, 0xff00ff, 1)
            g.beginFill(0x141414, 0.25)
            g.drawRect(0, 350, 1000, 150)
            g.endFill()

            g.lineStyle(0, 0xff00ff, 1)
            g.beginFill(0xffffff, 0.25)
            for(let i = 50; i < 1000; i+=200) {
                g.drawRect(i, 410, 100, 15) 
            }
            g.endFill()
            }
        } />
        )
    }
}

export default Road;