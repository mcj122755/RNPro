import React, {Component} from 'react';
import {StackNavigator}  from 'react-navigation';
import view from './view';
import {TouchableOpacity} from 'react-native';
import Iconfont  from '../../../../../../component/Iconfont';

import{
    Text, 
    View,
    StyleSheet,
    Button,
    Dimensions,
    Image,
 } from 'react-native';


 const {width, height} = Dimensions.get('window');

export default class ProblemsNici extends Component{

    constructor (props){
        super(props);
        this.navigation = props.navigation;
    }

    _goBack(){
        this.props.navigation.goBack();
      }

      static navigationOptions = {
        header:null
      };
    render(){
        return (
            <View style = {styles.container}>

               {/* bar */}
              <View style={styles.navigationBar}>
                      <View style={navigationBarStyles.viewStyle}>
                          <TouchableOpacity style={navigationBarStyles.leftTouchableOpacity} onPress={this._goBack.bind(this)}>
                            <Iconfont name="icon-back" size={22} color="#666666"/>  

                          </TouchableOpacity>
                          <Text style={navigationBarStyles.title}>如何使用标签功能</Text>
                          {/* <TouchableOpacity style={navigationBarStyles.rightTouchableOpacity}>
                              <Image resizeMode='stretch' source={require('../../assets/topbar-search.png')} style={navigationBarStyles.rightImage}></Image>
                          </TouchableOpacity> */}
                          
                      </View>
                     
                </View>
                 {/* */}
                 <View style={{width:width, height:1, backgroundColor:'#E2E2E2 ', marginBottom:1}} />
                <Text style={styles.titleStyle}>如何使用签到功能?</Text>
                <Text style={styles.contentStyle}>      excel电子表中vlookup函数使用方法，将一个表格中一列数据引用到另外一个表中，
                讲得非常详细堪称终极版教程了，就算对excel很不熟悉，
                看了本教程也会游刃有余，若这样都看不懂就没有办法了，
                我花了好长时间制作了一个终极版，给个赞吧，制作教程好累的，o
                ffice excel 2003和office excel 2007都是一样的用法~ 教程也会游刃有余，若这样都看不懂就没有办法了，
                我花了好长时间制作了一个终极版，给个赞吧，制作教程好累的，o
                ffice excel 2003和office excel 2007都是一样的用法~</Text>

                {/* <Button title = '有帮助' color = 'rgba(79,150,52,1.0) ' onPress ={() => self.navigation.navigate("ProblemsFeedBack")}/>
                <Button title = '无帮助' color = 'rgba(51,51,51,1.0)'/> */}
                <View style={HelpButtonStyle.helpView}>
                    <TouchableOpacity style={HelpButtonStyle.leftButton} onPress = {() => this.navigation.navigate("ProblemsFeedBack")}>
                    <Text style={HelpButtonStyle.leftButtonText}>有帮助</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={HelpButtonStyle.rightButton} onPress = {contactCustomerService}>
                    <Text style={HelpButtonStyle.rightButtonText}>没帮助</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.bottomView}>
                    <Text style={styles.bottomViewTitle}> 还需要更多帮助？ </Text>
                    <TouchableOpacity style={styles.button} onPress = {contactCustomerService}>
                    <Text style={styles.buttonText}>联系客服</Text>
                    </TouchableOpacity>
                </View> 
            </View>
        );
    }

}

function contactCustomerService(){
    alert('请拨打：13073678666');
  }

  function showFeedBack(){
    navigation.navigate("ProblemsList");
  }

 const HelpButtonStyle = StyleSheet.create({
    helpView:{
      flexDirection:'row',
      height:49,
      backgroundColor: 'rgba(247,247,247,1.0)',
      marginTop:1
    },
    leftButton:{
      flex:1,
      justifyContent: 'center',
      backgroundColor:"white",
      margin:1
    },
    rightButton:{
      flex:1,
      justifyContent: 'center',
      backgroundColor:"white",
      margin:1
    },
    leftButtonText: {
      textAlign: 'center',
      color: '#1E79DA',
      fontSize:13,
    },
    rightButtonText: {
      textAlign: 'center',
      color: '#333333',
      fontSize:13,
    },
 })

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgba(247,247,247,1.0)',
     },

    titleStyle: {
     paddingTop:22,
     paddingLeft: 15,
     fontSize: 16,
     color:'rgba(51,51,51,1.0)',
     backgroundColor: 'white',
    },
    contentStyle: {
      paddingTop: 15,
      paddingLeft: 15,
      paddingRight: 15,
      height:380,
      fontSize: 15,
      color:'rgba(102,102,102,1.0)',
      backgroundColor: 'white',
    },
    bottomView:{
      marginTop : 20,
      height:108,
      backgroundColor:'rgba(255,255,255,1.0)',
    },
    bottomViewTitle:{
      paddingTop: 15,
      paddingLeft: 15,
      paddingRight: 10,
      height:30,
      fontSize:14,
      color:'rgba(153,153,153,1)',
    },
    button: {
      height: 44,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 24,
      borderWidth: 0.5,
      borderColor:'#E2E2E2',
      backgroundColor: 'white',
      justifyContent: 'center',
      margin: 20,
    },
    buttonText: {
        textAlign: 'center',
        color: '#333333',
        fontSize:18,
    },
    navigationBar:{
        width:width,
        height:64,
        backgroundColor:'#FFFFFF'
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
