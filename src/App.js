import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Navbar from "./Components/Navbar"
import NotFound from "./Components/NotFound"


function App(){
  return(
      <div>
        <BrowserRouter>
         <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>
      {/*<Events/>
        <h1>This is about props examples</h1>
        <PropsExample name="prasanna" age="20"/>
        <PropsExample name="jahnavi" age="20"/>
        <PropsExample name="reshma" age="20"/>
        <PropsExample name="thanuja" age="20"/>*/}
      </div>
    )
}
export default App

