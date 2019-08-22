import React,{Component} from 'react'
import {Image,View, Text,StyleSheet,TouchableOpacity, AsyncStorage} from 'react-native'
import { Divider } from 'react-native-elements';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import {connect } from 'react-redux'

export default class DeliciousDetail extends Component{
 //class DeliciousDetail extends Component{
    static navigationOptions = {
    title: 'Chi tiết món ăn',
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
    foodItem = this.props.navigation.state.params.foodItem
    this.state= {
        image: foodItem.image,   
        id: foodItem.id,     
        title: foodItem.title,
        desc: foodItem.description,
        numberofLove:foodItem.number_of_love
      // ingre:''
   }
    // this.state={
    //     image:'',
    //     title:'',
    //     desc:''
    // }
  
  }

componentDidMount(){
//  foodItem = this.props.navigation.state.params.foodItem
//  //console.log("food:"+ JSON.stringify(foodItem))
//  //console.log("image:"+foodItem.image)
//      this.setState({
//         image: foodItem.image,
//         id:foodItem.id,
//         title: foodItem.title,
//         desc: foodItem.description,
//         //ingre:food.ingre
//      })
}


 ProcessLove=async ()=>{
  try {
      //TODO dung redux 
      // this.props.addNumLove(this.state.numberofLove)
      console.log('start get token')
      const token = await AsyncStorage.getItem('token')
      let author= 'Bearer ' +token
     // console.log('author:'+author)
      fetch('http://54.89.144.231:3010/api/v1/recipe/love',{
      method:'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
         authorization: author
      },
       body: JSON.stringify({
        recipe_id: this.state.id,
        
  }),
    })
    .then((response) => response.json())
      .then((responseJson) => {   
        console.log('love:'+JSON.stringify(responseJson))     
          //this.setState({data:responseJson.data})
           //this.props.initial(JSON.parse(responseJson.data))
         
    }) 

    .catch((error) =>{
      console.error('error:'+error);
    });

    } catch(error) {
        console.error('error:'+error);
    }

   }

     

    render(){
        return(
            <View style={styles.container}>           
             <TouchableOpacity
                 style={styles.button}
                 onPress={() =>  {                   
                    this.props.navigation.navigate('FullScreenImage',{uri:this.state.image})
                 }}
            >
          <Image source={{uri:this.state.image}} style={styles.styleImage} />      
          {/* vi sao check empty ?? minh */}
       {/* <Image source={this.state.image? {uri:this.state.image}:null} style={styles.styleImage} />   */}
     </TouchableOpacity> 

     <Text style={{fontSize:15, fontWeight:'bold'}}>{this.state.title}</Text> 
     <Text style={{fontSize:15, fontWeight:'bold'}}>Miêu tả</Text>  
     <Text style={{marginLeft:5}}>{this.state.desc}</Text>
     <Text style={{fontSize:15, fontWeight:'bold'}}>Thành phần</Text> 
     <Divider style={{ backgroundColor: 'blue' }} />

    <View style={styles.containerButton}>
          <Button
          containerStyle={{marginRight:30}}
        icon={
            <Icon
            name="check-circle-o"
            size={18}
            color="red"
            />
        }
        iconRight
        title="Lưu lại/Bỏ lưu "
        onPress={()=>this.ProcessSaveNotSave()}
        />

    <Button
        icon={
            <Icon
            name="heart"
            size={18}
            color="pink"
            />
        }
        iconRight
        title="Love "
        onPress={()=>this.ProcessLove()}
        />
    </View>

    </View>
     )
    }
}

//TODO dung redux
// PutDataChangeToStore=(dispatch)=>{
//   return{
//     addNumLove:(numberoflove){
//       dispatch({type:"Love", numberoflove:numberoflove})
//     }
//   }
// }

// DeliciousDetailConnect=connect(null,PutDataChangeToStore)(DeliciousDetail)

// export {DeliciousDetailConnect}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {  
      marginBottom: 10,           
       alignItems: 'center',
       justifyContent: 'center',      
        
    }, 

    styleImage:{       
        width: 300, 
        height: 200
    },

    containerButton: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});