
import { useNavigate } from "react-router-dom";
import "./List.css"
import { useState } from "react";
import { currentPage } from "../store/atoms/pages";
import { useRecoilState } from "recoil";

export default function Navbar(){

    const pageStyle = {
        animation : "appear 0.8s ease-in"
    }

    const navigate = useNavigate(); 
    const [isTransitioning, setTransitioning] = useState(false);
    const [current, setCurrent] = useRecoilState(currentPage)
    
    const menus = ["HOME", "MY SKILLS", "MY JOURNEY", "PROJECTS","CONTACT ME"]
    const links = ["../", "../skills","../journey","../achievements","../contact" ]

    return(
    <>
    <div className="Nav">
        {menus.map((Cat)=>{
            return(
                <div className="listdiv" style={isTransitioning?pageStyle:{}}>
                <div className="listItem">
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
                    }}>{(Cat==current)?Cat:menus.indexOf(Cat)+1}</h3>
                </a> 
                </div> 
                </div>
            )
        })}
    </div>
    </>
    )
}