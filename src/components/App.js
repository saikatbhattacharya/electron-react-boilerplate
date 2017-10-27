import '../assets/css/App.css';
import React, { Component } from 'react';
import _ from 'lodash';
import Button from './Button'
import InputText from './InputText'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      componentsList:[]
    }
    this.onDragStop1 = this.onDragStop1.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.handleInputText = this.handleInputText.bind(this);
  }

  handleButton(){
    console.log('add Button ')
    let component = this.state.componentsList;
    component.push(<Button index={component.length + 1}
    onDragStop1={this.onDragStop1} />)
    this.setState({ componentsList:component})
   
  }

  handleInputText(){
    console.log('add InputText ')
    let component=this.state.componentsList;
    component.push(<InputText index={component.length+1} 
    onDragStop1={this.onDragStop1} />)
    this.setState({componentsList:component})
  }

  onDragStop1(index,e, d){
   console.log(index,e,d);    
  }
  
  render() {
    return (
      <div>
        <button onClick={this.handleButton}>Add Button</button>
        <button onClick={this.handleInputText}>Add Input Text</button>
        {
          _.map(this.state.componentsList, (eachComponent) => {
            return (eachComponent)
          })
        }
      </div>
    );
  }
}

export default App;
