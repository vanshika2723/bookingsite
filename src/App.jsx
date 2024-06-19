import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Signin from "./component/Signin"
import Signup from "./component/Signup"
import Card from "./component/Card"
import Navbar from "./component/Navbar"
import Slidebar from "./component/Slidebar"
function App() {
  

  return (
    <>
     <Router>
      <Routes>
        <Route path="/signin"element={<Signin/>}/>
        <Route path="/signup"element={<Signup/>}/>
        <Route path="/card"element={<Card/>}/>
        <Route path="/navbar"element={<Navbar/>}/>
        <Route path="/slidebar"element={<Slidebar/>}/>

      </Routes>
      
     </Router>
    </>
  )
}

export default App
