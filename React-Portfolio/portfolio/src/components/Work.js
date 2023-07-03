import "./WorkCard.css";

import React from 'react'
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";



const Work = () => {
    return (
        <div className="workconatiner">
            <h1 className="projectHeading">Projects</h1>
            <div className="projectContainer">
               {WorkCardData.map((value, index) => {
                return (
                    <WorkCard 
                    key= {index}
                    imgsrc= {value.imgsrc}
                    title= {value.title}
                    text= {value.text}
                    view= {value.view}
                    
                    
                    />
                )
               })}
            </div>
        </div>
    )
}

export default Work