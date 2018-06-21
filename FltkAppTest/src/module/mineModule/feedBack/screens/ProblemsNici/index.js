import React, {Component} from 'react';
import {StackNavigator}  from 'react-navigation';
import {TouchableOpacity} from 'react-native';
// import view from './view';
import Iconfont  from '../../../../../../component/Iconfont';

import{
    Text, 
    View,
    StyleSheet,
    Button,
    SectionList,
    Image,
    Dimensions,

 } from 'react-native';
 const {width, height} = Dimensions.get('window');
 var url = 'https://www.apiopen.top/satinApi?type=1&page=1';

export default class ProblemsNici extends Component{

    constructor (props){
        super(props);
        this.navigation = props.navigation;
        this.state={
            showCommonData:[
                {title:'常见问题', data: ['如何查看维保时间','如何查看维保时间','如何查看维修预约进度']},
                {title:'分类问题', data:[]}
              ],
            showCategroyData:[
                '登录相关','快速保修','维保单','维修单','签到打卡','零件询价'
            ],
            testDataString:"33",
        }
      }
      _goBack(){
        this.props.navigation.goBack();
      }

      static navigationOptions = {
        header:null
      };

    _creatCategroyViews(){
        var arrayViews = [];
        for(var i = 0; i < this.state.showCategroyData.length;i ++){
          let titleName = this.state.showCategroyData[i];
            arrayViews.push( 
            <TouchableOpacity style={FooterComponentStyle.item} onPress= {() => {this.navigation.navigate("ProblemsList",{info:titleName}) }} key={i}>
                <Image style={FooterComponentStyle.icon} source={require('../arrow_right.png')} resizeMode='center'/>
                <Text style={FooterComponentStyle.title}>{this.state.showCategroyData[i]}</Text>
            </TouchableOpacity>
            )
        }
        return arrayViews;
    }

    _fetchData(){
      fetch(url, {method:'GET'}).then((response) => response.json()).then((responseData)=>{
        this.setState({
          testDataString:responseData.msg,
        });
        
      }).catch((error)=>{
        callback(error);
      });
    }

    componentDidMount(){
      this._fetchData();
    }
    render(){
        return (
            <View style={styles.container}>
            {/* bar */}
              <View style={styles.navigationBar}>
                      <View style={navigationBarStyles.viewStyle}>
                          <TouchableOpacity style={navigationBarStyles.leftTouchableOpacity} onPress={this._goBack.bind(this)}>
                            <Iconfont name="icon-back" size={22} color="#666666"/>  
                          </TouchableOpacity>
                          <Text style={navigationBarStyles.title}>帮助与反馈</Text>
                          <TouchableOpacity style={navigationBarStyles.rightTouchableOpacity}>
                            <Iconfont name="icon-search" size={22} color="#666666"/>
                          </TouchableOpacity>
                      </View>
                </View>

              <SectionList
                renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                sections={this.state.showCommonData}
                ItemSeparatorComponent = {ItemDivideComponent}
                keyExtractor={(item, index)=>index}
                ListFooterComponent={
                  ()=>{
                    return(
                        <View style={FooterComponentStyle.container}>
                        {this._creatCategroyViews()}
                        </View>
                    );
                  }
                }

                renderItem={
                ({item}) =>
                  <View style={styles.item}>
                    <Text style={styles.text} onPress= {() => {this.navigation.navigate("ProblemsDetail",{info:item})}}>{item}
                    </Text>
                    <Image style={styles.ImageArrow} source={require('../arrow_right.png')} resizeMode='center'/>
                  </View>
                }


          
        />

        <View style={styles.bottomView}>
          <Text style={styles.bottomViewTitle}>需要更多帮助?</Text>
          <TouchableOpacity style={styles.button} onPress = {contactCustomerService}>
          <Text style={styles.buttonText}>联系客服</Text>
          </TouchableOpacity>
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

  
  
function contactCustomerService(){
    alert('请拨打：13073678666');
    // https://www.apiopen.top/satinApi?type=1&page=1

}
  
  
  const FooterComponentStyle = StyleSheet.create({
    container:{
      flexDirection: 'row',
      flexWrap:'wrap',
      backgroundColor:'white' 
    },
    item:{
      height:width/4,
      width:width/4,
      backgroundColor:'white',
      alignItems:'center',  
    },
    icon:{
       height:32,
       width:32,
       backgroundColor:'blue',
       marginTop:15,
    },
    title:{
      marginTop:11,
      fontSize:12,
      color:'#333333',
    },
  })
  
  const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 0,
     backgroundColor: 'rgba(247,247,247,1.0)',
    },
    sectionHeader: {
      paddingTop: 4,
      paddingLeft: 15,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 11,
      color:'#787878',
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
    bottomView:{
      height:108,
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: 0,
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
