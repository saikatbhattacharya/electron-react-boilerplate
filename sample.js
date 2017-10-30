import React, { Component } from 'react';
import Button from '../components/Button';
import InputText from '../components/InputText';

export default class Sample extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }

    componentWillMount(){

    }

    componentDidMount(){
        
    }

    render(){
        return(
            <div><Button id="button_1" /><InputText id="inputText_2" /><InputText id="inputText_3" /><Button id="button_4" /></div>
        );
    }
}
