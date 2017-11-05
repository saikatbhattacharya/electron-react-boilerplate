import React, { Component } from 'react';
import Rnd from 'react-rnd';
import '../assets/css/App.css';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 10,
      y: 50,
      width: 200,
      height: 50,
    }
    this.onDragStop = this.onDragStop.bind(this);
    this.onResizeStop = this.onResizeStop.bind(this);
  }

  onResizeStop(e, direction, ref, delta, position){
    console.log('ikkada',e, direction, ref, delta, position);
          this.setState({
            width: ref.offsetWidth,
            height: ref.offsetHeight
          });
    this.props.onRsizeFunc(this.props.index, ref.offsetWidth, ref.offsetHeight)      

  }

  onDragStop(e, d){
    let x = d.x < 0 ? 0 : d.x;
    let y = d.y < 0 ? 0 : d.y;
    console.log('****** coordinates: '+ x+','+y);
    this.setState({ x, y });
    this.props.onDragStopFunc(this.props.index,x,y)
  }
 
  render() {
    return (
      <Rnd
        size={{ width: this.state.width, height: this.state.height }}
        position={{ x: this.state.x, y: this.state.y }}
        onDragStop={this.onDragStop}
        onResize={this.onResizeStop}
        >
        <div className="sampleBody">
          <h3 className="sampleText">Drag me!</h3>
        </div>
</Rnd>
    );
  }
}

export default Button;
