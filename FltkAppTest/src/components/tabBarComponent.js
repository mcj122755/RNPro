
import  React,{Component} from 'react';
import  TabNavigator from 'react-native-tab-navigator';
import ProblemsNici from  '../module/mineModule/feedBack/screens/ProblemsNici';
import ProblemsFeedBack from  '../module/mineModule/feedBack/screens/ProblemsFeedBack';
import {
 View,
 Image,
 StyleSheet,
} from 'react-native';

const tab_nor_1 = require('../assets/eleme.png');
const tab_sel_1 = require('../assets/eleme_gray.png');
const tab_nor_2 = require('../assets/meituan.png');
const tab_sel_2 = require('../assets/meituan_gray.png');

export default class TabBarComponet extends Component{
    constructor(props){
        super(props);
        this.state= {
            selectedTab:'home',
        }
    }
    render(){
        return(
            <View style={styles.contaner}>
                <TabNavigator tabBarStyle={styles.tab}>
                    <TabNavigator.Item 
                    selected={this.state.selectedTab==='home'} 
                    title="home" 
                    renderIcon={()=> <Image source={tab_sel_1} style={styles.tabIcon}/>} 
                    renderSelectedIcon={()=> <Image source={tab_nor_1} style={styles.tabIcon}/>}
                    badgeText='1'
                    onPress={()=> this.setState({selectedTab:'home'})}
                >
                   <ProblemsNici/>  
                </TabNavigator.Item>

                    <TabNavigator.Item 
                     selected={this.state.selectedTab==='mine'}
                     title='mine'
                     renderIcon={()=> <Image source={tab_sel_2} style={styles.tabIcon}/>}
                     renderSelectedIcon={()=> <Image source={tab_nor_2} style={styles.tabIcon}/>}
                     badgeText='2'
                     onPress={()=> this.setState({selectedTab:'mine'})}
                    >
                        <ProblemsFeedBack/>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contaner:{
        flex:1,
    },
    tab:{
        height: 54,
        backgroundColor:'#303030',
        flexDirection:'row',
    },
    tabIcon:{
      width: 30,
      height: 35,
      resizeMode:'stretch',
    }
});