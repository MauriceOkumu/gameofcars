import { Stage, AppConsumer, Container , Text} from '@inlet/react-pixi';
import React, {Component } from 'react';
import { connect } from 'react-redux';
import { style } from './gameComponents/textStyles'
import Obstacle from './gameComponents/obstacles';
import Trees from './gameComponents/background2';
import Grass from './gameComponents/background1';
import Dirt from'./gameComponents/foreground1';
import Dirtier from'./gameComponents/foreground2';

class FairyLand extends Component {
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
    
  }

  render () {
    const { user } = this.props.auth;
    const { score } = this.state;
    const welcomeText = `Welcome  ${user.name}-Fairy`
    const WelcomeText = () => <Text  text={welcomeText} style={style} />
    const ScoreText = () => <Text text={`High Scores : ${score}`} x={580} style={style}/>
    return (
    <Stage width={1000} height={500} options={
      { backgroundColor:  0x1099bb , antialias: true, interactive: true ,resolution: 1}
      }>
       <Container x={0} y={0}>
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
      </Container>
      <WelcomeText />
      <ScoreText />
      <Container x={0} y={60}>
        <AppConsumer>
          {app => <Obstacle app={app} />}
        </AppConsumer>
      </Container>
  </Stage>
    )
 }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(FairyLand);