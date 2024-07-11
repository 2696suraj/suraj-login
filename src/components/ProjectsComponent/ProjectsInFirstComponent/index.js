import {Link} from "react-router-dom"


import "./index.css"


const ProjectsInFirstComponent = () => {
    return <div className="projectsComponent-home-bg-co">
        <div className="projects-home-card-co">
        <h1 className="projects-home-card-co-heding"><Link to="/aboute">PROJECTS</Link> </h1>
        <p className="projects-home-card-co-paragraph">HOME PROJECTS</p>
        </div>
    </div>
}


export default ProjectsInFirstComponent