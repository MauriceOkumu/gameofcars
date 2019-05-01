import * as PIXI from 'pixi.js';
import React, {Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    auth: state.auth
  })
  
  class Other extends Component {
    constructor(props) {
      super(props);
      this.pixi_cnt = null;
      this.app = new PIXI.Application({width: 800, height: 600, transparent: false, antialias: true})
      this.updatePx = this.updatePx.bind(this);
      this.createTexture = this.createTexture.bind(this);
    }
    updatePx(element) {
      this.pixi_cnt = element;
      if(this.pixi_cnt && this.pixi_cnt.children.length<= 0) {
          this.pixi_cnt.appendChild(this.app.view)
      }
    }
    createTexture() {
        const quality = 256;
        const canvas = document.createElement('canvas');
        canvas.width = quality;
        canvas.height = 1;
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createLinearGradient(0,0,quality, 0);
        gradient.addColorStop(0, 'black');
        gradient.addColorStop(0.3, 'cyan');
        gradient.addColorStop(0.7, 'red');
        gradient.addColorStop(1, 'green');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, quality, 1);
        return PIXI.Texture.from(canvas)
    }

    componentDidMount() {
        const gradTexture = this.createTexture();
        const sprite = new PIXI.Sprite(gradTexture);
        sprite.position.set(100, 100);
        sprite.rotation = Math.PI / 8;
        sprite.width = 500;
        sprite.height = 50;
        this.app.stage.addChild(sprite);
    }
    render() {
      return (
        // <div>
            <div ref={this.updatePx} >

            </div>
        //   <img src={require('./sprites').default} />
         // {/* <Sun /> */}
        // </div>
      )
    }
  }
  
  // export default Other;
  export default connect(mapStateToProps)(Other);