import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './level2.css';


function Second (){
   const [value,setValue]=useState("")
   const navigate=useNavigate()
       
       const handleValue=(e)=>{
            setValue(e.target.value)
        }
      const Submit=()=>{
        if(value !== 9999){
           alert("invalid OTP")
        }
        else{ 
            navigate("/level3")
        }
      }   
   
        return (
            <div><br/><br/>
                <center>
                    <div id="div">
                        <div id="left">
                            <form onSubmit={Submit} >
                            <h1>Enter OTP</h1><br/>
                            <h4>We have sent a one time password (OTP) to **********. </h4><br/><br/>
                            <input placeholder="OTP" value={value} onChange={handleValue}></input>
                            <button id="button"> -&gt;</button>
                            </form>
                            <h4>Resend OTP in 00:15</h4>
                        </div>
                    </div>
                </center>
            </div>
        )
        }

export default  Second;