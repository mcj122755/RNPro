import React, {Component} from 'react';
import {StackNavigator}  from 'react-navigation';
import {TouchableOpacity} from 'react-native';

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
        let heightHeader =  section.title=="sectionOne" ? 60:10;
        return (
           <View style={[contentViewStyles.sectionHeader,{height:heightHeader}]}></View>
         );
     }

     _creatListItem({item, index}){
        return (
            <TouchableOpacity style={contentViewStyles.item}>
                
            </TouchableOpacity>
        );
    }
     render(){
         return(
            <View style={styles.viewStyle}>
                {/* bar */}
                <View style={styles.navigationBar}>
                    <View style={navigationBarStyles.viewStyle}>
                        <TouchableOpacity style={navigationBarStyles.leftTouchableOpacity} onPress={this._goBack.bind(this)}>
                            <Image resizeMode='stretch' source={require('./assets/topbar-back.png')} style={navigationBarStyles.leftImage}></Image>
                        </TouchableOpacity>
                        <Text style={navigationBarStyles.title}>通知设置</Text>
                        <TouchableOpacity style={navigationBarStyles.rightTouchableOpacity}>
                            <Image resizeMode='stretch' source={require('./assets/topbar-message.png')} style={navigationBarStyles.rightImage}></Image>
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
        marginTop:30,
    },
    leftTouchableOpacity:{
       height:31,
       width:31,
       flexDirection: 'row',
       alignItems:'center',
    },
    leftImage:{
       height:23,
       width:23,
       marginLeft:10,
    },
    title:{
       fontSize: 18,
       color:'#333333',
       width:width - 62,
       height:31,
       textAlign:'center',
       marginTop:5, 
    },
    rightTouchableOpacity:{
       height:31,
       width:31,
       flexDirection: 'row',
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