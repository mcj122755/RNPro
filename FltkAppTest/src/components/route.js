import React from 'react';
import {StackNavigator} from 'react-navigation';
import TabarComponent from './src/components/tabBarComponent';
import {
    View,
    Image,
    StyleSheet,
   } from 'react-native';

const ANavigation = StackNavigator(
    {
        TabarComponent:{
            screen:TabarComponent
        }
    }
);



export default class AppNavigation extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <ANavigation />
        );
    }
}