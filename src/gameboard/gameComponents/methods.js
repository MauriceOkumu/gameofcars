
const keyboard = require('pixi.js-keyboard');
export const Move = (classObj)=> {
  classObj.setState({
    score: classObj.state.score +.1
  })
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
     posY: classObj.state.posY + 2
    })
   }
  }

export const UpdateHighScore = (obj) => {
  if(obj.state.score >= obj.state.hScore){
    obj.setState({
      hScore: obj.state.score 
   })
  }
}
