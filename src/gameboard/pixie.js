// import { Stage, Sprite } from '@inlet/react-pixi';
import React, {Component } from 'react';
//import Rectangle from './gameComponents/rectangle';
//import car from './sprites';
// import { stage } from './gameComponents/rectangle';
import GameCanvas from './gameComponents/gameCanvas'
// document.getElementById("game").appendChild(renderer.view)

// console.log('Car.............', car)
const PixiApp = () => {
   return (
  <div >
       <GameCanvas />
  </div>
    
   ) 
}

export default PixiApp;