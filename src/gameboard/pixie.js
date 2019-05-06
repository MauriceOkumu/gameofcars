import { Stage, Sprite, AppConsumer, Container , Text} from '@inlet/react-pixi';
import * as PIXI from '@inlet/react-pixi';
import React, {Component } from 'react';
import { connect } from 'react-redux';
import * as car from './sprites';
import { style } from './gameComponents/textStyles'
import RotatingBunny from './gameComponents/bunny';
import Sun from './gameComponents/sun';
import Road from './gameComponents/road';
import Clouds from './gameComponents/clouds';
import Obstacle from './gameComponents/obstacles';
import RaceCar from './gameComponents/raceCar';
import Trees from './gameComponents/background2';
import Grass from './gameComponents/background1';
import Dirt from'./gameComponents/foreground1';
import Dirtier from'./gameComponents/foreground2';
import MixedTrees from './gameComponents/treebackground';
import Mountain from './gameComponents/mountainbackground';
import Palms from './gameComponents/palms';

// PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

// new PIXI.spine.Spine()
class PixiApp extends Component {
  constructor() {
    super();
    this.state = {
      posX: -10,
      posY: 340,
      score: 0
    }
    this.updateScore = this.updateScore.bind(this);
  }
  updateScore() {
     let score = Math.round(requestAnimationFrame(this.updateScore) / 100 );
     this.setState({
       score
     })
  }
  componentDidMount() {
    // this.updateScore();
    console.log('Spine---------->',PIXI)
  }

  render () {
    const { user } = this.props.auth;
    const { score } = this.state;
    const welcomeText = `Welcome  ${user.name}`
    const WelcomeText = () => <Text  text={welcomeText} style={style} />
    const ScoreText = () => <Text text={`High Scores : ${score}`} x={580} style={style}/>
    const{ posX, posY } = this.state;
    console.log('Pixiapp re-Rendered')
    return (
    <Stage width={1000} height={500} options={
      { backgroundColor:  0x1099bb , antialias: true, interactive: true ,resolution: 1}
      }>
       {/* <Container x={0} y={0}>
        <AppConsumer>
          {app => <Trees app={app} />}
        </AppConsumer>
      </Container>
      <Container x={0} y={0}>
        <AppConsumer>
          {app => <Grass app={app} />}
        </AppConsumer>
      </Container>
      <Container x={0} y={0}>
        <AppConsumer>
          {app => <Dirt app={app} />}
        </AppConsumer>
      </Container>
      <Container x={0} y={0}>
        <AppConsumer>
          {app => <Dirtier app={app} />}
        </AppConsumer>
      </Container> */}
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
      <ScoreText />
       <Road />
      <Container x={0} y={60}>
        <AppConsumer>
          {app => <Obstacle app={app} />}
        </AppConsumer>
      </Container>
      <Container x={120} y={360}>
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