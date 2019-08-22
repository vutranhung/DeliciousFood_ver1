import React,{Component} from 'react';
import { StyleSheet, Text, View, TextInput,AsyncStorage, Button,Image, Alert, ImageBackground,TouchableOpacity } from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';
 import { Input  } from 'react-native-elements';
import {connect} from 'react-redux'

export default class Login extends Component{

static navigationOptions = {
header: null,
};

 constructor(props){
   super(props)
   this.state={
     email:"",
     password:""
   }
 }

 IsEmail = (inputEmail)=>{
  let result=false;
  var myRe = "^($|[a-zA-Z0-9_\\.\\+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-\\.]+)$";
  var re = new RegExp(myRe,"i");
   result=  re.test(inputEmail);   
   return result;
}
  
 ProcessLogin=()=>{   

     if(this.state.email=='')
     {
       Alert.alert('Cần nhập email!')
       return
     }
     if(!this.IsEmail(this.state.email)){
        Alert.alert('Cần nhập đúng địa chỉ email!')
        return
     }
     if(this.state.password=='')
     {
       Alert.alert('Cần nhập mật khẩu!')
       return
     }
     return fetch('http://54.89.144.231:3010/api/v1/login',{
       method: 'POST',
       headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
  }),

     })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson)
      if(responseJson.code==0){
        Alert.alert('Đăng nhập không thành công')
      }else
      {
          //TODO gan token vao redux store
         // this.props.setToken(responseJson.token)
         // gán token vao AsyncStorage
           AsyncStorage.setItem("token", responseJson.token);
          // chuyen sang man home
          const {navigate} = this.props.navigation
          navigate('home')
      }
      
    })
    .catch((error) => {
      console.error(error);
    });

 }

 render(){
     return(
   
         <ImageBackground
          style={{ width:'100%',height:'100%'}}        
          source={require('./assets/login_backgroup.jpg')}>
       <View style={styles.container}> 
       <Image source={require('./assets/food_icon.png')} />  
       <Text style={styles.styleTextLess}>Delicious Food Daily</Text>  
       <Input inputContainerStyle={styles.styleInputContainer} inputStyle={styles.styleInput}
        placeholderTextColor={'#fffbfb'} placeholder='Địa chỉ email'
        onChangeText={(text)=>{this.setState({email:text})}}
        title='dangtung2019@gmail.com'
        />
       <Input inputContainerStyle={styles.styleInputContainer}  inputStyle={styles.styleInput} 
       secureTextEntry={true}
       onChangeText={(text)=>{this.setState({password:text})}}
       placeholderTextColor={'#fffbfb'} placeholder='Mật khẩu'
       title='123456'
        />  

        <TouchableOpacity onPress={()=>this.ProcessLogin()}>
          <View style={styles.styleButtonLogin}>
            <Text style={styles.buttonText}>Đăng nhập</Text>
          </View>
        </TouchableOpacity>   
                         
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('register')}>
          <View style={styles.styleButtonRegister}>
            <Text style={styles.buttonText}>Đăng ký</Text>
          </View>
        </TouchableOpacity>   
          </View>
       </ImageBackground>
      
      
     )
   }
}

// const const PutDataChangeToStore=(dispatch)=>{
//    return {
//      setToken:(token)=>{
//        dispatch({type:token,token:token})
//      }
//    }
// }

// const LoginConnected=connect(
//   null,
//   PutDataChangeToStore
// )(Login)
// export {LoginConnected}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',   
    alignItems: 'center',
    justifyContent: 'center',     
  },
  
  
  styleTextLess:{
    color:'#f87979',
    marginBottom:50,
    fontSize:30
  },


  styleInput:{
      backgroundColor:'#0A9E9E',
      borderRadius: 30,           
       textAlign: 'center',
       height:50,
       borderBottomWidth: 0 ,       
  },

  styleInputContainer:{
      width: '100%',
      marginTop:30,
      borderBottomWidth: 0,     
  },
  styleButtonLogin:{
    backgroundColor:'#a90000',   
     borderRadius: 10,
     width:200,
     marginTop:50,
     height:35,
     
  },
      styleButtonRegister:{
    backgroundColor:'#19299c',   
     borderRadius: 10,
    
     marginTop:20,
     height:35,
     width:200
  },
  buttonText:{
      color:'white',
       fontSize: 20,
      textAlign: 'center',
  }

}); 

