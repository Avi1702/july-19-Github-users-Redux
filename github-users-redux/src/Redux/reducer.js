import { SEARCH,LOADING,ERROR, SUCCESS } from "./actionType";
 const initialState={

    github:{
        loading:false,
        error:false,
        data:[]
    }

 }
 export const reducer=(state=initialState,{type,payload})=>{


    switch(type){

        case SEARCH:
            return{
            ...state,
            github:{
                ...state.github,
                data:payload
            }
        
            }
            case SUCCESS:
                return{
                ...state,
                github:{
                    ...state.github,
                    loading:false,
                    error:false
                }
            
                }
        case LOADING:
            return{
                ...state,
                github:{
                    ...state.github,
                    loading:true,
                    error:false,
                }  
                }
        case ERROR:
            return{
                ...state,
                github:{
                    ...state.github,
                    error:true,
                    loading:false
                } 
            }
            default:
                return {...state}
 }
}