import React, {Component} from 'react';
import {StackNavigator}  from 'react-navigation';
import {TouchableOpacity} from 'react-native';
import Iconfont  from '../../../../component/Iconfont';

import{
    Text, 
    View,
    StyleSheet,
    SectionList,
    Dimensions,
    Image,
    Platform,
    Switch,
 } from 'react-native';

 const {width, height} = Dimensions.get('window');

 export default class SettingClass extends Component{
    constructor (props){
        super(props);
        this.navigation = props.navigation;
        this.state={
           showData:[
               {title:'sectionOne', data:['状态通知']}, 
               {title:'sectionTwo', data:['预警通知','雷达预警通知','算法预警通知']},
               {title:'sectionThree',data:['柴油机通知']},
               {title:'sectionFour',data:['异常消息']}
           ],
           language:'简体中文',
           noticeSetting:'简体中文',
         };

    }

    _goBack(){
       this.props.navigation.goBack();
    }

    static navigationOptions = {
       header:null
     };

     _creatListHeader({section}){
        let heightHeader;
        if(section.title=="sectionOne"){
            heightHeader =  Platform.OS == 'ios' ? 70:30;
            let notesStr = Platform.OS == 'ios' ? '您已在系统中关闭lidar的通知。如需打开，请在iPhone的设置”设置“-”通知“功能中，找到应用程序lidar，打开”允许通知“':'通知关闭后，通知提示将不显示';
            return (
                <View style={[contentViewStyles.sectionHeader,{height:heightHeader,alignItems:'center',justifyContent:'center'}]}>
                    <Text style={{fontSize:13, color:'#666666',width:width-30}}>
                        {notesStr}
                    </Text>
                </View>
              );
        }else{
            heightHeader = 10;
            return (
                <View style={[contentViewStyles.sectionHeader,{height:heightHeader}]}></View>
              );
        }
     }


     _switchOnValueChange(){
         debugger;
         console.log();

     }

     _creatListItem({item, index}){

        if(item=='预警通知'){
            return (
                <View style={contentViewStyles.item}>
                    <Text style={contentViewStyles.text}>{item}
                    </Text>
                </View>
            );
        }else{
            return (
                <View style={contentViewStyles.item}>
                    <Text style={contentViewStyles.text}>{item}
                    </Text>
                    <Switch  style={{position:'absolute',right:10}} onValueChange={this._switchOnValueChange.bind(this)}></Switch>
                </View>
            );
        }
        
    }
     render(){
         return(
            <View style={styles.viewStyle}>
                {/* bar */}
                <View style={styles.navigationBar}>
                    <View style={navigationBarStyles.viewStyle}>
                        <TouchableOpacity style={navigationBarStyles.leftTouchableOpacity} onPress={this._goBack.bind(this)}>
                            <Iconfont name="icon-back" size={22} color="#666666"/>  
                        </TouchableOpacity>
                        <Text style={navigationBarStyles.title}>通知设置</Text>
                        <TouchableOpacity style={navigationBarStyles.rightTouchableOpacity}>
                            <Iconfont name="icon-message" size={22} color="#666666"/>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.contentView}>
                    <SectionList style={contentViewStyles.sectionList}
                        renderSectionHeader={this._creatListHeader.bind(this)}
                        sections={this.state.showData}
                        ItemSeparatorComponent = {ItemDivideComponent }
                        keyExtractor={(item, index)=>index}
                        renderItem = {this._creatListItem.bind(this)}
                        // scrollEnabled = {false}
                    />
                </View>
             
            </View>
         );
         
     }
 }

  // 分割线
  class ItemDivideComponent extends Component {
    render() {
      return (
        <View style={{height: 0.5, backgroundColor: '#E2E2E2', marginLeft:15}}/>
      );
    }
  };
 const styles = StyleSheet.create({
    viewStyle:{
        flex:1,
        backgroundColor: '#F7F7F7',
    },
    navigationBar:{
        width:width,
        height:64,
        backgroundColor:'#FFFFFF'
    },
    contentView:{
        width:width,
        height:height-64,
    },
 })

 const navigationBarStyles = StyleSheet.create({
    viewStyle:{
        width:width,
        height:31,
        flexDirection: 'row',
        marginTop:35,
    },
    leftTouchableOpacity:{
       width:42,
       height:32,
       marginLeft:0,
       marginTop:0,
       alignItems:'center'
    },
    leftImage:{
       height:23,
       width:23,
       marginLeft:10,
    },
    title:{
       height:22,
       width:width-84,
       marginTop:0,
       fontWeight:'bold',
       color:'#333333',
       fontSize:18,
       textAlign:'center',
    },
    rightTouchableOpacity:{
       width:42,
       height:32,
       marginRight:0,
       marginTop:0,
       alignItems:'center',
    },
    rightImage:{
       height:23,
       width:23,
    },
})


const contentViewStyles = StyleSheet.create({
    sectionList:{
        flex:1,
    },
    sectionHeader: {
        width:width,
        backgroundColor: 'rgba(247,247,247,1.0)',
      },
    item:{
        height:49,
        width:width,
        flexDirection: 'row',
        backgroundColor:'#FFFFFF',
        alignItems:'center'
      },
      text: {
        padding: 15,
        fontSize: 16,
        height: 49,
        width:width - 149,
        color:'#333333',
        backgroundColor: 'rgba(255,255,255,1.0)',
      },
      detailTitle:{
        fontSize: 13,
        color:'#666666',
        position:'absolute',
        right:30
      },
      ImageArrow:{
        height:49,
        width:49,
        position:'absolute',
        right:-10
      },

      changeUser:{
        fontSize: 16,
        color:'#333333',
      },
})