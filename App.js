import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer } from 'react-navigation'

import MainApp from './Main'

export  function App() {
  return (
    <View style={styles.container}>    
     <MainApp/>
    </View>
  );

 // return <MainApp/>
 
}

export default MainApp;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
