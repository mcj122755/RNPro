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
            showCommonData:[
                {title:'常见问题', data: ['如何查看维保时间','如何查看维保时间','如何查看维修预约进度']},
                {title:'分类问题', data:[]}
              ],
            showCategroyData:[
                '登录相关','快速保修','维保单','维修单','签到打卡','零件询价'
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