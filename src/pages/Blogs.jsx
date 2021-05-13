import React from "react";
import { Link } from "react-router-dom";
import {bloglist} from "../data";

function Blogs(){

    function ProjectIndi(props){
        return(
            <div className="project__indi">
                <h3>{props.data.name}</h3>
                <span className="label">Link: </span><a className="labelans" href={props.data.link} target="_blank">{props.data.link}</a><br/>
            </div>
        );
    }


    return(
        <div className="blogs">
            <div className="heading">
                <h2>Following are my Blogs :)</h2>
                <p>Back to <Link to='/'>homepage</Link>✌🏽!</p>
            </div>
            <div className="bloglist">
                {bloglist.map(item=>(<li key={item.id}><ProjectIndi data={item}/></li>))}
            </div>
        </div>
    );
}

export default Blogs;