import React, {Component} from 'react';
import { StyleSheet, Text, View,FlatList, Alert, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator, createAppContainer,createStackNavigator, createDrawerNavigator } from 'react-navigation';

import  reduxStore from './ReduxStore'
import {connect, Provider} from 'react-redux'
import {LoginConnected} from './Login'


//TODO không sử dụng vì khi đăng nhặp thành công thì token lưu vào AsyncStorage chứ ko bắn lên ReduxStore

export default class ConnectedLogin extends Component {
  
    render(){
      return(
        <Provider store={storeRedux}>
         <LoginConnected/> 
        </Provider>
      )
    }

  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
 
    },
   

  });
  