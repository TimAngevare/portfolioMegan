import Navigation from "./Navigation";
import Contact from "./Contact";
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
        <div className="main">
            <Navigation>
            </Navigation>
            {project && <div>
                <div className="row" style={{paddingTop : 10}}>
                    <div className="col-lg-6 text-area">
                        <div className="row"><h1>{project.title}</h1></div>
                        <div className="sticky">
                            <div className="row">
                                {project.description.map((paragraph) =>
                                    <p>{paragraph}</p>)
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 image-col">
                        {project.images.map((image) =>
                            <img src={image}/>)
                        }
                    </div>
                </div>
                {project.HTML &&
                <div className="row">
                    <div dangerouslySetInnerHTML={{__html: project.HTML}}/>
                </div>}
            </div>}
            <Contact/>
        </div>
    );
}