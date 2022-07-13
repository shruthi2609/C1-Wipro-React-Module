/*import SignUpComponent from "./components/SPA Components/SignUpComponent"
import {BrowserRouter,Link,Routes,Route} from "react-router-dom"
import DashBoard from "./components/SPA Components/DashBoard"
import HomePage from "./components/SPA Components/HomePage"
import Search from "./components/SPA Components/Search"
import HomePageComponent from "./components/User Session components/HomePage"
import SignInComponent from "./components/User Session components/SigninComponent"
import DashBoardComponent from "./components/User Session components/DashBoard"
import SearchComponent from "./components/User Session components/Search"
function App(){
  return(
    <div>
     <BrowserRouter>

       
      <Routes>
        <Route path="/" element={<HomePageComponent></HomePageComponent>}></Route>
        <Route path='/signin' element={<SignInComponent></SignInComponent>}></Route>
        <Route path="/dashboard" element={<DashBoardComponent></DashBoardComponent>}></Route>
        <Route path="/search" element={<SearchComponent></SearchComponent>}></Route>
      </Routes>

     </BrowserRouter>
    </div>
  )
}
export default App

/*import NetworkCall from "./components/Network Calls/SimpleNetworkCallClass"
export default function App(){
  return(
    <NetworkCall></NetworkCall>
  )
}*/

import FunctionCompo from "./components/Network Calls/SimpleNetworkCallFunctions";

/*import {BrowserRouter,Link,Routes,Route} from "react-router-dom"
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
}*/
import {BrowserRouter,Link,Routes,Route} from "react-router-dom"
import HomePage from "./components/ContactManager/HomePage";
import CreateUser from "./components/ContactManager/CreateUser";
import DeleteUser from "./components/ContactManager/DeleteUser";
import SignInComponentInt from "./components/IntegrationOne/SignInComponentInt";
import DashBoard from "./components/IntegrationOne/DashBoardInt";
export default function App(){
  return(
    <div>
      <BrowserRouter>
      <nav>
      <Link to='/signup'>register user</Link>
      </nav>
      <Routes>
        <Route path="/" element={<SignInComponentInt></SignInComponentInt>}> </Route>
        <Route path="/dashboard/:email" element={<DashBoard></DashBoard>}> </Route>
        

      </Routes>
      </BrowserRouter>
    </div>
  )
}





