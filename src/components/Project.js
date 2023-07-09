import Navigation from "./Navigation";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import Data from '../assets/Projects.json'
import '../styling/Project.css'

export default function Project(){
    const location = useLocation();
    const [param, setParams] = new URLSearchParams(location.search).get('id');
    const [project, setProject] = useState(null);

    useEffect(() => {
        const projectList = Data.projects
        console.log(projectList)
        setProject(projectList[param]);
    }, [])

    return(
        <div>
            <Navigation>
            </Navigation>
            {project && <div>
                <div className="row">
                    <div className="col-lg-6 image-col">
                        <img src={project.image}/>
                    </div>
                    <div className="col-lg-6 text-area">
                        <div className="row"><h1>{project.title}</h1></div>
                        <div className="row"><p>{project.description}</p></div>
                    </div>
                </div>
            </div>}
        </div>
    );
}