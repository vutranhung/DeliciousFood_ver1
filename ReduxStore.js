import {createStore} from 'redux'
const rootReducer=(state,action)=>{
    switch(action.type){
         case 'token':
         return {
             ...state,
             token:action.token
         }
         case 'Love':
         return{
             ...state,
             numberOfLove:state.numberOfLove==null?action.numberOfLove:state.numberOfLove+1
         }
         default:
          return {...state}
    }
}



export default reduxStore=createStore(rootReducer,{})