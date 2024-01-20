import './Menu.css'

export default function Menu(){
    
    const menus = ["Home", "My journey", "My Skils", "Achievements","Contact me"]

    return(
        <div>
            {menus.map((Cat)=>{
                return(
                    <div>{Cat}</div>
                )
            })}
        </div>
    )
}