import React, {Component} from 'react';
import {StackNavigator}  from 'react-navigation';
import view from './view';
import {TouchableOpacity, TextInput} from 'react-native';
import Iconfont  from '../../../../../../component/Iconfont';

import{
    Text, 
    View,
    StyleSheet,
    Button,
    Image,
    AlertIOS,
    Dimensions,
 } from 'react-native';

 //图片选择器
import { showImagePicker } from 'react-native-image-picker';
const {width, height} = Dimensions.get('window');
 
//图片选择器参数设置
var options = {
  title: '请选择图片来源',
  cancelButtonTitle:'取消',
  takePhotoButtonTitle:'拍照',
  chooseFromLibraryButtonTitle:'相册图片',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  }
};

//默认应用的容器组件
class PickImageClass extends Component {
  //构造函数
  constructor(props) {
     super(props);
     this.state = {
         avatarSource: null
     };
  }

  //渲染
  render() {
     return (
       <View style={pickImageStyles.container}>
          <TouchableOpacity   style={{width:184, height:50, backgroundColor:'#FFFFFF',
          marginLeft:10, flexDirection:'row',alignItems:'center',borderColor:'#E2E2E2',borderRadius:6,
          borderWidth:0.5, 
           }} onPress={this.choosePic.bind(this)}>
              <Iconfont name="icon-photo" size={30} color="#1E79DA" style={{marginLeft:15}}/>
              <Text style={{color:'#999999',fontSize:10, width:110,marginLeft:15}}>请拍摄 / 截屏问题照片 帮助我们更快解决问题</Text>  
          </TouchableOpacity>
          <Image source={this.state.avatarSource} style={pickImageStyles.image} />
          <Image source={this.state.avatarSource} style={pickImageStyles.image} />
          <Image source={this.state.avatarSource} style={pickImageStyles.image} />
       </View>
     );
  }

  //选择照片按钮点击
  choosePic() {
    showImagePicker(options, (response) => {
     console.log('Response = ', response);

     if (response.didCancel) {
       console.log('用户取消了选择！');
     }
     else if (response.error) {
       alert("ImagePicker发生错误：" + response.error);
     }
     else if (response.customButton) {
       alert("自定义按钮点击：" + response.customButton);
     }
     else {
       let source = { uri: response.uri };
       // You can also display the image using data:
       // let source = { uri: 'data:image/jpeg;base64,' + response.data };
       this.setState({
         avatarSource: source
       });
     }
   });
  }
}

//样式定义
const pickImageStyles = StyleSheet.create({
 container:{
   flex: 1,
   marginTop:10,
 },
 item:{
   margin:15,
   height:30,
   borderWidth:1,
   padding:6,
   borderColor:'#ddd',
   textAlign:'center'
 },
 image:{
  height:50,
  width:60,
  alignSelf:'center',
  backgroundColor:'blue',
 },
});


// 标签按钮
class TapButton extends Component{
  constructor(props){
    super(props);
    this.state={
      containerStyle:styles.button,
      titleStyle:styles.buttonText,
    }
  }


  _pressed(){
    let{id, onCheck} = this.props;
    onCheck(this.props.flag);
  }
  render(){
    return(
      <TouchableOpacity 
      style={this.props.isSelect ?styles.selButton:styles.button} 
      onPress={this._pressed.bind(this)}>
        <Text style={this.props.isSelect? styles.selButtonText:styles.buttonText}>
        {this.props.btnTitle}
        </Text>
      </TouchableOpacity>
    )
  }
}

export default class ProblemsNici extends Component{
    constructor (props){
        super(props);
        this.navigation = props.navigation;
        this.state={
            arrayOfTitle:['提个意见','出错了','不好用','其他'],
            selIndex:0,
            feedBackCharNumber:300,
        }
    }
    _goBack(){
      this.props.navigation.goBack();
    }

    static navigationOptions = {
      header:null
    };
    
    _check_callback(index){
      this.setState({
        selIndex:index,
      });
  
    }
    
    _creatTapView(){
      arrViews=[];
      for (var index = 0; index < this.state.arrayOfTitle.length ; index++) {
        arrViews.push(
          <TapButton 
          btnTitle={this.state.arrayOfTitle[index]} 
          isSelect={index == this.state.selIndex ? true:false} 
          key={index} 
          onCheck={this._check_callback.bind(this)}
          flag={index}
          />
          )
     }
     return arrViews;
    }
   
    _onChangeText(text){
      this.setState({
        feedBackCharNumber: 300-text.nativeEvent.text.length,
      });
    }


    // 拍摄和截屏照片
    render(){
        return (
        <View style={styles.container}> 
        
        {/* bar */}
          <View style={styles.navigationBar}>
                  <View style={navigationBarStyles.viewStyle}>
                      <TouchableOpacity style={navigationBarStyles.leftTouchableOpacity} onPress={this._goBack.bind(this)}>
                        <Iconfont name="icon-back" size={22} color="#666666"/>  
                      </TouchableOpacity>
                      <Text style={navigationBarStyles.title}>意见反馈</Text>
                  </View>
            </View>
            
            <View style={styles.buttonView }>
              {this._creatTapView()};
            </View>

            
            {/* 意见类型按钮 */}
            <View  style={TextInputViewStyle.textView}>
              <TextInput style={TextInputViewStyle.TextInput}
                placeholder='您的反馈是我们前进的动力'
                multiline={true} 
                maxLength={300}
                onChange={this._onChangeText.bind(this)}
                />
            </View>
            
            <Text style={TextInputViewStyle.capion}> 
                您最多可以输入
                <Text style={{color:'#1E79DA'}}>{this.state.feedBackCharNumber}</Text>
                字
            </Text>
            <PickImageClass/>
            {/* <TouchableOpacity style={styles.picButton} onPress = {contactCustomerService}>
                <Text style={styles.picText}>请拍摄/截屏问题照片帮助我们更快解决问题</Text>
            </TouchableOpacity> */}

            <TouchableOpacity style={SubmitButtonStyle.button} onPress={clickSubmitButton}>
                <Text style={SubmitButtonStyle.text}>提交</Text>
            </TouchableOpacity>


        </View>
        );
    }

}



function onChangeText(text){
  alert('13073678666');
}

function contactCustomerService(text){
  
}
function clickSubmitButton(){
 alert('提交成功！');
}

const SubmitButtonStyle = StyleSheet.create({
 button:{
   backgroundColor:'#1E79DA',
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
    backgroundColor:'#FFFFFF',
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
    backgroundColor: '#F7F7F7',
   },
  buttonView:{
    marginTop:16,
    flexDirection:'row',
    height:50,
    backgroundColor:"#F7F7F7",
  },
  buttonText:{
    textAlign: 'center',
    color: '#666666',
    fontSize:14,
  },

  selButtonText:{
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize:14,
  },
  button: {
    flex:1,
    height: 30,
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor:'#E2E2E2',
    backgroundColor: 'white',
    justifyContent: 'center',
    margin:10,
  },
  selButton:{
    flex:1,
    height: 30,
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor:'white',
    backgroundColor: '#1E79DA',
    justifyContent: 'center',
    margin:10,
  },
  picButton:{
    // width:width,
    // height:60,
    // margin:10,
    // height:50,
    // width:173,
    // padding:10,
    // borderRadius: 5,
    // borderWidth: 0.5,
    // borderColor:'#E2E2E2',
  },
  picText:{
    textAlign: 'left',
    color: '#999999',
    fontSize:11,
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
