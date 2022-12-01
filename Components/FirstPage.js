import React from 'react'
import './FirstPage.css';
import { Link,useNavigate,useLocation} from 'react-router-dom'
import { useEffect } from 'react';

export default function FirstPage(props) {
    const navigate = useNavigate();
    const location = useLocation();
  var d1=props.display1;
  var d2=props.display2
  var ob1,ob2,ob3,ob4,ob5,i;
  const moviename=["KANTARA","PUSHPA","KGF2","GODFATHER","BEDHIYA","PATHAN"]
  const movieid=["movie1","movie2","movie3","movie4","movie5","movie6"]
 
useEffect(()=>
{
    console.log(location.state)
     if(location.state!=null)
     {
         
      var ob2=document.getElementById("user")
      var ob3=document.getElementById("email")
    
     
     const username=location.state.name;
    const email=location.state.email
     ob2.innerHTML="User Name:"+username 
     ob3.innerHTML="email:"+email
    
    }
     
},[])
function handleOut(event)
 {
    event.preventDefault()
    var ob4=document.getElementById("user")
    var ob5=document.getElementById("email")
    
    ob4.innerText=""
    ob5.innerHTML=""

  }
  
  function handleSearch(event)
  {
    event.preventDefault()
    ob1=document.getElementById("search").value;

    ob1=ob1.toUpperCase()
    var len=moviename.length
    var username=document.getElementById("user").innerHTML
    for(i=0;i<len;i++)
    {
     
      if(ob1==moviename[i])
      {
        navigate(movieid[i] ,{state : {name: username }})
        //alert(username)
        break;
    }
    if(i==0)
    {
        alert("no result found ")
    }
    

    }
    
  }
  function handlemovie1()
  {
    var username=document.getElementById("user").innerHTML
    navigate("/movie1" ,{state : {name: username }})
  }
 
  return (
    <>
    <nav className="navbar" style={{backgroundColor:"rgb(15, 4, 71)",position: "sticky",
  top: "0"}}>
  <div className="container-fluid" >
    
  
  <img src="movie.jpg" alt="Bootstrap"  height="50" style={{padding:"1px 0px  1px 100px "}}/>
        
    <h1 style={{color:"whitesmoke"}}>Movie Ticket</h1> 
      <form className="d-flex" role="search"  >
      <input className="form-control me-2"  id="search"type="search" placeholder="Search for movies" aria-label="Search" style={{width:"400px" }}/>
      <button  onClick={handleSearch} className="btn btn-outline-success" type="submit">Search</button>
    </form>
    <button type="button"  style={{display:d2}}  onClick={(event)=>{handleOut(event),props.toggle()}} id="b2" className="btn btn-primary" >Sign out</button>
    
    <Link to="Sign-in">
    <button type="button"  style={{display:d1}}  id="b1" className="btn btn-primary" >Sign in</button>
    </Link>
    
    
     

     
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg" style={{backgroundColor:"white"}} >
    <span className="navbar-toggler-icon"></span>
  </button>
    <div className="offcanvas offcanvas-end"  id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
    <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#" style={{fontWeight:"bold",paddingBottom:"10px"}}>Home</a>
          </li>
          <br/>
          {/* <li className="nav-item">
            <a className="nav-link active" href="#" style={{opacity:"1"}}>Feedback</a>
          </li> */}
          <li>
            <p id="user" style={{fontWeight:"bold"}}></p>
            <p id="email" style={{fontWeight:"bold"}}></p>
          </li>
         
           

    </ul>  
     
    </div>
    </div>

   
  
 
  </div>
  </nav>
   <div style={{backgroundColor:"white"}}>
        
        <h2 style={{textDecoration:"underline",marginTop:"50px",marginBottom:"50px",marginLeft:"20px",color:"black"}}>Recommended Movies</h2>
    
    <div className="recommendm" style={{width:"100%"}}>
        <div className="movie" >
           
        <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS45LzEwICAxMjkuNksgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00330541-cdkulgzsnw-portrait.jpg"  onClick={handlemovie1} alt="no image1"  width="300px" style={{borderRadius:"20px",cursor:"pointer"}}/>
        
        <h3 style={{fontWeight:"bold"}}>Kantara(Kannada)</h3>
        <p style={{color: "rgb(102, 102, 102)"}}>Adventure/Drama/Thriller</p>
        </div>
        <div className="movie">
            <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS45LzEwICAxNS41SyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00334393-ddjvuftqfu-portrait.jpg"  alt="no image2" width="300px" style={{borderRadius:"20px"}}/>
            <h3 style={{fontWeight:"bold"}}>Gandhada Gudi</h3>
        <p style={{color: "rgb(102, 102, 102)"}}>Adventure/Family/Musical</p>
        </div>
        <div className="movie">
            <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MjExayBsaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00310792-qkfgylplju-portrait.jpg" alt="no image3" width="300px" style={{borderRadius:"20px"}}/>
            <h3 style={{fontWeight:"bold"}}>Black Panther(Wakanda Forever)</h3>
        <p style={{color: "rgb(102, 102, 102)"}}>Adventure/Drama/Thriller</p>
        </div>

        <div className="movie">
            <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS43LzEwICAyOC4xSyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00343241-pejbcwjyhn-portrait.jpg" alt="no image4" width="300px" style={{borderRadius:"20px"}}/>
            <h3 style={{fontWeight:"bold"}}>Love Today</h3>
        <p style={{color: "rgb(102, 102, 102)"}}>Drama/Romantic</p>
        </div>

    </div>
    <div style={{width:"100%",height:"200px",backgroundColor:"rgb(153,153,153)" ,fontSize:"30px" ,marginTop:"50px"}}>
        
    <h4 style={{fontWeight:"bold",paddingTop:"20px"}}>For more details contact:</h4>
        
        
        <div style={{textAlign:"center"}}>
        <img src='https://img.icons8.com/ios-glyphs/2x/facebook-new.png' width="70px" style={{padding:"10px"}}></img>
        <img src='https://img.icons8.com/ios-glyphs/2x/twitter.png' width="70px" style={{padding:"10px"}}></img>
        <img src='https://img.icons8.com/ios-glyphs/2x/instagram-new.png' width="70px" style={{padding:"10px"}}></img>
        </div>
    </div>
    </div>
  
    </>
  )
}
