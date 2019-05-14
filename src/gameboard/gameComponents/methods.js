const keyboard = require('pixi.js-keyboard');
export const Move = (classObj)=> {
     
    let num = (+classObj.state.score +.01).toFixed(2) 

     classObj.setState({
      score: num
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
  let num = (+obj.state.score +.01).toFixed(2) 
  if(obj.state.score >= obj.state.hScore){
    obj.setState({
      hScore: num
   })
  }
}
