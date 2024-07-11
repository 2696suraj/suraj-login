
import {Link} from "react-router-dom"

import "./index.css"



const AboutFirstComponent = () => {
    return <div className="AboutFirstComponent-bg-co">
        <div className="AboutFirstComponent-card-co">
        <h1 className="AboutFirstComponent-card-co-heding"><Link to="/">ABOUT US</Link></h1>
        <p className="AboutFirstComponent-card-co-paragraph">HOME ABOUT US</p>
    </div>
    </div>
}

export default AboutFirstComponent