import React,{Component} from 'react'
import { Text, View, StyleSheet,Image, TouchableOpacity,Alert,SafeAreaView } from 'react-native'
import { DrawerItems, DrawerNavigation } from 'react-navigation'
import {Container, Content, Header, Body } from 'native-base';
import { Avatar } from 'react-native-elements';

const HeaderDrawer = (props) => (
  <Container>
  <Header style={styles.drawerHeader}>
  <Body>
  <Avatar
  size="medium"
  rounded
  source={require('./assets/food_icon.png')}

/>

  {/* <Image
  style={styles.drawerImage}
  source={require('../assets/logo.png')}/> */}
  <Text style={{color:'#EC5C1C'}}>Foods Delicious </Text>
  <TouchableOpacity 
  
  onPress={()=>
              Alert.alert(
                'Đăng xuất',
                'Bạn muốn thoát khỏi chương trình?',
                [
                  {text: 'Cancel', onPress: () => {return null}},
                  {text: 'Ok', onPress: () => {
                    Alert.alert('a')
                    props.navigation.navigate('login')
                  }},
                ],
                { cancelable: false }
              )  
            }>
  
             <Text style={{margin: 16,fontWeight: 'bold',color:'red'}}>Đăng xuất</Text>
       </TouchableOpacity> 

  </Body>
  </Header>
  <Content>
  <DrawerItems {...props}/>
  </Content>
  </Container>
)


export default HeaderDrawer

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#ADD8E6',       
  },
  drawerImage: {
    height: 120,
    width: '100%'
  }, 
   drawerHeader: {
  	height: 120, 
    width: '100%',
  	//backgroundColor: '#ADD8E6'
  },
});


