import { SEARCH,LOADING,ERROR, SUCCESS } from "./actionType"



export const Search=(payload)=>{

    return {
        type:SEARCH,
        payload
    }
}

export const Loading=()=>{

    return {
        type:LOADING
    }
}

export const Error=()=>{

    return {
        type:ERROR
    }

}

export const Success=()=>{

    return {
        type:SUCCESS
    }
}