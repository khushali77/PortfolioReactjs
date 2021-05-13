import React from "react";
import projectlist from "../data.js";

function Projects(){
    
    function ProjectIndi(props){
        return(
            <div className="project__indi">
                <h3>{props.data.name}</h3>
                <span className="label">Link: </span><a className="labelans" href={props.data.link} target="_blank">{props.data.link}</a><br/>
                <span className="label">Github: </span><a className="labelans" href={props.data.github} target="_blank">{props.data.github}</a><br/>
                <span className="label">Technologies Used: </span>{props.data.tech.map(item=>(<span className="labelans">{item},</span>))}
            </div>
        );
    }

    return(
        <div className="projects">
            <div className="heading">
                <h2>Following are my Projects :)</h2>
            </div>
            <div className="projectlist">
                {projectlist.map(item=>(<li key={item.id}><ProjectIndi data={item}/></li>))}
            </div>
        </div>
    );
}

export default Projects;