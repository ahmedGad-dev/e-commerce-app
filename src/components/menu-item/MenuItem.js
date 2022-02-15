import React from "react";
import  './menu-item.styles.scss'
import { useNavigate} from "react-router-dom";
//import { sections } from "../directory.data";


const MenuItem = (props) => {
    const  navigate = useNavigate();
   // const params = useParams()
    return(
        <div className={`${props.size} menu-item`} onClick={()=> navigate(`${props.linkUrl}`)}>          
            <div className="background-image" style={{backgroundImage:`url(${props.imageUrl})`}}></div>           
                <div className={"content"}>
                    <h1 className="title">{props.title.toUpperCase()}</h1>
                    <span className="subtitle">Shop now</span>
                </div>           
        </div>
    )
}

export default MenuItem