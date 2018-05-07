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
        this.state={
            showData:[
                {title: '常见问题', data: ['如何查看维保时间','如何查看维修预约进度','如何快速保修']},
               
              ]
        }
    }

    static navigationOptions = {
        title:"帮助与反馈"
    }

    render(){
        return view(this);
    }

}