import Data from '../assets/Projects.json'
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
export default function Portfolio () {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        setProjects(Data.projects);

    }, []);

   return(
       <section id="portfolio" className="portfolio section-bg">
           <div className="container">

               <div className="section-title">
                   <h2>Portfolio</h2>
                   <p>Here displayed my most recent projects. Either used for academic goals or personal works</p>
               </div>


               <div className="row portfolio-container">
                   {projects.map(projectData =>
                       <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                           <div className="portfolio-wrap" onClick={() => {window.location.href = "/projects?id=" + projectData.id}}>
                               <img src={projectData.images[0]} className="img-fluid" alt="" />
                               <div className="portfolio-info">
                                   <h4>{projectData.title}</h4>
                               </div>
                               <div className="portfolio-links">
                                   <a href={projectData.images[0]} data-gallery="portfolioGallery"
                                      className="portfolio-lightbox" title={projectData.title}><i className="bx bx-plus"></i></a>
                                   <Link to={"/projects?id=" + projectData.id} title="More Details"><i className="bx bx-link"></i></Link>
                               </div>
                           </div>
                       </div>
                   )}

               </div>

           </div>
       </section>
   );
}