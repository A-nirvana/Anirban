import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
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
import Menu from "./components/Menu"
import { RecoilRoot } from "recoil" 
// import page from "./store/page"
// import { currentPage } from "./store/atoms/pages"


function App() {

  // const navigate = useNavigate();

  // const [myElementIsVisible, updateMyElementIsVisible] = useState();
  // const myRef = useRef();
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries, observer) => {
  //     const entry = entries[0];
  //     console.log('entry', entry);
  //     console.log('entry.isIntersecting', entry.isIntersecting);
  //     updateMyElementIsVisible(entry.isIntersecting);
  //   });
  //   observer.observe(myRef.current);
  // }, []);

  const isDesktopOrLaptop = useMediaQuery({
  query: '(min-width: 1000px)'
  })

  const isPhone = useMediaQuery({
    query: '(max-width : 600px)'
  })

  const rotateStyle={
    transform : 'rotateY(45deg) translateZ(50px) translate(-20vw,0%)',
    transition : "transform 0.5s ease-in-out",
    display:"flex", marginTop:"10vh",
    width:"80vw"
  }

  const rotateBackStyle={
    transition : "transform 0.5s ease-in-out",
    display:"flex", marginTop:"10vh",
    width:"100vw"
  }
  const [bend, setBend] = useState(false);

  const menuStyle = {
    visibility : !bend?"hidden":"visible",
    right : isPhone?"-1vw":"-3vw",
    width : !bend?"0":"20vw"
  }

  // if(myElementIsVisible){
  //   navigate(page.links[page.menus.indexOf(useRecoilValue(currentPage))+1]);
  //   const setPage = useSetRecoilState(currentPage);
  //   setPage(page.menus[page.menus.indexOf(useRecoilValue(currentPage))+1])
  // }

  return (
    <div style={{width:"100vw", height:"100vh"}} className="mainWindow">
      <div style={{marginLeft:"6vw", width:"80vw"}} >
        <div className="bar">
          <div className="Logo text-4xl font-bold">
            <Avatar src="/logo.jpeg" style={{marginTop:"0.2vh", marginRight:"1vw"}}/>
              Deviant
          </div>
          <IconButton style={{color:"white", marginTop:"0.8em",fontWeight:"bolder",marginRight:"-5vw "}}
            onClick={()=>{
              setBend(!bend)
            }}>
            <MenuIcon/>
          </IconButton>
        </div>
            
        
        <RecoilRoot>
           
          <BrowserRouter>
          <div style={{display:"flex", justifyContent:"space-between", height:"85%"}}>
            <div style={bend?rotateStyle:rotateBackStyle}>
              <div style={isDesktopOrLaptop&&!bend?{visibility:"visible", position:"fixed"}:{visibility:"hidden"}}>
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
              </div>
              <div id="nav-container" style={menuStyle}>
                <Menu/>
              </div> 
          </div>
          {/* <p ref={myRef} style={{}}>.</p> */}
          </BrowserRouter>
        </RecoilRoot>
       
      </div>
    </div>
  )
}

export default App
