import React from "react";
import i1 from "../components/Image1.jpg";
import {Link} from "react-router-dom";

function Home(){
    return(
        <div className="home">
            <img src={i1} className="profilephoto" alt="profilephoto"></img>
            <div className="right">
                <div className="nav">
                    <Link to='/projects'>Projects</Link>
                    <Link to='/blogs'>Blogs</Link>
                    <Link to='/aboutme'>About Me</Link>
                </div>
                <div className="pt">
                    <h1 className="pt1">Hello, I am Khushali Shah.</h1>
                    <p className="pt2">3rd year DAIICT Undergrad | Curious learner | Drawing and Painting | Strong Coffee | Frontend</p>
                </div>
                <div className="share">
                    <Link to='/'><img className="icon linkedin" src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="linkedin"/></Link>
                    <Link to='/'><img className="icon instagram" src="https://img.icons8.com/fluent/48/000000/instagram-new.png" alt="instagram"/></Link>
                    <Link to='/'><img className="icon github" src="https://img.icons8.com/fluent/48/000000/github.png" alt="github"/></Link>
                    <Link to='/'><img className="icon twitter" src="https://img.icons8.com/fluent/48/000000/twitter.png" alt="twitter"/></Link>
                </div>
            </div>
        </div>
    );
}

export default Home;