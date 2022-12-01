import React,{} from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function Signup(props) {
  
  const navigate = useNavigate();
  var name,mail,password,conpassword;
  var obj={}
    function  handleSubmit()
  {
   event.preventDefault()
    
    name=document.getElementById("username").value;
    mail=document.getElementById("email").value;
    password=document.getElementById("password").value;
    conpassword=document.getElementById("retypepassword").value;
    
    
    
      
      var obj={name:name}
    
    obj.email=mail;
    obj.password=password;
    obj=JSON.stringify(obj)
    alert(obj)
     fetch("http://localhost:8080/submit",{
      method:"POST",
      headers:{"Content-type":"application/json"},
      body:obj
    })
    navigate('/',{state : {name: name, email: mail}});
    
   

 
  
  } 
  function handlePassword()
  {
    password=document.getElementById("password").value;
    conpassword=document.getElementById("retypepassword").value;
    
    if(password!=conpassword)
    document.getElementById("pop").innerHTML='Passwords do not match!!'
  
  }


  

  return (<>
    <div>
      <div style={{ paddingTop: "70px", padding: "85px", background: "url(https://images.theconversation.com/files/178400/original/file-20170717-6046-6io9ig.jpg?ixlib=rb-1.1.0&q=15&auto=format&w=754&h=503&fit=crop&dpr=3)", backgroundSize: "cover", backgroundAttachment: "fixed" }}>
        <form  onSubmit={()=>{ handleSubmit(); props.toggle();}} style={{ minWidth: "450px", maxWidth: "400px", width: "100%", margin: " 160px auto", padding: "25px", borderRadius: "25px", border: "1px solid grey", backgroundColor: "whitesmoke", opacity: "0.9" }}>
          <h1 style={{ letterSpacing: "1px", marginBottom: "33.5px", textAlign: "center", color: "black" }}>CREATE NEW ACCOUNT</h1>
          <input id="username" type="text" size="25" placeholder="Username" title="your username should be atleast 6 character long" style={{ marginLeft: "15px", fontSize: "23px", borderRadius: "20px", padding: "9px", marginBottom: "19px", float: "left" }} required pattern=".{6,}" />
          <input type="email" id="email" size="25" placeholder="Email" style={{ marginLeft: "15px", fontSize: "23px", borderRadius: "20px", padding: "9px", marginBottom: "20px", float: "left" }} required />
          <input type="password" size="25" placeholder="Password" id="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" style={{ marginLeft: "15px", fontSize: "23px", borderRadius: "20px", padding: "9px", marginBottom: "20px" }} required />
          <input id="retypepassword" type="password" size="25" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" placeholder="Re-Enter Password" style={{ marginLeft: "15px", fontSize: "23px", borderRadius: "20px", padding: "9px", marginBottom: "20px" }} required />
          <span id="pop"></span>
          <input id="button" type="submit" value='submit' style={{ marginLeft: "17px", width: "90%", borderRadius: "20px", border: "0px solid black", fontSize: "23px", paddingTop: "9px", paddingBottom: "9px", backgroundColor: "#0277BD", color: "whitesmoke" }} 
        
           onClick={handlePassword}onMouseOut={() => { document.getElementById("button").style.backgroundColor = "#0277BD" }} onMouseOver={() => { document.getElementById("button").style.backgroundColor = "#015798" }} />
        </form>
      </div>
    </div>
  </>
  )
}
