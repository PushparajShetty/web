import React from 'react'
import { Link } from 'react-router-dom';

export default function Login(props) {
  var name,mail,password;
  var obj={}
  async function handleSubmit()
  {
   name=document.getElementById("username").value
   password=document.getElementById("password").value
     obj={name:name}
    obj.password=password;
    obj=JSON.stringify(obj)
    event.preventDefault();
    
    fetch("http://localhost:8080/login",{
      method:"POST",
      headers:{"Content-type":"application/json"},
      body:obj
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)

    })
    
  }
  return (<>
    <div>
        <div style={{paddingTop:"70px",padding:"85px",background:"url(https://images.theconversation.com/files/178400/original/file-20170717-6046-6io9ig.jpg?ixlib=rb-1.1.0&q=15&auto=format&w=754&h=503&fit=crop&dpr=3)",backgroundSize:"cover",backgroundAttachment:"fixed",textAlign:"center"}}>
        <form  onSubmit={handleSubmit} style={{width:"30%",minWidth:"400px",maxWidth:"420px",margin:" 160px auto",padding:"25px",borderRadius:"25px",border:"1px solid grey",backgroundColor:"whitesmoke",opacity:"0.9"}}>

            <h1 id="log"  style={{letterSpacing:"1px",marginBottom:"33.5px",color:"black"}} >LOG IN</h1>
            <input id="username" type="text" size="25" placeholder="Username" style={{fontSize:"23px",borderRadius:"20px",padding:"9px",marginBottom:"19px",float:"left"}} required autoFocus pattern=".{6,}"/>
            
            <input id="password" type="password" size="25" placeholder="Password"  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            style={{fontSize:"23px",borderRadius:"20px",padding:"9px",marginBottom:"20px"}} required />
              
              <input id="button" value="SIGN IN" type="submit" style={{width:"90%",borderRadius:"20px",border:"0px solid black",fontSize:"23px",paddingTop:"9px",paddingBottom:"9px",backgroundColor:"#0277BD",color:"whitesmoke"}} onMouseOut={()=>{document.getElementById("button").style.backgroundColor="#0277BD"}} onMouseOver={()=>{document.getElementById("button").style.backgroundColor="#015798"}}/><br/><br/>
              <span></span>
              <Link to="/Sign-up">
             <strong style={{color:"black"}}>Don't have an account? | </strong>
             </Link>
         </form>
        </div>
    </div>
    </>
  )
}
