import * as PIXI from 'pixi.js'
// const boy = require('../pixies/spineboy.json');
import { Spine , Stage, Sprite} from '@inlet/react-pixi';

import React from 'react';

// console.log('../pixies/spineboy.json------->', boy)



const Test =() => {
    return (
   <Stage options={
    { backgroundColor:  0x1099bb}}>
      {/* <Spine >
      
      </Spine> */}
      <Sprite image={require('../sprites/beach.png')} x={20} y={20}/>
   </Stage>
   
     )
    }

    export default Test;