import React, { Component } from 'react';
import Drawer from './Drawer'
import HeaderDrawer from './HeaderDrawer'
import { StyleSheet, Text, Platform,View, InputText, Button, Image, Alert,FlatList,TouchableOpacity, TouchableHighlight,AsyncStorage } from 'react-native';
import {connect, Provider} from 'react-redux'

export default class ListDeliciousNew extends Component {
  
  //   navigationOptions= ({ navigation }) => ({
  //    title: 'DS món ngon mới nhất',
  //  headerRight: <Button title='Tải lại'/>,
  //   headerStyle: {
  //     backgroundColor: '#ADD8E6',
  //   },
  //   headerTintColor: '#fff',
  //   headerTitleStyle: {
  //         fontWeight: 'bold',
  //          //Sets Header text style
  //      },
  // })
//tai sao static day thi moi xuat hien minh??
static navigationOptions = ({ navigation }) => ({
      title: 'DS món ngon mới nhất',
      headerLeft: <Drawer navigationProps={navigation} />,

       headerRight: (
        <Button
          onPress={navigation.getParam('reloadData')}
          title="Tải lại"
          color={Platform.OS === 'ios' ? '#fff' : null}
        />
      ),
             
      headerStyle: {
        backgroundColor: '#0A9E9E',
      },
      headerTintColor: '#fff',
    })

constructor(props){
    super(props);
    this.state={
      data:""
    }
  }


  
_retrieveData= async() =>{ 
  try {
     // console.log('start get token')
      const token = await AsyncStorage.getItem('token')
      let author= 'Bearer ' +token
      //console.log('author:'+author)
      fetch('http://54.89.144.231:3010/api/v1/recipe/list',{
      method:'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: author
      },
    })
    .then((response) => response.json())
      .then((responseJson) => {   
       // console.log('result:'+JSON.stringify(responseJson))     
       this.setState({data:responseJson.data})
           //this.props.initial(JSON.parse(responseJson.data))
         
    }) 

    .catch((error) =>{
      console.error(error);
    });


    } catch(error) {

    }

}



 componentWillMount() {
    this.props.navigation.setParams({ reloadData: this._retrieveData});    
  }


componentDidMount() {  
  this._retrieveData()       
  }

 ProcessItem=(item)=>{   
    return(
      <View style={styles.styleFlatList}>
         <TouchableOpacity
                 style={styles.button}
                 onPress={() =>  {                   
                   this.props.navigation.navigate('DeliciousDetail',{foodItem:item})
                 }}
            >
      <Image source={{uri: item.image}} style={{width: 60, height: 40}} />
      <Text>Title:{item.title}</Text>
       
       <Text>Number of love:{item.number_of_love}</Text>
       
       {/* <Text>Number of love:{this.props.numberOfLove}</Text> */}
     </TouchableOpacity>
      
     
      </View>      
    )
 }

  render() {
     const {navigate} = this.props.navigation;
    return (

      <View style={styles.container}>         

           <FlatList
              data={this.state.data}
              renderItem={({item}) =>this.ProcessItem(item) }
              keyExtractor={(item, index) => item.id.toString()}
           />
       
          </View>
    );
  }
}

//TODO dung redux store
// const GetDataFromStore=(state)=>{
//      props={...state}
//      return props
// }

// ListDeliciousNewConnected=connect(GetDataFromStore,null)(ListDeliciousNew)
// export {ListDeliciousNewConnected}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    styleFlatList:{
      paddingLeft:20,
      backgroundColor: 'skyblue',
      marginTop: 5,
    },
    TouchableOpacityStyle: {
    position: 'absolute',
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },

button: {  
      marginBottom: 10,           
       alignItems: 'center',
       justifyContent: 'center',      
        
    },  
  

  });

