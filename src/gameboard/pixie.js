import { Stage, Sprite, AppConsumer, Container , Text} from '@inlet/react-pixi';
import * as PIXI from 'pixi.js';
import React, {Component } from 'react';
import { connect } from 'react-redux';
//import * as car from './sprites';
import { style } from './gameComponents/textStyles'
import RotatingBunny from './gameComponents/bunny';

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;


class PixiApp extends Component {
  render () {
    const { user } = this.props.auth;
    const text = `Welcome ${user.name}`
    const WelcomeText = () => <Text  text={text} style={style} />
    const ScoreText = () => <Text text="High Scores : (placeholder) 0" x={580} style={style}/>
  
    return (
    <Stage width={1000} height={500} options={{ backgroundColor:  0x1099bb }}>
    <Container x={150} y={150}>
      <AppConsumer>
        {app => <RotatingBunny app={app}/>}
      </AppConsumer>
    </Container>
    <WelcomeText />
    <ScoreText />
  </Stage>
    )
 }
}

const mapStateToProps = state => ({
  auth: state.auth
})
export default connect(mapStateToProps)(PixiApp);