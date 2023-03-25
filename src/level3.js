import { useEffect, useState } from 'react';
import "./level3.css"

function Third(){
    const [data,setData]=useState(null)
   
    useEffect(()=>{
        fetch("http://localhost:3008/Third")
        .then((resp)=>{
            return resp.json()
        })
        .then((res)=>{
            console.log(res)
            setData(res)
        })
    },[])
      
    const Delet=(id,)=>{       
        
        fetch("http://localhost:3008/Third/"+id,{
            method:"DELETE"
        })
        .then((resp)=>{
            alert("deleted saved email")
        })
        .catch((err)=>{
            console.log(err.message)            
           })
    }
    return (
        <div><br/>
            <center>
                <div id="di">
                    <div id="post">
                        <h1>Mobile No/Phonenumbers List</h1><br /><br />
                        <table>
                        <thead id="th">
                            <tr id="tr">
                                <td id="td2">No</td>
                                <td id="td">Email/Phonenumber</td>
                                <td id="td1">Actions</td>
                            </tr>
                        </thead>
                        <tbody id="th1">
                           {data && data.map((item)=>(
                                <tr key={item.id} id="tr">
                                    <td id="td2">{item.id}</td>
                                    <td id="td" >{item.email}</td>
                                    <td id="td1"><button id="id3" onClick={()=>{Delet(item.id)}}>Delete</button></td>
                                </tr>
                            ))}                        
                        </tbody>
                        </table>
                    </div>
                </div>
            </center>
        </div>
    )
}
export default Third;