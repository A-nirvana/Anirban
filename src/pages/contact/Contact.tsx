import { TextField} from "@mui/material";
import { useState } from "react";
import './Contact.css'

const CustomText = ( placeholder:string, rows:number)=>
{
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
    setIsFocused(true);
    };

    const handleBlur = () => {
    setIsFocused(false);
    };  
    const inputStyles = {
        border: isFocused ? '3px solid #444' : '3px solid #aaa',
        padding:"1em",
        borderRadius:"10px",
        outline: 'none',
        backgroundColor : isFocused ? '#ddd':'#1b4242',
    }
    return(
        <>
        <TextField variant="standard" placeholder={placeholder} margin="normal"
                    InputProps={{
                        disableUnderline: true,
                        style:inputStyles
                    }}
                    spellCheck={false}
                    onFocus={handleFocus}   
                    onBlur={handleBlur}
                    multiline
                    rows={rows}
                    sx={{ input: { color: isFocused ?  '#000' :'#dedede' } }}
        ></TextField>
        </>
    )
}

export default function Contact(){
    return(
        <div style={{marginLeft:"10em"}}>
            <div style={{display:"flex",height:"10em", justifyContent:"space-between"}}>
                <div id="email" style={{textAlign:"center", backgroundColor:"rgba(100,100,150,0.5)", height:"22em",
                    padding:"1em", borderRadius:"15px", boxShadow:"0px 8px 16px 0px rgba(100,100,150,0.5)"}}>
                    <h2 style={{fontSize:"3em",fontWeight:"600", marginBottom:"1em"}}>Email</h2>
                    <p style={{fontSize:"1.5em", fontWeight:"300", marginBottom:"2.5em"}}>You can contact me here</p>
                    <a href="anirban_ug_23@cse.nits.ac.in">anirban_ug_23@cse.nits.ac.in</a>
                </div>  
                <div id="github">
                <h2 style={{fontSize:"3em",fontWeight:"600", marginBottom:"1em"}}>Github</h2>
                    <p style={{fontSize:"1.5em", fontWeight:"300", marginBottom:"2em"}}>My github link to view my projects and also contact me</p>
                    <a href="https://github.com/A-nirvana">A-nirvana</a>
                </div>
                <div id="github" style={{display:"flex",flexDirection:"column",width:"30%"}}>
                    {CustomText("Name",1)}
                    {CustomText("Email",1)}
                    {CustomText("Your kind words",4)}
                </div>
            </div>
            
        </div>
    )
}