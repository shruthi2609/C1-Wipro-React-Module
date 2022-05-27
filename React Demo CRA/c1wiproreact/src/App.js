import SignUpComponent from "./components/SPA Components/SignUpComponent"
import {BrowserRouter,Link,Routes,Route} from "react-router-dom"
import DashBoard from "./components/SPA Components/DashBoard"
import HomePage from "./components/SPA Components/HomePage"
import Search from "./components/SPA Components/Search"
function App(){
  return(
    <div>
     <BrowserRouter>
   {  /*  <Link to="/signup">signup</Link>
       <Link to="/dashboard">DashBoard</Link>*/}
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
export default App