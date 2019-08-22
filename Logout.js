import React,{Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button,Image, Alert, ImageBackground,TouchableOpacity, AsyncStorage } from 'react-native';

import Login from './Login'

export default class Logout extends Component {
   constructor(props){
       super(props)
     //  this.ProcessLogout()
       AsyncStorage.removeItem("token")
   }
   ProcessLogout=()=>{
    // xóa tokent 
    const {navigate} = this.props.navigation
    navigate('login')
}



render(){
    //return this.ProcessLogout()\
   // return <ProcessLogout/>
   return <Login/>
}
}

