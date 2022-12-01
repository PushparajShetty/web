
import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';
//import Signb from './Signb';



export default function menu(props) {
  const navigate = useNavigate();
  var d1=props.display1;
  var d2=props.display2
  var ob1,ob2,i;
  const moviename=["KANTARA","PUSHPA","KGF2","GODFATHER","BEDHIYA","PATHAN"]
  const movieid=["movie1","movie2","movie3","movie4","movie5","movie6"]
  function handleSearch(event)
  {
    event.preventDefault()
    ob1=document.getElementById("search").value;

    ob1=ob1.toUpperCase()
    var len=moviename.length
    for(i=0;i<len;i++)
    {
     
      if(ob1==moviename[i])
      {
        navigate(movieid[i])
    
      }

    }
    alert("Result not found")
  }
  return (
    <div>
   <nav className="navbar" style={{backgroundColor:"rgb(15, 4, 71)",position: "sticky",
  top: "0"}}>
  <div className="container-fluid" >
    
  
  <img src="movie.jpg" alt="Bootstrap"  height="50" style={{padding:"1px 0px  1px 100px "}}/>
        
    <h1 style={{color:"whitesmoke"}}>Movie Ticket</h1> 
      <form className="d-flex" role="search"  >
      <input className="form-control me-2"  id="search"type="search" placeholder="Search for movies" aria-label="Search" style={{width:"400px" }}/>
      <button  onClick={handleSearch} className="btn btn-outline-success" type="submit">Search</button>
    </form>
     
    <Link to="Sign-in">
    <button type="button"  style={{display:d1}}  id="b1" className="btn btn-primary" >Sign in</button>
    </Link>
    <Link to="Sign-out">
    <button type="button"  style={{display:d2}}  onClick={props.toggle} id="b2" className="btn btn-primary" >Sign out</button>
    </Link>
   {/* <Signb mode={props.mode}/> */}

     

     
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg" style={{backgroundColor:"white"}} >
    <span className="navbar-toggler-icon"></span>
  </button>
    <div className="offcanvas offcanvas-end"  id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
    ...
  </div>

   
  
 
  </div>
  </nav>
  
      
    </div>
  )
}

