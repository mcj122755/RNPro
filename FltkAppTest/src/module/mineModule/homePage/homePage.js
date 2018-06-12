
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


 export default class HomePage extends Component{

    constructor (props){
        super(props);
        this.state={
          showData:[{title:'', data:['']}, {title:'', data:['帮助与反馈','使用条款','关于胄天']}],
        };
    }

    static navigationOptions = {
        header:null
    }

    _creatListHeaderComponent(){
        var listHeaderComponentView = [];
        listHeaderComponentView.push(
            <View style={listHeaderComponentStyls.container} key='1'>
                <TouchableOpacity style={listHeaderComponentStyls.setttingTouchableOpacity}
                onPress={()=> {}}
                >
                </TouchableOpacity>
            </View>
        )
        return listHeaderComponentView;
    }
    render(){
        return(
            <View style={styles.viewStyle}>
                <SectionList style={styles.sectionList}
                    renderSectionHeader={({section})=> <Text style={styles.sectionHeader}></Text>}
                    sections={this.state.showData}
                    ItemSeparatorComponent = {ItemDivideComponent}
                    keyExtractor={(item, index)=>index}
                    
                    renderItem={
                        ({item}) =>
                          <View style={styles.item}>
                            <Text style={styles.text} onPress= {() => {this.navigation.navigate("ProblemsList",{info:item})}}>{item}
                            </Text>
                            <Image style={styles.ImageArrow} source={require('../../../assets/arrow_right.png')} resizeMode='center'/>
                          </View>
                        }
                    ListHeaderComponent={()=>{return(
                        <View style={styles.listHeaderComponent}>
                            {this._creatListHeaderComponent()}
                        </View>
                    )}}
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

  const listHeaderComponentStyls = StyleSheet.create({
    container:{
      backgroundColor:'#4A90E2',
      flex: 1,
    },
    setttingTouchableOpacity:{
        width:22,
        height:22,
        marginLeft:10,
        marginTop:33,
        backgroundColor:'red',
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
        fontSize: 11,
        color:'#787878',
        height:15 ,
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

