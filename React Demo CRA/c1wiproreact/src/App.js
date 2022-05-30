/*import SignUpComponent from "./components/SPA Components/SignUpComponent"
import {BrowserRouter,Link,Routes,Route} from "react-router-dom"
import DashBoard from "./components/SPA Components/DashBoard"
import HomePage from "./components/SPA Components/HomePage"
import Search from "./components/SPA Components/Search"
function App(){
  return(
    <div>
     <BrowserRouter>
  <Link to="/signup">signup</Link>
       <Link to="/dashboard">DashBoard</Link>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path='/signup' element={<SignUpComponent></SignUpComponent>}></Route>
        <Route path="/dashboard/:username" element={<DashBoard></DashBoard>}></Route>
        <Route path="/search" element={<Search></Search>}></Route>
      </Routes>

     </BrowserRouter>
    </div>
  )
}
export default App*/

/*import NetworkCall from "./components/Network Calls/SimpleNetworkCallClass"
export default function App(){
  return(
    <NetworkCall></NetworkCall>
  )
}*/

import {BrowserRouter,Link,Routes,Route} from "react-router-dom"
import { Home,AdminPage,ContactPage} from "./components/Protected Routes/AllComponents"
import Navigation from "./components/Protected Routes/AllComponents"
import { useState } from "react"
export default function App(){
  const [user,setUser]=useState(null)
  const handleLogin=()=>{
    setUser({email:"test@gmail.com",role:"Admin"})
  }
  return(
    <>
    <button onClick={handleLogin}>login</button>
    <BrowserRouter>
    <Navigation></Navigation>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/admin" element={<AdminPage user={user}></AdminPage>}></Route>
      <Route path="/contact" element={<ContactPage></ContactPage>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}



