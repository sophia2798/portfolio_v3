import React from 'react';
import "./Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faCogs, faAtom } from "@fortawesome/free-solid-svg-icons";


function Skills() {
    return (
        <div className="skills">
            <section className="skills-container">
                <div className="skills-col" style={{borderRight: '1px solid #545557', color:'#aaabb8'}}>
                    <FontAwesomeIcon className="faIcon" icon={faLaptopCode} />
                    <h2>FRONT-END</h2>
                    <div className="languages">
                    <h3><span className="middot">&middot;&middot;&middot;</span> LANGUAGES <span className="middot">&middot;&middot;&middot;</span></h3>
                    <br/>
                    <h4>HTML<br/>CSS<br/>JAVASCRIPT<br/>JQUERY<br/>JSX<br/>HANDLEBARS</h4>
                    </div>
                    <div className="tools">
                    <h3><span className="middot">&middot;&middot;&middot;</span> TOOLS <span className="middot">&middot;&middot;&middot;</span></h3>
                    <br/>
                    <h4>REACT.JS<br/>BOOTSTRAP<br/>MATERIAL-UI<br/>MATERIALIZE<br/>BULMA</h4>
                    </div>
                </div>
                <div className="skills-col" style={{borderRight: '1px solid #545557', color:'#7395ae'}}>
                    <FontAwesomeIcon className="faIcon" icon={faCogs} />
                    <h2>BACK-END</h2>
                    <div className="languages">
                    <h3><span className="middot">&middot;&middot;&middot;</span> LANGUAGES <span className="middot">&middot;&middot;&middot;</span></h3>
                    <br/>
                    <h4>JAVASCRIPT<br/>SQL<br/>MQL</h4>
                    </div>
                    <div className="tools">
                    <h3><span className="middot">&middot;&middot;&middot;</span> TOOLS <span className="middot">&middot;&middot;&middot;</span></h3>
                    <br/>
                    <h4>MYSQL<br/>MYSQL WORKBENCH<br/>POSTMAN<br/>MONGODB<br/>ROBO-3T<br/>MONGO ATLAS<br/>EXPRESS<br/>NODE<br/></h4>
                    </div>
                </div>
                <div className="skills-col" style={{color:'#b1a296'}}>
                    <FontAwesomeIcon className="faIcon" icon={faAtom} />
                    <h2>PHYSICS</h2>
                    <div className="languages">
                    <h3><span className="middot">&middot;&middot;&middot;</span> INTERESTS <span className="middot">&middot;&middot;&middot;</span></h3>
                    <br/>
                    <h4>DARK MATTER/DARK ENERGY<br/>PROTON THERAPY<br/>E&amp;M<br/>LIGHT SAILS<br/>OPTICS<br/>MEDICAL PHYSICS</h4>
                    </div>
                    <div className="tools">
                    <h3><span className="middot">&middot;&middot;&middot;</span> TOOLS <span className="middot">&middot;&middot;&middot;</span></h3>
                    <br/>
                    <h4>MATHEMATICA<br/>PYTHON<br/>MATLAB<br/>EXCEL</h4>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skills
