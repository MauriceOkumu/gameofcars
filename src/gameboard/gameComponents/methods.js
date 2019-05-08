
const keyboard = require('pixi.js-keyboard');
export const Move = (classObj)=> {
    if( keyboard.isKeyDown('ArrowRight', 'KeyD') ) {
        classObj.setState({
         posX: classObj.state.posX + 1
        })
    }
    if( keyboard.isKeyDown('ArrowLeft', 'KeyA') ) {
      classObj.setState({
       posX: classObj.state.posX - 1
      })
    }
    if( keyboard.isKeyDown('ArrowUp', 'KeyA') ) {
       classObj.setState({
       posY: classObj.state.posY - 1
     })
  
   }
   if( keyboard.isKeyDown('ArrowDown', 'KeyS') ) {
    classObj.setState({
     posY: classObj.state.posY + 1
    })
   }
  }

