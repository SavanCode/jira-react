import React from "react"
import { useEffect,useState } from "react"
import { SearchPanel } from "./SearchPanel"
import { List } from "./List" 
import  {cleanObject,useMount,useDebounce} from '../utils'
import * as qs from 'qs'

const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen=()=>{
    const [users,setUsers] = useState([])
    const [list,setList] = useState([])
    const [param ,setParam] = useState({
        name:'',
        personId:''
    })

    const debouncedParam = useDebounce(param,2000)

    //请求数据
    useEffect(()=>{   
        //?name=${param.name}&personId=${param.personId} 
        //fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async response=>{
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`).then(async response=>{
            if(response.ok){
                console.log("param",param)
                console.log("debouncedParam",debouncedParam)
                const jsonData = await response.json();
                console.log(jsonData)
                setList(jsonData)
            }
        })
        // },[param]) // 下面的做了debounce处理
    },[debouncedParam])
    
    useEffect(()=>{   
        fetch(`${apiUrl}/users`).then(async response=>{
            if(response.ok){
                const jsonData = await response.json();
                setUsers(jsonData)
                //console.log("users",users)
            }
        })
    },[])

    useMount( 
        ()=>{   
            fetch(`${apiUrl}/users`).then(async response=>{
                if(response.ok){
                    const jsonData = await response.json();
                    setUsers(jsonData)
                    //console.log("users",users)
                }
            })
        }
    )

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