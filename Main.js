import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer } from 'react-navigation'
import Login from './Login'
import Home  from './Home'
import ConnectedLogin from './ConnectedLogin'
import Register from './Register'
import Logout from './Logout'

const MainNavigator = createStackNavigator({
  login: {screen: Login},
  //login: {screen: ConnectedLogin},
  home: {screen: Home},
  logout:{screen:Logout},
  register:{screen: Register}
}
);

const MainApp = createAppContainer(MainNavigator);

export default MainApp;

// export default class Main extends Component {
    
//   render(){
//     return (
//     <View style={styles.container}>
//       <MainApp/>   
//     </View>
//   );
//   }  
 
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
