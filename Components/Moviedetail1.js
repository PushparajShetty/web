import React from 'react'
import './poster.css';
import movie1 from './kantara.mp4'
import { useLocation,useNavigate } from 'react-router-dom';

export default function Moviedetail() {
  const location = useLocation();
  const navigate = useNavigate();
  function handleClick()
  {
    if(location.state.name=="")
    {
      navigate("/Sign-in")
    }
    else{
      navigate("/ticket" ,{state:{id:1,name:"KANTARA"}})
    }
  }
  return (<>
    <div>
      <div>
        <div style={{float:"left",paddingLeft:"15px",paddingTop:"50px"}}>
        <video src={movie1} poster="https://th.bing.com/th/id/OIP.Si4VEtfYnwv5ZuzMEeZZ6AHaKs?pid=ImgDet&rs=1" width="440" height="480" style={{borderRadius:"20px",borderBottom:"28px solid black",borderLeft:"5px solid black",borderTop:"5px solid black",borderRight:"5px solid black"}} controls />
        <div style={{color:"whitesmoke",position:"absolute",top:"80.6%",left:"11.9%"}}><strong>In cinemas now</strong></div>
        </div>
        <div style={{float:"left",lineHeight:"0.4",paddingTop:"50px"}}>
        <h1 style={{paddingLeft:"20px",paddingTop:"35px"}}>KANTARA (KANNADA)</h1>
        <div style={{paddingLeft:"23px"}}>
        <svg height="35" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 210">
                <polygon points="100,10 40,198 190,78 10,78 160,198"
              style={{fill:"gold",fillRule:"nonzero"}} />
        </svg>
        <div style={{position:"absolute",left:"34.2%",top:"18.4%"}}><h2>9.9/10 <h6 style={{display:"inline"}}>131.5K ratings</h6></h2></div>
        </div>
        <div style={{paddingLeft:"25px",lineHeight:"3"}}>
          <bold style={{border:"0px solid black",paddingLeft:"4px",paddingRight:"4px",paddingBottom:"2px",backgroundColor:"#E0E0E0",marginRight:"5px",color:"black"}}><strong>2D</strong></bold>
          <bold style={{border:"0px solid black",paddingLeft:"4px",paddingRight:"4px",paddingBottom:"2px",color:"black",backgroundColor:"#E0E0E0"}}><strong>KANNADA</strong></bold>
        </div>
        <div style={{lineHeight:"1.3",paddingLeft:"25px"}}>
          <strong style={{lineHeight:"1.3"}}>2hr 30m - Adventure, Drama, Thriller - U/A - 30 Sep, 2022</strong>
        </div>
        <div style={{paddingLeft:"23px",lineHeight:"1"}}>
          <p>It involves culture of Kambla and Bhootha Kola. A human and nature conflict<br/>where Shiva is the rebellion who works against nature. A loop leads to war<br/>between villagers and evil forces. Will he be able to replace peace in the<br/> village?</p>
        </div><br/>
        <div style={{paddingLeft:"23px",lineHeight:"20px"}}>
          <strong>Cast and crew</strong>
          <ul style={{lineHeight:"1.3"}}>
            <li><strong>Directed by : </strong>Rishab Shetty</li>
            <li><strong>Written by : </strong>Rishab Shetty</li>
            <li><strong>Produced by : </strong>Vijay Kiragandur</li>
            <li><strong>Starring : </strong>Rishab Shetty, Sapthami Gowda, Kishore, Achyuth Kumar, Pramod Shetty</li>
            <li><strong>Music by : </strong>B. Ajaneesh Loknath</li>
            <li><strong>Cinematography : </strong>Arvind S. Kashyap</li>
          </ul>
        </div>
        <div style={{paddingLeft:"23px"}}>
        <button id="book" type="submit"  onClick={handleClick} onMouseOver={()=>{document.getElementById("book").style.backgroundColor="#C51162"}} onMouseOut={()=>{document.getElementById("book").style.backgroundColor="#F50057"}} style={{position:"absolute",top:"65.6%",width:"20%",height:"32px",fontSize:"23px",backgroundColor:"#F50057",border:"0px solid #0288D1",color:"whitesmoke",borderRadius:"9px",paddingTop:"5px",paddingBottom:"5px"}}>Book tickets</button>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}