
import  React,{Component} from 'react';
import  TabNavigator from 'react-native-tab-navigator';
import {StackNavigator} from 'react-navigation';
import HomePage from '../module/mineModule/homePage/homePage';
import SettingPage from '../module/mineModule/setting/settingPage'

import NoticeSettingPage from '../module/mineModule/setting/noticeSettingPage'
import PersonalInfoSettingPage from '../module/mineModule/setting/personalInfoSettingPage'
import ProblemsNici from  '../module/mineModule/feedBack/screens/ProblemsNici';
import ProblemsFeedBack from  '../module/mineModule/feedBack/screens/ProblemsFeedBack';
import ProblemsList from  '../module/mineModule/feedBack/screens/ProblemsList';
import ProblemsDetail from  '../module/mineModule/feedBack/screens/ProblemsDetail';


import {
 View,
 Image,
 StyleSheet,
} from 'react-native';

const tab_nor_1 = require('../assets/eleme.png');
const tab_sel_1 = require('../assets/eleme_gray.png');
const tab_nor_2 = require('../assets/meituan.png');
const tab_sel_2 = require('../assets/meituan_gray.png');

const HomeNavigator = StackNavigator(
    {
        HomePage:{
            screen:HomePage
        },
        SettingPage:{
            screen:SettingPage
        },
        NoticeSettingPage:{
            screen:NoticeSettingPage
        },
        PersonalInfoSettingPage:{
            screen:PersonalInfoSettingPage
        },
        ProblemsFeedBack:{
            screen:ProblemsFeedBack
        },
        ProblemsNici:{
            screen:ProblemsNici
        },
        ProblemsList:{
            screen:ProblemsList
        },
        ProblemsDetail:{
            screen:ProblemsDetail
        },
    }
);

const ProblemsNiciNavigator = StackNavigator(
    {
        ProblemsNici:{
            screen:ProblemsNici
        }
    }
);





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
            {/* <HomeNavigator/> */}
                <TabNavigator tabBarStyle={styles.tab}>
                    <TabNavigator.Item 
                        selected={this.state.selectedTab==='home'} 
                        title="首页" 
                        renderIcon={()=> <Image source={tab_sel_1} style={styles.tabIcon}/>} 
                        renderSelectedIcon={()=> <Image source={tab_nor_1} style={styles.tabIcon}/>}
                        onPress={()=> this.setState({selectedTab:'home'})}
                    >
         
                    <HomeNavigator/>
                    {/* <HomePage /> */}
                    
                    
                    </TabNavigator.Item>

                    <TabNavigator.Item 
                     selected={this.state.selectedTab==='mine'}
                     title='我的'
                     renderIcon={()=> <Image source={tab_sel_2} style={styles.tabIcon}/>}
                     renderSelectedIcon={()=> <Image source={tab_nor_2} style={styles.tabIcon}/>}
                     badgeText='2'
                     onPress={()=> this.setState({selectedTab:'mine'})}
                    >
                        <ProblemsNiciNavigator/> 
                        {/* <HomePage/> */}
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
