import React,{Component} from 'react';
import { StyleSheet,Image,ImageBackground } from 'react-native';


export default class FullScreenImage extends Component {

 static navigationOptions = {
    title: 'Ảnh món ăn',
    //Sets Header text of Status Bar
    headerStyle: {
      backgroundColor: '#0A9E9E',
      //Sets Header color
    },
    headerTintColor: '#fff',
    //Sets Header text color
    headerTitleStyle: {
      fontWeight: 'bold',
      textAlign: 'center',
      //Sets Header text style
    },
  };

constructor(props){
    super(props);
    uri = this.props.navigation.state.params.uri
    this.state= {
      uri: uri,
       
      // ingre:''
   }
    // this.state={
    //     image:'',
    //     title:'',
    //     desc:''
    // }
  
  }

render(){
    return(
        <ImageBackground
          style={{ width:'100%',height:'100%'}} 
          resizeMode='contain'    
        //  style={styles.container} 
          source={{uri:this.state.uri}}>
          
        </ImageBackground>
       
    )
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    width: null,
   height: null,
  },
 
});
