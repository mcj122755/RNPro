import React, {Component} from 'react';
import {StackNavigator}  from 'react-navigation';
import {TouchableOpacity, TextInput} from 'react-native';

import{
    Text, 
    View,
    StyleSheet,
    Button
 } from 'react-native';

export default self => (
    <View style={styles.container}> 
      <View style={styles.buttonView }>
        <TouchableOpacity style={styles.button} onPress = {contactCustomerService}>
          <Text style={ styles.buttonText}>提个建议</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress = {contactCustomerService}>
          <Text style={ styles.buttonText}>出错了</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress = {contactCustomerService}>
          <Text style={ styles.buttonText}>不好用</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress = {contactCustomerService}>
          <Text style={ styles.buttonText}>其他</Text>
        </TouchableOpacity>
      </View>
     {/* 意见类型按钮 */}
      <View  style={TextInputViewStyle.textView}> 
        <TextInput style={TextInputViewStyle.TextInput} placeholder='您的反馈是我们前进的动力' multiline='true' onChangeText={onChangeText(this.text)} />
        
      </View>
      
      <Text style={TextInputViewStyle.capion}> 
        您最多可以输入
        <Text style={{color:'#4F9635'}}>300</Text>
        字
      </Text>

      <TouchableOpacity style={styles.picButton} onPress = {contactCustomerService}>
        <Text style={styles.picText}>请拍摄/截屏问题照片帮助我们更快解决问题</Text>
      </TouchableOpacity>

      <TouchableOpacity style={SubmitButtonStyle.button} onPress={clickSubmitButton}>
          <Text style={SubmitButtonStyle.text}>提交</Text>
      </TouchableOpacity>


    </View>



  );

 function onChangeText(text){
    alert(text);
 }

 function contactCustomerService(){
    alert('请拨打：13073678666');
  }
 function clickSubmitButton(){
   alert('提交成功！');
 }

const SubmitButtonStyle = StyleSheet.create({
   button:{
     backgroundColor:'#4F9635',
     height:49,
     margin:15,
     borderRadius:5,
     justifyContent: 'center',
     marginTop:180,
   },
   text:{
     color:'#FFFFFF',
     fontSize:18,
     textAlign: 'center',
   }
});


 const TextInputViewStyle = StyleSheet.create({
   textView:{
      margin:10,
      height:180,
      padding:10,
      borderRadius: 5,
      borderWidth: 0.5,
      borderColor:'#E2E2E2',
   },
   TextInput:{
     flex:1,
     fontSize:14,

   },
   capion:{
     fontSize:11,
     color:'#999999',
     textAlign:'right',
     paddingRight:15,
   }


 });

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 0,
      backgroundColor: 'white',
     },
    buttonView:{
      marginTop:16,
      flexDirection:'row',
      height:50,
      backgroundColor:"white",
    },
    buttonText:{
      textAlign: 'center',
      color: '#666666',
      fontSize:14,
    },
    button: {
      flex:1,
      height: 30,
      borderRadius: 13,
      borderWidth: 0.5,
      borderColor:'#E2E2E2',
      backgroundColor: 'white',
      justifyContent: 'center',
      margin:10,
    },

    picButton:{
      margin:10,
      height:50,
      width:173,
      padding:10,
      borderRadius: 5,
      borderWidth: 0.5,
      borderColor:'#E2E2E2',
    },
    picText:{
      textAlign: 'left',
      color: '#999999',
      fontSize:11,
    },
  })