import React from 'react'
import axios from "axios"
import { useDispatch } from 'react-redux'
import { Loading, Search, Success } from '../Redux/actions'
import { useSelector } from 'react-redux'

export const GithubRepo = () => {

    // const [idata,setIdata]=React.useState([])
    const [input,setInput]=React.useState("")
    const {loading,error,data}=useSelector(state=>state.github)

    const dispatch=useDispatch()
   
    // const fetchData=()=>{

    //     dispatch(Loading())
    // axios.get(`https://api.github.com/search/repositories?q=${input}&per_page=10`)
    //     .then((res)=>{dispatch(Search(res.data.items))})
    //     .catch((err)=>dispatch(Error()))
       
    // }
    

    // React.useEffect(()=>{
    //     dispatch(Loading())
    //     axios.get(`https://api.github.com/search/repositories?q=react&per_page=10`)
    //     .then((res)=>{setIdata(res.data.items)})
    //     .catch((err)=>{dispatch(Error())})
    //     },[])

    //  React.useEffect(()=>{
    // fetchData()
    //  },[data])   

  const handleSearch=()=>{
            dispatch(Loading())
            axios.get(`https://api.github.com/search/repositories?q=${input}&per_page=10`)
            .then((res)=>{dispatch(Search(res.data.items));dispatch(Success())})
            .catch((err)=>{dispatch(Error())})
      
        }
  return (
    <div>
         <h1>Search for Git Hub Reposotories here</h1>
        <input type={"text"} value={input} placeholder="Search" onChange={(e)=>setInput(e.target.value)}></input>
        <button onClick={handleSearch}> Search</button>
        <br/><br/>
        
       <table>
        <thead>
            <tr>
                 <td>Id</td>
                <td>Name</td>
                <td>Full_Name</td>
                
            </tr>
        </thead>
        <tbody>
          {
            loading?<div>....loading</div>:error?<div>something went wront</div>:
            data.map((items)=>{
            return<tr>
                <td>{items.id}</td>
                <td>{items.name}</td>
                <td>{items.full_name}</td>
            </tr>})
          }
        </tbody>
       </table>

    </div>
  )
}
