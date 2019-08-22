import React,{Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';

export default class Register extends Component {

static navigationOptions = {
header: null,
};

state={
     email:"",
     password:"",
     repassword:""
   }


ProcessRegister=()=>{
  if(this.state.email==''|| this.state.password==''||this.state.repassword==''){
       Alert.alert('Nhập đầy đủ thông tin')
       return
  }
    
  //check trung password
  if(this.state.password!=this.state.repassword){
     Alert.alert('Mật khẩu không trùng nhau')
      return
  }
 // return fetch('http://54.89.144.231:3010/api/v1/login',{
   fetch('http://54.89.144.231:3010/api/v1/register',{
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
      //console.log(responseJson)
      if(responseJson.code==0){
        Alert.alert('Đăng ký không thành công')
      }else
      {
        Alert.alert('Bạn đã đăng kí thành công')
          // chuyen sang man login
          const {navigate} = this.props.navigation
          navigate('login')
      }
      
    })
    .catch((error) => {
      console.error(error);
    });
}
  render(){
    return(

     
    <View style={styles.container}>
      <Text style={{ fontSize: 20,color:'#19299c'}}>Đăng ký thông tin</Text>
      <Text style={styles.textStyle} >Email</Text>
      <TextInput style={styles.inputText}
        onChangeText={(text)=>{this.setState({email:text})}}
        placeholder={'nhập email'}
      />    
        <Text style={styles.textStyle}>Mật khẩu</Text>
      <TextInput style={styles.inputText}
        onChangeText={(text)=>{this.setState({password:text})}}
        placeholder={'nhập mật khẩu'}
      />
       <Text style={styles.textStyle}>Nhập lại mật khẩu</Text>
       <TextInput style={styles.inputText}
        onChangeText={(text)=>{this.setState({repassword:text})}}
        placeholder={'gõ lại mật khẩu'}
      />
       <View style={styles.buttonContainer}>
          <Button
            onPress={()=>this.ProcessRegister()}
            title="Đăng ký"
            color="#1c84c6"
          />
        </View>
      <View style={styles.buttonContainer}>
          <Button
            onPress={()=>this.props.navigation.goBack()}
            title="Back"
            color="#841584"
          />
        </View>
    
    </View>
  );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6fbff',    
     //alignItems: 'center',
    justifyContent: 'center',
   
    
  },
     inputText: {  
        height: 40,
        padding: 10,
        width:'100%',      
         marginLeft:30,
        marginRight:30
  },
  textStyle:{
    marginLeft:30,
  },
   
  buttonContainer: {
    marginTop:30,
     marginLeft:30,
    marginRight:30
  },
 
});