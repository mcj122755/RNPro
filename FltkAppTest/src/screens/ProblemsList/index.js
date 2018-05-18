import React, {Component} from 'react';
import {StackNavigator}  from 'react-navigation';
import {TouchableOpacity} from 'react-native';

import{
    Text, 
    View,
    StyleSheet,
    Button,
    SectionList,
    Dimensions,
    Image,
 } from 'react-native';

 const {width, height} = Dimensions.get('window');

export default class ProblemsNici extends Component{

    constructor (props){
        
        super(props);
        this.navigation = props.navigation;
        const  {params} = this.props.navigation.state;
        const id = params.info;
        this.state={
            showData:[
                {title: '常见问题列表', data: ['无法登录','如何快速保修','如何查看维修预约进度','如何查看维保时间']},
              ],
            info:id,
        }
    }

    static navigationOptions = {
        title:"帮助列表"
    }

   componentDidMount(){
    alert(this.state.info);
   }

    render(){
        return (
            <View style={styles.container}>
            <SectionList
              ItemSeparatorComponent = {ItemDivideComponent}
              keyExtractor={(item, index)=>index}
              sections={this.state.showData}
              renderItem={
                ({item}) => 
                <View style={styles.item}>
                  <Text style={styles.text} onPress= {() => {this.navigation.navigate("ProblemsDetail")}}>{item}
                  </Text>
                  <Image style={styles.ImageArrow} source={require('../arrow_right.png')} resizeMode='center'/>
                </View>
              }
              renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
            />
    
    
            <View style={styles.bottomView}>
              <Text style={styles.bottomViewTitle}>需要更多帮助</Text>
              <TouchableOpacity style={styles.button} onPress = {contactCustomerService}>
              <Text style={styles.buttonText}>联系客服</Text>
              </TouchableOpacity>
            </View>
    
          </View>
        );
    }

}

class ItemDivideComponent extends Component {
    render() {
      return (
        <View style={{height: 0.5, backgroundColor: '#E2E2E2', marginLeft:15}}/>
      );
    }
  };

  function contactCustomerService(){
    alert('13073678666');
  }

  const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 0,
     backgroundColor: 'rgba(247,247,247,1.0)',
    },
    sectionHeader: {
      padding: 15,
      fontSize: 15,
      height: 44,
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