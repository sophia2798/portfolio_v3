import React from 'react';
import "./Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faCogs, faAtom } from "@fortawesome/free-solid-svg-icons";


function Skills() {
    return (
        <div className="skills">
            <section className="skills-container">
                <div className="skills-col" style={{borderRight: '1px solid #545557', color:'#aaabb8'}}>
                    <div className="skills-header">
                    <FontAwesomeIcon className="faIcon" icon={faLaptopCode} />
                    <h2>FRONT-END</h2>
                    </div>
                    <div className="lang-tools">
                    <div className="languages">
                    <h3><span className="middot">&middot;&middot;&middot;</span> LANGUAGES <span className="middot">&middot;&middot;&middot;</span></h3>
                    <br/>
                    <h4 className="vert">HTML<br/>CSS<br/>JAVASCRIPT<br/>JQUERY<br/>JSX<br/>HANDLEBARS<br/>SCSS/SASS</h4>
                    <h4 className="horz">HTML &middot; CSS &middot; JAVASCRIPT &middot; JQUERY &middot; JSX &middot; HANDLEBARS &middot; SCSS/SASS</h4>
                    </div>
                    <div className="tools">
                    <h3><span className="middot">&middot;&middot;&middot;</span> TOOLS <span className="middot">&middot;&middot;&middot;</span></h3>
                    <br/>
                    <h4 className="vert">REACT.JS<br/>BOOTSTRAP<br/>MATERIAL-UI<br/>MATERIALIZE</h4>
                    <h4 className="horz">REACT.JS &middot; BOOTSTRAP &middot; MATERIAL-UI &middot; MATERIALIZE</h4>
                    </div>
                    </div>
                </div>
                <div className="skills-col" style={{borderRight: '1px solid #545557', color:'#7395ae'}}>
                    <div className="skills-header">
                    <FontAwesomeIcon className="faIcon" icon={faCogs} />
                    <h2>BACK-END</h2>
                    </div>
                    <div className="lang-tools">
                    <div className="languages">
                    <h3><span className="middot">&middot;&middot;&middot;</span> LANGUAGES <span className="middot">&middot;&middot;&middot;</span></h3>
                    <br/>
                    <h4 className="vert">JAVASCRIPT<br/>SQL<br/>MQL</h4>
                    <h4 className="horz">JAVASCRIPT &middot; SQL &middot; MQL</h4>
                    </div>
                    <div className="tools">
                    <h3><span className="middot">&middot;&middot;&middot;</span> TOOLS <span className="middot">&middot;&middot;&middot;</span></h3>
                    <br/>
                    <h4 className="vert">MYSQL<br/>MYSQL WORKBENCH<br/>POSTMAN<br/>MONGODB<br/>ROBO-3T<br/>MONGO ATLAS<br/>EXPRESS<br/>NODE<br/></h4>
                    <h4 className="horz">MYSQL &middot; MYSQL WORKBENCH &middot; POSTMAN &middot; MONGODB &middot; ROBO-3T &middot; MONGO ATLAS &middot; EXPRESS &middot; NODE &middot; </h4>
                    </div>
                    </div>
                </div>
                <div id="col3" className="skills-col" style={{color:'#b1a296'}}>
                    <div className="skills-header">
                    <FontAwesomeIcon id="atom" className="faIcon" icon={faAtom} />
                    <h2>PHYSICS</h2>
                    </div>
                    <div className="lang-tools">
                    <div className="languages">
                    <h3><span className="middot">&middot;&middot;&middot;</span> INTERESTS <span className="middot">&middot;&middot;&middot;</span></h3>
                    <br/>
                    <h4 className="vert">DARK MATTER/DARK ENERGY<br/>PROTON THERAPY<br/>E&amp;M<br/>LIGHT SAILS<br/>OPTICS<br/>MEDICAL PHYSICS</h4>
                    <h4 className="horz">DARK MATTER/DARK ENERGY &middot; PROTON THERAPY &middot; E&amp;M &middot; LIGHT SAILS &middot; OPTICS &middot; MEDICAL PHYSICS</h4>
                    </div>
                    <div className="tools">
                    <h3><span className="middot">&middot;&middot;&middot;</span> TOOLS <span className="middot">&middot;&middot;&middot;</span></h3>
                    <br/>
                    <h4 className="vert">MATHEMATICA<br/>PYTHON<br/>MATLAB<br/>EXCEL</h4>
                    <h4 className="horz">MATHEMATICA &middot; PYTHON &middot; MATLAB &middot; EXCEL</h4>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skills
