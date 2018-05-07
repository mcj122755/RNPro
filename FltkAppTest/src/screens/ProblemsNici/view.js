
import React, {Component} from 'react';
import {StackNavigator}  from 'react-navigation';
import {TouchableOpacity} from 'react-native';

import{
    Text, 
    View,
    StyleSheet,
    Button,
    SectionList,

 } from 'react-native';

export default self => (
    <View style={styles.container}>
        <SectionList
          sections={[
            {title: '常见问题', data: ['如何查看维保时间','如何查看维修预约进度','如何快速保修']},
            {title: '分类问题', data: ['登录相关', '快速保修', '维保单', '迁到打卡', '零件查询']},
          ]}
          ItemSeparatorComponent = {ItemDivideComponent}
          renderItem={({item}) => <Text style={styles.item} onPress= {() => {self.navigation.navigate("ProblemsList")}}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        />

        <View style={styles.bottomView}>
          <Text style={styles.bottomViewTitle}> 还需要更多帮助？ </Text>
          <TouchableOpacity style={styles.button} onPress = {contactCustomerService}>
          <Text style={styles.buttonText}>联系客服</Text>
          </TouchableOpacity>
        </View>


      </View>
  );


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
}
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
    item: {
      padding: 15,
      fontSize: 15,
      height: 49,
      color:'#333333',
      backgroundColor: 'rgba(255,255,255,1.0)',
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