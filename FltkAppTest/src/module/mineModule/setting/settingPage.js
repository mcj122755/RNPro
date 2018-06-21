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
 } from 'react-native';

 const {width, height} = Dimensions.get('window');

 export default class SettingClass extends Component{
    constructor (props){
         super(props);
         this.navigation = props.navigation;
         this.state={
            showData:[
                {title:'sectionOne', data:['语言','通知设置']}, 
                {title:'sectionTwo', data:['登录密码']},
                {title:'sectionThree',data:['切换账号']},
                {title:'sectionFour',data:['退出登录']}
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
         let heightHeader =  section.title=="sectionOne" ? 1:10;
         return (
            <View style={[contentViewStyles.sectionHeader,{height:heightHeader}]}></View>
          );
      }

      // 点击事件
      _clickMessage(){

      }
      _clickLanguageItem(){

      }

      _clickNoticSettingItem(){
          this.navigation.navigate("NoticeSettingPage");
        // onPress= {() => {this.navigation.navigate("SettingPage",{info:null})}}
      }
      _clickPasswordItem(){

      }
      _clickSwitchAccountItem(){

      }
      _clickLogoutItem(){

      }
      _creatListItem({item, index}){
          switch(item){
            case '语言':{
                return (
                    <TouchableOpacity style={contentViewStyles.item} onPress={this._clickLanguageItem}>
                        <Text style={contentViewStyles.text}>{item}
                        </Text>
                        <Text style={contentViewStyles.detailTitle}>{this.state.noticeSetting}
                        </Text>
                        <Image style={contentViewStyles.ImageArrow} source={require('../../../assets/arrow_right.png')} resizeMode='center'/>
                    </TouchableOpacity>
                );

            }
            case '通知设置':{
                return (
                    <TouchableOpacity style={contentViewStyles.item} onPress={this._clickNoticSettingItem.bind(this)}>
                        <Text style={contentViewStyles.text}>{item}
                        </Text>
                        <Text style={contentViewStyles.detailTitle}>{this.state.language}
                        </Text>
                        <Image style={contentViewStyles.ImageArrow} source={require('../../../assets/arrow_right.png')} resizeMode='center'/>
                    </TouchableOpacity>
                );

            }
            case '登录密码':{
                return (
                    <TouchableOpacity style={contentViewStyles.item} onPress={this._clickPasswordItem}>
                        <Text style={contentViewStyles.text}>{item}
                        </Text>
                        <Image style={contentViewStyles.ImageArrow} source={require('../../../assets/arrow_right.png')} resizeMode='center'/>
                    </TouchableOpacity>
                );

            }
            case '切换账号':{
                return (
                    <TouchableOpacity style={[contentViewStyles.item,{justifyContent:'center'}]} onPress={this._clickSwitchAccountItem}>
                        <Text style={contentViewStyles.changeUser}>{item}
                        </Text>
                    </TouchableOpacity>
                );

            }
            case '退出登录':{
                return (
                    <TouchableOpacity style={[contentViewStyles.item,{justifyContent:'center'}]} onPress={this._clickLogoutItem}>
                        <Text style={[contentViewStyles.changeUser,{color:'#FC6265'}]}>{item}
                        </Text>
                    </TouchableOpacity>
                );

            }

          }
        
      }
     render(){
        return(
            <View style={styles.viewStyle}>
                {/* bar */}
                <View style={styles.navigationBar}>
                    <View style={navigationBarStyles.viewStyle}>
                        <TouchableOpacity style={navigationBarStyles.leftTouchableOpacity} onPress={this._goBack.bind(this)}>
                            {/* <Image resizeMode='stretch' source={require('./assets/topbar-back.png')} style={navigationBarStyles.leftImage}></Image> */}
                            <Iconfont name="icon-back" size={22} color="#666666"/>   
                        </TouchableOpacity>
                        <Text style={navigationBarStyles.title}>设置</Text>
                        <TouchableOpacity style={navigationBarStyles.rightTouchableOpacity} onPress={this._clickMessage.bind(this)}>
                            {/* <Image resizeMode='stretch' source={require('./assets/topbar-message.png')} style={navigationBarStyles.rightImage}></Image> */}
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