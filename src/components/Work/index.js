import { FaCode } from "react-icons/fa";
import { IoColorPaletteSharp } from "react-icons/io5";
import { LuExternalLink } from "react-icons/lu";
import './index.css'

const Work=()=>{
    return (
        <div className="workContainer">
            <div className="serviceContainer">
                <h3 className="serviceHeading"><span className="myElement">My</span> Service</h3>
                <div className="service-card">
                    < FaCode className="Icon" />
                    <h5 className="serviceSubTitle">Web Development</h5>
                    <p className="serviceParagraph">
                        As a web developer, I create dynamic and functional websites using a
                        combination of front-end and back-end technologies. I specialize in
                        building responsive, user-friendly interfaces that enhance the user
                        experience. Whether it’s an e-commerce site, a blog, or a custom web
                        application, I bring ideas to life through code.
                    </p>
                </div>
                <div className="service-card">
                    < IoColorPaletteSharp className="Icon" />
                    <h5 className="serviceSubTitle">UI Development and UI Designing</h5>
                    <p className="serviceParagraph">
                        UI (User Interface) and UI design development focuses on creating the visual
                        elements of a website or application. I specialize in turning design
                        mockups into interactive interfaces using HTML, CSS, and JavaScript.
                        My goal is to ensure that users have a seamless and enjoyable
                        experience while interacting with your product.
                    </p>
                </div>
            </div>
            <div className="myworkContainer">
                <h3 className="serviceHeading"><span className="myElement">My</span> Work Experience</h3>
                <div className="WorkexperienceContainer">
                    <div className="companyTenure">
                    <h4>Mphasis</h4>
                    <h4>Jan 2022-Till Date</h4>
                    </div>
                    <b className="serviceSubTitle">Associate Software Engineer</b>
                    <p className="serviceParagraph">As a fullstack web developer I work closely with design and product team in creating complex UI elements and developing API's to interact with server.</p>
                </div>
            </div>
            <div className="projectsContainer">
                <h3 className="serviceHeading"><span className="myElement">My</span> Projects</h3>
                <div className="projects">
                    <div className="bookHubContainer">
                        <img className="bookHubImage" src="https://res.cloudinary.com/dbvonytlq/image/upload/v1726466977/BookShelves_yipkic.jpg" alt="BookShelves"/>
                        <div className="bookShelvesContainer">
                            <h4 className="projectTitle">Book Hub</h4>
                            <p className="serviceParagraph">Explore a vast collection of book summaries across various categories like self-improvement, finance, biographies, and more</p>
                            <p className="serviceParagraph">Username:rahul   password:rahul@2021</p>
                            <a href="https://pujithbookhub.ccbp.tech/login" target="_blank" rel="noreferrer"><LuExternalLink  className="linkIcon"/></a>
                        </div>
                    </div>
                    <div className="bookHubContainer">
                        <img className="bookHubImage" src="https://res.cloudinary.com/dbvonytlq/image/upload/v1726466977/nxtWatch_yv7pa6.jpg" alt="NxtWatch"/>
                        <div className="bookShelvesContainer">
                            <h4 className="projectTitle">Nxt Watch</h4>
                            <p className="serviceParagraph">The project focuses to build a basic YouTube clone in ReactJs. The project used YouTube API
                               to get the videos. These videos are displayed to the user or developer.</p>
                            <p className="serviceParagraph">Username:rahul    password:rahul@2021</p>
                            <a href="https://pujithnextwatch.ccbp.tech/login" target="_blank" rel="noreferrer"><LuExternalLink  className="linkIcon"/></a>
                        </div>
                    </div>
                    <div className="bookHubContainer">
                        <img className="bookHubImage" src="https://res.cloudinary.com/dbvonytlq/image/upload/v1726466977/jobbyapp_sgyhml.jpg" alt="JobbyApp"/>
                        <div className="bookShelvesContainer">
                            <h4 className="projectTitle">Jobby App</h4>
                            <p className="serviceParagraph">A job tracker tool helps you manage your job search, track your job applications, and boost your chances of getting interviews and landing your dream job</p>
                            <p className="serviceParagraph">Username:rahul    password:rahul@2021</p>
                            <a href="https://pujithjobbyapp.ccbp.tech/login" target="_blank" rel="noreferrer"><LuExternalLink  className="linkIcon"/></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Work