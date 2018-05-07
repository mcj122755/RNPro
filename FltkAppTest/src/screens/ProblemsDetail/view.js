import React, {Component} from 'react';
import {StackNavigator}  from 'react-navigation';
import {TouchableOpacity} from 'react-native';

import{
    Text, 
    View,
    StyleSheet,
    Button
 } from 'react-native';

export default self => (
    <View style = {styles.container}>
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
        <TouchableOpacity style={HelpButtonStyle.leftButton} onPress = {() => self.navigation.navigate("ProblemsFeedBack")}>
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
      color: 'rgba(79,150,53,1)',
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
      borderColor:'#4F9635',
      backgroundColor: 'white',
      justifyContent: 'center',
      margin: 20,
    },
    buttonText: {
        textAlign: 'center',
        color: 'rgba(79,150,53,1)',
        fontSize:18,
    },

  })