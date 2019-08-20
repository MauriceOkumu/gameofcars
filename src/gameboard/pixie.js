import { Stage, Sprite, AppConsumer, Container , Text} from '@inlet/react-pixi';
import React, {Component } from 'react';
import { connect } from 'react-redux';
import { style } from './gameComponents/textStyles'
import Sun from './gameComponents/sun';
import Road from './gameComponents/road';
import Clouds from './gameComponents/clouds';
import Obstacle from './gameComponents/obstacles';
import RaceCar from './gameComponents/raceCar';
import MixedTrees from './gameComponents/treebackground';
import Palms from './gameComponents/palms';

class PixiApp extends Component {
  constructor() {
    super();
    this.state = {
      posX: -10,
      posY: 340,
      obsArray: []
    
    }
    this.releaseObstacles = this.releaseObstacles.bind(this)
  }
  updateScore() {
     let score = Math.round(requestAnimationFrame(this.updateScore) / 10000 );
     this.setState({
       score
     })
  }
  componentDidMount() {
  let me = this;
  // this.setinterval = setInterval(() => {
    //  let b = <Container x={0} y={60}>
    //   <AppConsumer>
    //     {app => <Obstacle app={app} />}
    //   </AppConsumer>
    // </Container>
    // // console.log('Inside Length =>',this.state.obsArray.length)
    // if(me.state.obsArray.length < 3) {
    // me.setState({obsArray: this.state.obsArray.concat(b)})} else {
    //   me.setState({ obsArray: []})
    // }
    // console.log('App => ',b)
  // }, 2000)
 
  }
  componentWillUnmount() {
  //  clearInterval(this.setinterval)
  }
  releaseObstacles() {
    // return this.state.obsArray[0]
    let arr = []
    let keys = 0
    let b = <Container x={0} y={60} key={keys++}>
      <AppConsumer>
        {app => <Obstacle app={app} />}
      </AppConsumer>
    </Container>
       arr.push(b)
    //  this.setinterval = setInterval(() => {
      
      console.log(arr.length)
    // }, 1000)
    return arr;
  }

  render () {
    const { user } = this.props.auth;
    const welcomeText = `Welcome  ${user.name}`
    const WelcomeText = () => <Text  text={welcomeText} style={style} />
    
    return (
    <Stage width={1000} height={500} options={
      { backgroundColor:  0x1099bb , antialias: true, interactive: true ,resolution: 1}
      }>
      <Container x={0} y={0}>
        <AppConsumer>
          {app => <Sun app={app} />}
        </AppConsumer>
      </Container> 
      <Container x={0} y={0}>
        <AppConsumer>
          {app => <Clouds app={app} />}
        </AppConsumer>
      </Container> 
      <Container x={40} y={190}>
        <AppConsumer>
          {app => <MixedTrees app={app}/>}
        </AppConsumer>
      </Container>
      <Container x={440} y={190}>
        <AppConsumer>
          {app => <MixedTrees app={app}/>}
        </AppConsumer>
      </Container>
      <Container x={40} y={120}>
        <AppConsumer>
          {app => <Palms app={app}/>}
        </AppConsumer>
      </Container>
      <Container x={640} y={120}>
        <AppConsumer>
          {app => <Palms app={app}/>}
        </AppConsumer>
      </Container>
      <WelcomeText />
       <Road />
      
       {this.releaseObstacles()}
       
       
      <Container >      
        <AppConsumer>
          {app => <RaceCar app={app} />}
        </AppConsumer>
      </Container>
  </Stage>
    )
 }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(PixiApp);