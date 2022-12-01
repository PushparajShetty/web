import React from 'react'
import './seat.css'
import { useState,useEffect} from 'react'
import { useLocation,useNavigate } from 'react-router-dom'

export default function Seat() {
  const location = useLocation()
  const navigate=useNavigate()
  var [arr,setarr]=useState([])
  var arr1=[1,2]
  var seatsused=[];
  var obj,obj1;
  var i;
  useEffect(()=>
  {
    var id=location.state.id;
    var url="http://localhost:8080/ticket/"+id
     const fetchData= async()=>{

      const data= await fetch(url)
      .then(res => res.json())
      .then(data => {
          console.log(data)
          for (i in data)
          {
            obj=document.getElementById(data[i])
            obj.style.color="orange"
            obj.style.border="2px solid orange "
            console.log(obj)

          }
  
      })
     }
    seatsused=fetchData()
    

    },[])
    
  function design(event)
  { 
    event.preventDefault()
    if(event.target.style.backgroundColor==="green" && event.target.style.color==="white")
    {
      console.log( event.target.style.backgroundColor)
      console.log(event.target.style.color)
      event.target.style.backgroundColor="white"
      event.target.style.color="green"
      setCount(count-1)
      obj1=event.target.id;
      obj1=parseInt(obj1)
     
      const newarr = arr.filter((i) => 
      i !== obj1);
      setarr(newarr)
      console.log(arr)
      
    }
    else if(event.target.style.backgroundColor==="white" && event.target.style.color==="green")
    {
      console.log( event.target.style.backgroundColor)
      console.log(event.target.style.color)
      
      event.target.style.backgroundColor="green"
      event.target.style.color="white"
      setCount(count+1)
      obj1=event.target.id;
      obj1=parseInt(obj1)
      setarr([...arr,obj1])
      console.log(arr)
      
      
    }
  }
  function handleBook()
  {
    if(count>0)
    {
    var movie=location.state.id;
    var json_data={data:arr}
    json_data=JSON.stringify(json_data)
   navigate('/payment',{state:{id:movie,array:json_data}})
    }
  }
  
  
  let date=new Date().getDate()
  let month=new Date().getMonth()
  const mon=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
  const [count,setCount]=useState(0)

  return (
    <div>
      <header style={{color:"whitesmoke",backgroundColor:"black",lineHeight:"1.5"}}>
        <div style={{fontSize:"27px",paddingLeft:"30px",paddingTop:"9px"}}>
          {location.state.name} (U/A)
          <span style={{paddingLeft:"1000px"}}>
          <span style={{padding:"5px",paddingLeft:"15px",paddingRight:"15px",border:"2px dashed white",fontSize:"20px"}}>{count} Tickets</span>
          </span>
        </div>
        <div style={{paddingBottom:"12px",paddingLeft:"30px",fontSize:"18px"}}>
          INOX: Nexus, Whitefield | Today, 
          <span> {date}</span>
          <span> {mon[month]},</span>
          <span> 9:40 AM</span>
        </div>
      </header>
      <div style={{position:"absolute",top:"50%",left:"5%"}}>
      <button style={{backgroundColor:"green",color:"white"}}>0</button>
      <span style={{color:"green",fontSize:"18px"}}> Selected</span>
      <button style={{position:"absolute",top:"160%",left:"1%"}}>0</button>
      <span style={{position:"absolute",top:"190%",left:"53%",color:"green",fontSize:"18px"}}> Available</span>
      <button style={{position:"absolute",border:"2px solid orange",color:"orange",left:"2%",top:"330%"}}>0</button>
      <span style={{position:"absolute",top:"340%",left:"55%",color:"orange"}}>Not Available</span>
      </div>
      <div id="main" style={{textAlign:"center",marginTop:"10%",lineHeight:"3.5"}}>
        <button id="screen" style={{width:"900px",marginBottom:"40px"}}>SCREEN THIS WAY</button>
        <div>
          <span style={{marginInlineEnd:"65px"}}>
        <button  className='s' style={{backgroundColor: "white",color: "green"}} onClick={design} id="1">1</button>
        <button className='s'  style={{backgroundColor: "white",color: "green"}}onClick={design} id="2">2</button>
        <button className='s' style={{backgroundColor: "white",color: "green"}}onClick={design} id="3">3</button>
        <button className='s' style={{backgroundColor: "white",color: "green"}}onClick={design} id="4">4</button>
        <button className='s' style={{backgroundColor: "white",color: "green"}}onClick={design} id="5">5</button>
         </span>
         <span>
        <button className='s' style={{backgroundColor: "white",color: "green"}}onClick={design} id="6">6</button>
        <button className='s' style={{backgroundColor: "white",color: "green"}}onClick={design} id="7">7</button>
        <button className='s' style={{backgroundColor: "white",color: "green"}}onClick={design} id="8">8</button>
        <button className='s' style={{backgroundColor: "white",color: "green"}}onClick={design} id="9">9</button>
        <button className='s' style={{backgroundColor: "white",color: "green"}}onClick={design} id="10">10</button>
         </span>
        </div>
        <div>
          <span style={{marginInlineEnd:"65px"}}>
        <button className='s' style={{backgroundColor: "white",color: "green"}}onClick={design} id="11">11</button>
        <button className='s' style={{backgroundColor: "white",color: "green"}}onClick={design} id="12">12</button>
        <button className='s' style={{backgroundColor: "white",color: "green"}}onClick={design} id="13">13</button>
        <button className='s' style={{backgroundColor: "white",color: "green"}}onClick={design} id="14">14</button>
        <button className='s' style={{backgroundColor: "white",color: "green"}}onClick={design} id="15">15</button>
          </span>
          <span>
        <button className='s' style={{backgroundColor: "white",color: "green"}}onClick={design} id="16">16</button>
        <button className='s' style={{backgroundColor: "white",color: "green"}}onClick={design} id="17">17</button>
        <button className='s' style={{backgroundColor: "white",color: "green"}}onClick={design} id="18">18</button>
        <button className='s' style={{backgroundColor: "white",color: "green"}}onClick={design} id="19">19</button>
        <button className='s' style={{backgroundColor: "white",color: "green"}}onClick={design} id="20">20</button>
          </span>
        </div>
        <div>
        <span style={{marginInlineEnd:"65px"}}>
        <button className='s' style={{backgroundColor: "white",color: "green"}}onClick={design} id="21">21</button>
        <button className='s' style={{backgroundColor: "white",color: "green"}}onClick={design} id="22">22</button>
        <button className='s' style={{backgroundColor: "white",color: "green"}}onClick={design} id="23">23</button>
        <button className='s' style={{backgroundColor: "white",color: "green"}}onClick={design} id="24">24</button>
        <button className='s' style={{backgroundColor: "white",color: "green"}}onClick={design} id="25">25</button>
          </span>
          <span>
        <button className='s' style={{backgroundColor: "white",color: "green"}}onClick={design} id="26">26</button>
        <button className='s' style={{backgroundColor: "white",color: "green"}}onClick={design} id="27">27</button>
        <button className='s' style={{backgroundColor: "white",color: "green"}}onClick={design} id="28">28</button>
        <button className='s' style={{backgroundColor: "white",color: "green"}}onClick={design} id="29">29</button>
        <button className='s' style={{backgroundColor: "white",color: "green"}}onClick={design} id="30">30</button>
          </span>
        </div>
        <div>
        <span style={{marginInlineEnd:"65px"}}>
        <button className='s' style={{backgroundColor: "white",color: "green"}}onClick={design} id="31">31</button>
        <button className='s' style={{backgroundColor: "white",color: "green"}}onClick={design} id="32">32</button>
        <button className='s' style={{backgroundColor: "white",color: "green"}}onClick={design} id="33">33</button>
        <button className='s' style={{backgroundColor: "white",color: "green"}}onClick={design} id="34">34</button>
        <button className='s' style={{backgroundColor: "white",color: "green"}}onClick={design} id="35">35</button>
          </span>
          <span>
        <button className='s' style={{backgroundColor: "white",color: "green"}}onClick={design} id="36">36</button>
        <button className='s' style={{backgroundColor: "white",color: "green"}}onClick={design} id="37">37</button>
        <button className='s' style={{backgroundColor: "white",color: "green"}}onClick={design} id="38">38</button>
        <button className='s' style={{backgroundColor: "white",color: "green"}}onClick={design} id="39">39</button>
        <button className='s' style={{backgroundColor: "white",color: "green"}}onClick={design} id="40">40</button>
          </span> 
        </div>
        <div>
        <button className='s' style={{backgroundColor: "white",color: "green"}}onClick={design} id="41">41</button>
        <button className='s'  style={{backgroundColor: "white",color: "green"}}onClick={design} id="42">42</button>
        <button className='s' style={{backgroundColor: "white",color: "green"}}onClick={design} id="43">43</button>
        <button className='s' style={{backgroundColor: "white",color: "green"}}onClick={design} id="44">44</button>
        <button className='s' style={{backgroundColor: "white",color: "green"}}onClick={design} id="45">45</button>
        <button className='s'  style={{backgroundColor: "white",color: "green"}}onClick={design} id="46">46</button>
        <button className='s' style={{backgroundColor: "white",color: "green"}}onClick={design} id="47">47</button>
        <button className='s' style={{backgroundColor: "white",color: "green"}}onClick={design} id="48">48</button>
        <button className='s' style={{backgroundColor: "white",color: "green"}}onClick={design} id="49">49</button>
        <button className='s' style={{backgroundColor: "white",color: "green"}}onClick={design} id="50">50</button> 
        <button className='s' style={{backgroundColor: "white",color: "green"}}onClick={design} id="51">51</button> 
        </div>
        <div style={{paddingTop:"34px"}}>
          <button id="screen" onClick={handleBook} style={{border:"2px solid #F50057",borderRadius:"25px",width:"400px"}}>Confirm Tickets</button>
        </div>
      </div>
    </div>
  )
}
