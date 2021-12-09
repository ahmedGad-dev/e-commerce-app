import React from "react";
import  './components.styles.scss'
//import { sections } from "../directory.data";

const MenuItem = (props) => {
    return(
        <div className={`${props.size} menu-item`}>          
            <div className="background-image" style={{backgroundImage:`url(${props.imageUrl})`}}></div>           
                <div className={"content"}>
                    <h1 className="title">{props.title.toUpperCase()}</h1>
                    <span className="subtitle">Shop now</span>
                </div>           
        </div>
    )
}

export default MenuItem