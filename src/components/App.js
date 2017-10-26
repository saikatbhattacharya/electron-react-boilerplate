import '../assets/css/App.css';
import React, { Component } from 'react';
import Rnd from 'react-rnd';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 10,
      y: 50,
      width: 200,
      height: 50,
      x2: 10,
      y2: 50,
      width2: 200,
      height2: 50
    }
    this.onDragStop = this.onDragStop.bind(this);
    this.onDragStop2 = this.onDragStop2.bind(this);
  }

  onDragStop(e, d){
    let x = d.x < 0 ? 0 : d.x;
    let y = d.y < 0 ? 0 : d.y;
    console.log('****** coordinates: '+ x+','+y);
    this.setState({ x, y });
  }
  onDragStop2(e, d){
    let x2 = d.x < 0 ? 0 : d.x;
    let y2 = d.y < 0 ? 0 : d.y;
    console.log('****** coordinates 2: '+ x2+','+y2);
    this.setState({ x2, y2 });
  }
  render() {
    return (
      <div>
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
        <div className="sampleBody">
          <h3 className="sampleText">Drag me!</h3>
        </div>
      </Rnd>
      <Rnd
        size={{ width: this.state.width2, height: this.state.height2 }}
        position={{ x: this.state.x2, y: this.state.y2 }}
        onDragStop={this.onDragStop2}
        onResize={(e, direction, ref, delta, position) => {
          this.setState({
            width2: ref.offsetWidth,
            height2: ref.offsetHeight
          });
        } }
        >
        <div className="sampleBody">
          <h3 className="sampleText">Drag me 2!</h3>
        </div>
      </Rnd>
</div>
    );
  }
}

export default App;
