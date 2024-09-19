import {Component} from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import './index.css'

class Home extends Component{
    render(){
        return(
            <div className="detailsContainer">
                    <div className="descriptionContainer">
                        <h1 className="introHeading bounceInDown">
                            Hi ! I'm <br/> <span className="name">Pujith Reddy</span>, <br/> A FullStack Web Developer.
                        </h1>
                        <p className="homeHeading bounceInRight">Creative Frontend Developer with 2+ years of experience in building responsive,<br/> React-powered web applications.</p>
                        <button className="resumeButton"><a href="https://drive.google.com/file/d/1cVLFShNJNJhC52leJRWKZN9v0o7pZ7xD/view?usp=drive_link"  download="pujith_reddy" className="resumeLink">Resume</a></button>
                        <div className="accountLinks">
                            <div className="accountIconContainer">
                                <a href="https://www.linkedin.com/in/pujith-reddy/" target="_blank" rel="noreferrer" className="iconDesignLinkedIn">< FaLinkedin className="accountIcon" title="LinkedIn" /></a>
                            </div>
                             <div className="accountIconContainer">
                                <a href="https://github.com/Pujith007k" target="_blank" rel="noreferrer" className="iconDesignGit">< FaGithub  className="accountIcon" title="GitHub"/></a>
                            </div>
                             <div className="accountIconContainer">
                                <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target="_blank" rel="noreferrer" className="iconDesignMail">< SiGmail  className="accountIcon" title="Gmail" /></a>
                            </div>
                        </div>
                    </div>
                    <img className="homeImage" src="https://res.cloudinary.com/dbvonytlq/image/upload/v1726646916/photoNew_o4g5md.jpg" alt="pujith reddy"/>
            </div>
           
        )
    }
}

export default Home