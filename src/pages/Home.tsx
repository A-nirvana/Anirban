import "./Home.css"
import Typewriter from 'typewriter-effect'

export default function Home(){

    return(
        <div className="content" style={{marginLeft:"10vw"}} >
            <span>Hi there</span>
            <Typewriter
            options={{
                loop:true,
                delay:100
            }}
                onInit={(typewriter)=>{
                    typewriter.typeString("I'm Anirban Bora")
                    .pauseFor(1000)
                    .deleteChars(12)
                    .typeString("a CSE\nundergrad from NIT\nSilchar")
                    .pauseFor(1000)
                    .deleteChars(32)
                    .typeString("an AI/ML\nenthusiast")
                    .pauseFor(1000)
                    .deleteChars(19)
                    .typeString("a Web\nDeveloper")
                    .pauseFor(1000)
                    .start()
                }}
            ></Typewriter>
        </div>
    )
}