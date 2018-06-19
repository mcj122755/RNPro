
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


 export default class HomePage extends Component{

    constructor (props){
        super(props);
        this.navigation = props.navigation;
        this.state={
          showData:[{title:'所属公司', data:['']}, {title:'', data:['帮助与反馈','使用条款','关于胄天']}],
          companyNameStr:'浙江胄天科技有限公司',
          companyAddress:'浙江省杭州市滨江区六和路368号海创基地',
        };
    }

    static navigationOptions = {
        header:null
    }

    _creatListHeaderComponent(){
        var listHeaderComponentView = [];
        listHeaderComponentView.push(
            <View style={listHeaderComponentStyls.container} key='1'>
              <View style={listHeaderComponentStyls.header}>
              <TouchableOpacity style={headerStyles.setttingTouchableOpacity}
                onPress= {() => {this.navigation.navigate("SettingPage",{info:null})}}
                >
                    <Image source={require('./assets/topbar-set.png')} style={headerStyles.setttingImage}></Image>
                    </TouchableOpacity>

                    <Text style={headerStyles.settingTitle}>
                        我的
                    </Text>

                <TouchableOpacity style={headerStyles.messageTouchableOpacity}
                onPress={()=> {}}
                >
                 <Image source={require('./assets/topbar-message.png')} style={headerStyles.setttingImage}></Image>
                </TouchableOpacity>
              </View>
              
              <TouchableOpacity style={listHeaderComponentStyls.mine} onPress= {() => {this.navigation.navigate("PersonalInfoSettingPage",{info:null})}}>
              {/* 头像 */}
                  <Image  source={require('./assets/icon.png')} style={mineInfoStyles.icon} ></Image>
                  <View style={mineInfoStyles.info}>
                    <Text style={infoStyles.name}>张小宝</Text>
                    <Text style={infoStyles.descr}>管理员 xiaobaoZhang</Text>
                  </View>
                  <View style={mineInfoStyles.arrow}>
                    <Image style={mineInfoStyles.image} source={require('./assets/arrow.png')}></Image>
                  </View>
              </TouchableOpacity>      

            </View>
        )
        return listHeaderComponentView;
    }

    _creatListItem({item, index}){
        if(item===''){
            return (
             <TouchableOpacity style={companyInfoStyles.container}>
                <Image  source={require('./assets/icon.png')} style={companyInfoStyles.icon} ></Image>
                <View style={companyInfoStyles.info}>
                    <Text style={companyInfoStyles.companyName}>{this.state.companyNameStr}</Text>
                    <Text style={companyInfoStyles.companyAddress}>{this.state.companyAddress}</Text>
                </View>
                <Image style={[companyInfoStyles.arrow,{position:'absolute',right:-10}]}  source={require('../../../assets/arrow_right.png')} resizeMode='center'/>
              </TouchableOpacity>
            );
        }else{
            return (
                <TouchableOpacity style={styles.item} onPress= {() => {this.navigation.navigate("ProblemsList",{info:item})}}>
                    <Text style={styles.text}>{item}
                    </Text>
                    <Image style={styles.ImageArrow} source={require('../../../assets/arrow_right.png')} resizeMode='center'/>
                </TouchableOpacity>
            );
        }
    }

    render(){
        return(
            <View style={styles.viewStyle}>

                {/* 头部控件 */}
                <View style={styles.listHeaderComponent}>
                 {this._creatListHeaderComponent()}
                </View>


                <SectionList style={styles.sectionList}
                    renderSectionHeader={({section})=> <Text style={styles.sectionHeader}>{section.title}</Text>}
                    sections={this.state.showData}
                    ItemSeparatorComponent = {ItemDivideComponent}
                    keyExtractor={(item, index)=>index}
                    renderItem = {this._creatListItem.bind(this)}
                />
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

 const companyInfoStyles = StyleSheet.create({
     container:{
         width:width,
         height:64,
         flexDirection: 'row',
         alignItems:'center',
         backgroundColor:'#FFFFFF',
     },
     icon:{
        width:32,
        height:32,
        marginLeft:16,
        borderRadius:16,
     },
     info:{
        height:45,
        width:width-100,
        flexDirection: 'column',
        marginLeft:10,
     },

     arrow:{
        height:49,
        width:49,
        backgroundColor: 'rgba(255,255,255,1.0)',
     },
     companyName:{
        width:width-100,
        height:16,
        fontSize:16,
        color:'#333333',
     },
     companyAddress:{
        width:width-100,
        height:16,
        fontSize:12,
        color:'#666666',
        marginTop:10,
     },

 })
 const headerStyles = StyleSheet.create({
    setttingTouchableOpacity:{
        width:22,
        height:22,
        marginLeft:10,
        marginTop:0,
    },
    
    setttingImage:{
        flex:1,
        width:22,
        height:22,
    },

    settingTitle:{
        height:22,
        width:width-64,
        marginTop:0,
        fontWeight:'bold',
        color:'#FFFFFF',
        fontSize:18,
        textAlign:'center',  
    },
    messageTouchableOpacity:{
        width:22,
        height:22,
        marginRight:10,
        marginTop:0,
    },
 })

 const mineInfoStyles = StyleSheet.create({
    icon:{
      width:60,
      height:60,
      marginLeft:16,
      borderRadius:30,
    },
    info:{
        height:60,
        marginLeft:16,
        width:width-150,
    },
    arrow:{
        height:60,
        marginRight:0,
        width:60,
    },
    image:{
        paddingRight:85,
        height:60,
        width:60,
        resizeMode:'center',
    },
 })

 const infoStyles = StyleSheet.create({
   name:{
     marginTop:12,
     width:width-150,
     height:30,
     fontSize:18,
     color:'#FFFFFF'
   },
   descr:{
     marginTop:-2,
     width:width-150,
     height:30,
     fontSize:12,
     color:'#FFFFFF'  
   },
 })


  const listHeaderComponentStyls = StyleSheet.create({
    container:{
      backgroundColor:'#4A90E2',
      flex: 1,
    },
    header:{
        height:22,
        marginLeft:0,
        marginRight:0,
        marginTop:33,
        flexDirection:'row'
    },
    mine:{
        height:60,
        marginLeft:0,
        marginRight:0,
        marginTop:15,
        flexDirection:'row',
    },
 });

 const styles = StyleSheet.create({
    viewStyle:{
        flex: 1,
        paddingTop: 0,
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    sectionList:{
        // flex: 1,
        // backgroundColor: 'red',
    },
    listHeaderComponent:{
        width:width,
        height:140,
    },
    sectionHeader: {
        paddingTop: 4,
        paddingLeft: 15,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 12,
        color:'#999999',
        height:20 ,
        backgroundColor: 'rgba(247,247,247,1.0)',
      },
      item:{
        height:49,
        width:width,
        flexDirection: 'row',
      },
      text: {
        padding: 15,
        fontSize: 15,
        height: 49,
        width:width - 49,
        color:'#333333',
        backgroundColor: 'rgba(255,255,255,1.0)',
      },
      ImageArrow:{
        height:49,
        width:49,
        marginRight:49,
        backgroundColor: 'rgba(255,255,255,1.0)',
        paddingRight:70,
      },
});

