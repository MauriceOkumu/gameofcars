import { Stage, Sprite } from '@inlet/react-pixi';
import React, {Component } from 'react';
import Rectangle from './gameComponents/rectangle'

  //import car from './sprites/index';
  //console.log('Car.............',car)

const PixiApp = () => {
   return (
    <Stage>
      {/* { <Sprite image={car} x={100} y={100}/> } */}
      <Rectangle x={100} y={100} width={300} height={200} fill={0xff0000} />
    </Stage>
   ) 
}

export default PixiApp;