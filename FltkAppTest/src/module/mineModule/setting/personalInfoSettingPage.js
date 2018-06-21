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

 export default class PersonalInfoSettingClass extends Component{
    constructor (props){
        super(props);
        this.navigation = props.navigation;
        this.state={
            showData:[
                {title:'sectionOne', data:['头像','账号','昵称']}, 
                {title:'sectionTwo', data:['所属公司','角色']},
            ],
            icon:'./assets/topbar-message.png',
            account:'张小宝',
            nickname:'小宝宝',
            companyName:'浙江胄天科技有限公司',
            role:'管理员',
        }
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

     _creatListItem({item,index}){
         switch(item){
             case '头像':{
                return(
                    <TouchableOpacity style={contentViewStyles.item} onPress={this._clickLanguageItem}>
                        <Text style={contentViewStyles.text}>{item}
                        </Text>
                        <Image  source={require('./assets/icon.png')} style={contentViewStyles.icon} ></Image>
                        <Image style={contentViewStyles.ImageArrow} source={require('../../../assets/arrow_right.png')} resizeMode='center'/>
                    </TouchableOpacity>
                 );

             }
             case '账号':{
                return(
                    <TouchableOpacity style={contentViewStyles.item} onPress={this._clickLanguageItem}>
                        <Text style={contentViewStyles.text}>{item}
                        </Text>
                        <Text style={contentViewStyles.desTitle}>{this.state.account}
                        </Text>
                    </TouchableOpacity>
                 );

             }
             case '昵称':{
                return(
                    <TouchableOpacity style={contentViewStyles.item} onPress={this._clickLanguageItem}>
                        <Text style={contentViewStyles.text}>{item}
                        </Text>
                        <Text style={contentViewStyles.detailTitle}>{this.state.nickname}
                        </Text>
                        <Image style={contentViewStyles.ImageArrow} source={require('../../../assets/arrow_right.png')} resizeMode='center'/>
                    </TouchableOpacity>
                 );

             }
             case '所属公司':{
                return(
                    <TouchableOpacity style={contentViewStyles.item} onPress={this._clickLanguageItem}>
                        <Text style={contentViewStyles.text}>{item}
                        </Text>
                        <Text style={contentViewStyles.desTitle}>{this.state.companyName}
                        </Text>
                    </TouchableOpacity>
                 );
                
             }
             case '角色':{
                return(
                    <TouchableOpacity style={contentViewStyles.item} onPress={this._clickLanguageItem}>
                        <Text style={contentViewStyles.text}>{item}
                        </Text>
                        <Text style={contentViewStyles.desTitle}>{this.state.role}
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
                            <Iconfont name="icon-back" size={22} color="#666666"/>  
                        </TouchableOpacity>
                        <Text style={navigationBarStyles.title}>个人资料</Text>
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
      desTitle:{
        fontSize: 13,
        color:'#333333',
        position:'absolute',
        right:10
      },
      ImageArrow:{
        height:49,
        width:49,
        position:'absolute',
        right:-10
      },
      icon:{
        width:32,
        height:32,
        borderRadius:16,
        position:'absolute',
        right:30
      },
 })
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