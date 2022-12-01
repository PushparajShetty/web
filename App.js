
//import Menu from './Components/Menu';
import FirstPage from './Components/FirstPage';
import Moviedetail1 from './Components/Moviedetail1'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Seat from './Components/Seat'
import Payment from './Components/Payment'
import { useEffect ,useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Signb from './Components/Signb';
function App() {
  

const [display1,setDisplay1]=useState("block")
const [display2,setDisplay2]=useState("none")

useEffect(()=>
{
  var itemPref1 = window.localStorage.getItem('default1')
  var res1=JSON.parse(itemPref1)
  var itemPref2= window.localStorage.getItem('default2')
  var res2=JSON.parse(itemPref2)
  setDisplay1(res1)
  setDisplay2(res2)

},[])

useEffect(()=>
{
  window.localStorage.setItem('default1', JSON.stringify(display1));

},[display1])

useEffect(()=>
{
  window.localStorage.setItem('default2', JSON.stringify(display2));

},[display2])

  const toggleMode=()=>
  {
    if(display1=="block")
    {
      
      setDisplay1("none")
      setDisplay2("block")
      
      alert(display1)
    }
    else if(display2=="block")
    {
      setDisplay2("none")
      setDisplay1("block")
      alert("hii")

    }
  }



  return (
    <>
  
    <Router>
  <Routes>
    <Route exact path="/Sign-in" element={<Login />}>
    
</Route>

    <Route exact path="/Sign-up" element={<Signup  toggle={toggleMode}/>}>
    
</Route> 

    <Route exact path="/" element={<FirstPage display1={display1} display2={display2} toggle={toggleMode}/>}>
        </Route>

     
        <Route exact path="/movie1" element={<Moviedetail1/>}>
        </Route>
        <Route exact path="/ticket" element={<Seat/>}>
        </Route>
        <Route exact path="/payment" element={<Payment/>}>
        </Route>
        
      </Routes>
    </Router>
    
     
   </>
   
  )
 }


export default App;

