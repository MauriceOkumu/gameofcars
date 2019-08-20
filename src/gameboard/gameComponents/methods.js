const keyboard = require('pixi.js-keyboard');
export const Move = (classObj)=> {
     
    let num = (+classObj.state.score +.5).toFixed() 

     classObj.setState({
      score: num 
    })
    if( keyboard.isKeyDown('ArrowRight', 'KeyD') ) {
        classObj.setState({
         posX: classObj.state.posX + 2
        })
    }
    if( keyboard.isKeyDown('ArrowLeft', 'KeyA') ) {
      classObj.setState({
       posX: classObj.state.posX - 2
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
  let num = (+obj.state.score +.5 ).toFixed() 
  if(obj.state.score >= obj.state.hScore){
    obj.setState({
      hScore: num
   })
  }
}
