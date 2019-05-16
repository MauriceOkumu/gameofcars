import React, { Component } from 'react';
import Obstacle from './obstacles'

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
           <Obstacle />
        )
    }
}

export default ManyObstacles;