import React, {Component} from 'react';
import {StackNavigator}  from 'react-navigation';
import view from './view';

import{
   Text, View, StyleSheet
} from 'react-native';

export default class ProblemsNici extends Component{

    constructor (props){
        super(props);
        this.navigation = props.navigation;
    }

    static navigationOptions = {
        title:"意见反馈"
    }

    render(){
        return view(this);
    }

}