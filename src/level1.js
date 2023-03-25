import React from "react";
import './level1.css'
import { BsWhatsapp } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { Link } from "react-router-dom";


function First(){
    const [email,setEmail]=useState("")
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }

    const handleSubmit=(e)=>{
        let data={email}
      fetch("http://localhost:3008/Third",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(data)
      })
      .then(()=>{
        alert("saved succesfully")
      })
      .catch((err)=>{
        console.log(err.message)
      })
    }
    return(
            <div><br/>
                <center>
                    <div id="d">
                        <form id="position" onSubmit={handleSubmit}>
                            <h1>Get started</h1><br/>
                            <input id="input1" type={"text"} placeholder={"Mobile/Email"} value={email} onChange={handleEmail} /><br/><br/>
                            &ensp;&ensp; <button id="but">Save</button>&ensp;&ensp; <button id="b"><Link to="/otp"><h3>Continue</h3></Link></button><br/><br/>
                            <h4>Or Continue with</h4>
                            <button id="button1"><BsWhatsapp/>&ensp;WhatsApp</button>&ensp;&ensp;&ensp;&ensp;
                            <button id="button2"><FcGoogle/> Google</button><br/><br/>
                            <p>By continuing you agree to our <span id="id">terms</span> and <span id="id">policies</span>.</p>
                        </form>
                    </div>
                </center>
               
                
            </div>            
        )
    }

export default First;