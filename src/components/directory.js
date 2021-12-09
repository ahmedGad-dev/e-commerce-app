import React from "react";
import {sections} from '../directory.data'
import MenuItem from "./MenuItem";
import './components.styles.scss'
class Directory extends React.Component{
    state = {
        sections: sections
    }

    render(){
        return(
            <div className="directory-menu">
                {sections.map((section) =>(
                    <MenuItem key={section.id} title={section.title} imageUrl={section.imageUrl}
                     size={section.hasOwnProperty('size') && section.size}/>
                ))}
            </div>
        )
    }
}

export default Directory