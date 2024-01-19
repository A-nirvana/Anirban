import './Menu.css'

export default function Menu(){
    
    const menus = ["Home", "My journey", "My Skils", "Achievements","Contact me"]
    const links = ["../", "../journey","../skills","../achievements","../contact" ]

    return(
        <div>
            {menus.map((Cat)=>{
                return(
                    <div></div>
                )
            })}
        </div>
    )
}