import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Error from "./pages/ErrorPage"
import Story from "./pages/MyWorks"
import { useMediaQuery } from "react-responsive"
import { Avatar, IconButton } from "@mui/material"
import './App.css'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react"
import Skills from "./pages/Skills"
import Achievements from "./pages/Achive"
import Contact from "./pages/contact/Contact"


function App() {
  const isDesktopOrLaptop = useMediaQuery({
  query: '(min-width: 1000px)'
  })

  const rotateStyle={
    transform : 'rotateY(45deg) translateZ(50px) translate(-20vw,0%)',
    transition : "transform 0.5s ease-in-out",
    display:"flex", marginTop:"10vh",
  }

  const rotateBackStyle={
    transition : "transform 0.5s ease-in-out",
    display:"flex", marginTop:"10vh"

  }
  const [bend, setBend] = useState(false);

  return (
    <div style={{width:"100vw", height:"100vh"}} className="mainWindow">
      <div style={{marginLeft:"6vw", width:"80vw"}} className="w-0 md:w-70 lg:w-80 text-center sm:text-left" >
        <div className="bar">
          <div className="Logo text-4xl font-bold">
            <Avatar src="/logo.jpeg" style={{marginTop:"0.2vh", marginRight:"1vw"}}/>
              Deviant
          </div>
          <IconButton style={{color:"white", marginTop:"0.8em",fontWeight:"bolder",marginRight:"-5em"}}
            onClick={()=>{
              setBend(!bend)
            }}>
            <MenuIcon/>
          </IconButton>
        </div>
     
        <div style={bend?rotateStyle:rotateBackStyle}>
          <BrowserRouter>
          <div style={isDesktopOrLaptop&&!bend?{visibility:"visible"}:{visibility:"hidden"}}>
          <Navbar/>
          </div>
          <Routes location={location}>
            <Route path="/" element={<Home/>}/>
            <Route path="/journey" element={<Story/>}/>
            <Route path="/skills" element={<Skills/>}/>
            <Route path="/achievements" element={<Achievements/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="*" element={<Error/>}/>
          </Routes>   
          </BrowserRouter>
        </div>
      </div>
    </div>
  )
}

export default App
