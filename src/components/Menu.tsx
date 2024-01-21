
import { useNavigate } from "react-router-dom";
import "./Menu.css"
import { useState } from "react";
import { currentPage } from "../store/atoms/pages";
import { useRecoilState } from "recoil";

export default function Menu(){

    const pageStyle = {
        animation : "appear 2s ease-in"
    }

    const navigate = useNavigate(); 
    const [isTransitioning, setTransitioning] = useState(false);
    const [current, setCurrent] = useRecoilState(currentPage)
    
    const menus = ["HOME", "MY SKILLS", "MY JOURNEY", "PROJECTS","CONTACT ME"]
    const links = ["../", "../skills","../journey","../achievements","../contact" ]

    return(
    <>
    <div className="Menu">
        {menus.map((Cat)=>{
            return(
                <div className="list" style={isTransitioning?pageStyle:{}}>
                <div className="listBox">
                <a
                    onClick={()=>{
                        setCurrent(Cat);
                        navigate(links[menus.indexOf(Cat)]);
                        setTransitioning(true);
                        setTimeout(()=>{
                            setTransitioning(false)
                        },800)
                    }}
                >
                    <h3 style={{
                        color:(Cat==current)?"#fff":"#555"
                    }}>{Cat}</h3>
                </a> 
                </div> 
                </div>
            )
        })}
    </div>
    </>
    )
}