import React from 'react'
import { useNavigate,useLocation } from 'react-router-dom'

export default function payment() {
    const location = useLocation()
    function handlepayment()
    {
        var movie=location.state.id;
        var json_data=location.state.array;
        console.log("hello",json_data)
        var url="http://localhost:8080/ticket/"+movie
        fetch(url,
          {method:"PUT",
          headers:{"Content-type":"application/json"},
          body:json_data})
    }
  return (
    
    <div>
    <button type="Submit" onClick={handlepayment}>pay now</button>
    </div>
  )
}
