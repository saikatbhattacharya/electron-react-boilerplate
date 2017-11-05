import '../assets/css/App.css';
import React, { Component } from 'react';
import _ from 'lodash';
import {ipcRenderer} from 'electron';
import Button from './Button'
import InputText from './InputText'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      componentsList:[],
      componentRegister:[]
    }
    this.onDragStopFunc = this.onDragStopFunc.bind(this);
    this.onRsizeFunc = this.onRsizeFunc.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.handleInputText = this.handleInputText.bind(this);
    this.handleExport = this.handleExport.bind(this);
  }

  handleExport(){
    console.log('yaha',this.state.componentRegister);
    ipcRenderer.send('generate-file', this.state.componentRegister);
  }

  handleButton(){
    console.log('add Button ')
    let component = this.state.componentsList;
    let componentRegister = this.state.componentRegister;
    let index = component.length + 1;
    component.push(<Button index={index}
    onDragStopFunc={this.onDragStopFunc}
    onRsizeFunc={this.onRsizeFunc} />)
    componentRegister.push({type: 'button', id: 'button_'+index, position: [0, 0], dimensions: [200,50]});
    this.setState({ componentsList:component, componentRegister})
   
  }

  handleInputText(){
    console.log('add InputText ')
    let component=this.state.componentsList;
    let componentRegister = this.state.componentRegister;
    let index = component.length + 1;
    component.push(<InputText index={index} 
    onDragStopFunc={this.onDragStopFunc} />)
    componentRegister.push({type: 'inputText', id: 'inputText_'+index, position: [0, 0], dimensions: []});  
    this.setState({componentsList:component, componentRegister})
  }

  onDragStopFunc(index,e, d){
    console.log('dragstop',this.state.componentRegister[index-1],index)
     let a=this.state.componentRegister[index-1];
     a.position[0]=e;
     a.position[1]=d;

   console.log(index,e,d,a);    
  }

  onRsizeFunc(index,width,height){
    console.log('dragstop',this.state.componentRegister[index-1],index)
     let a=this.state.componentRegister[index-1];
     a.dimensions[0]=width;
     a.dimensions[1]=height;
     console.log('widthHiegth',index,width,height);
  }
  
  render() {
    console.log('******* components: ', this.state.componentRegister);
    return (
      <div>
        <button onClick={this.handleButton}>Add Button</button>
        <button onClick={this.handleInputText}>Add Input Text</button>
        <button onClick={this.handleExport}>Export</button>
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
