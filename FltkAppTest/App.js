/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, {Component} from 'react';
// import Main from './src/config/route';


//  export default class RootApp extends Component{
//      constructor(props){
//          super(props);
//      }

//      render(){
//          return <Main/>
//      }
//  }

import TabarComponent from './src/components/tabBarComponent'
import React, {Component} from 'react';

 export default class RootApp extends Component{
     constructor(props){
         super(props);
     }

     render(){
         return <TabarComponent/>
     }
 }
