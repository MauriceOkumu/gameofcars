import React, { Component } from 'react';
import Obstacle from './obstacles'
import { AppConsumer } from '@inlet/react-pixi';

class ManyObstacles extends Component {
    constructor() {
        super();
        this.state = {
          posX: -10,
          posY: 340,
        }
    }
    render () {
        return (
           <Container>
               <AppConsumer>
                  {app => <Obstacle app={app}/>}
               </AppConsumer>
           </Container>
           
        )
    }
}

export default ManyObstacles;