import "./WorkCard.css";

import React from "react";
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="projectCard">
                    <img src={props.imgsrc} alt="project1" />
                    <h2 className="projectTitle">{props.title}</h2>
                    <div className="projectDetails">
                        <p>{props.text}</p>
                        <div className="project-btns">
                            <NavLink to={props.view} className="btn">View</NavLink>
                            <NavLink to="url.com" className="btn">Source</NavLink>

                        </div>
                    </div>
                </div>
  );
};

export default WorkCard;
