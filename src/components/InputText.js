import React, { Component } from 'react';
import Rnd from 'react-rnd';
import '../assets/css/App.css';


class InputText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 10,
      y: 50,
      width: 200,
      height: 50,
      
    }
    this.onDragStop = this.onDragStop.bind(this);
  }

  

  onDragStop(e, d){
    let x = d.x < 0 ? 0 : d.x;
    let y = d.y < 0 ? 0 : d.y;
    console.log('****** coordinates: '+ x+','+y);
    this.setState({ x, y });
    this.props.onDragStop1(this.props.index,x,y)
  }
 
  render() {
    return (
      <Rnd
        size={{ width: this.state.width, height: this.state.height }}
        position={{ x: this.state.x, y: this.state.y }}
        onDragStop={this.onDragStop}
        onResize={(e, direction, ref, delta, position) => {
          this.setState({
            width: ref.offsetWidth,
            height: ref.offsetHeight
          });
        } }
        >
        <input type="text" />
</Rnd>
    );
  }
}

export default InputText;
