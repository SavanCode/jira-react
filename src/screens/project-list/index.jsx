import React from "react"
import { useEffect,useState } from "react"
import { SearchPanel } from "./SearchPanel"
import { List } from "./List" 

const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen=()=>{
    const [users,setUsers] = useState([])
    const [list,setList] = useState([])
    const [param ,setParam] = useState({
        name:'',
        personId:''
    })
    //请求数据
    useEffect(()=>{   
        fetch(`${apiUrl}/projects`).then(async response=>{
            if(response.ok){
                setList(await response.json())
            }
        })
    },[param])
    
    useEffect(()=>{   
        fetch(`${apiUrl}/users`).then(async response=>{
            if(response.ok){
                setList(await response.json())
            }
        })
    },[])

    // useEffect(()=>{  
    //     fetch('http://localhost:3001/users')
    //     .then(response => response.json())
    //     .then(data => {
    //     console.log('Success:', data);
    //     })
    //     .catch((error) => {
    //     console.error('Error:', error);
    //     });
    // },[])
 
    return <div>
        <SearchPanel param={param} setParam={setParam} users={users}/>
        <List list={list} users={users}/>
    </div>
}