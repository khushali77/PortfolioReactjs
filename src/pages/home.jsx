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
                    <a href='https://www.linkedin.com/in/khushalishah7/' target="_blank"><img className="icon linkedin" src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="linkedin"/></a>
                    <a href='https://www.instagram.com/khushaliiishahh/' target="_blank"><img className="icon instagram" src="https://img.icons8.com/fluent/48/000000/instagram-new.png" alt="instagram"/></a>
                    <a href='https://github.com/khushali77' target="_blank"><img className="icon github" src="https://img.icons8.com/fluent/48/000000/github.png" alt="github"/></a>
                    <a href='https://twitter.com/khushaliiishahh' target="_blank"><img className="icon twitter" src="https://img.icons8.com/fluent/48/000000/twitter.png" alt="twitter"/></a>
                </div>
            </div>
        </div>
    );
}

export default Home;