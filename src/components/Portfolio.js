import Data from '../assets/Projects.json'
import {useEffect, useState} from "react";
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

               <div className="row">
                   <div className="col-lg-12 d-flex justify-content-center">
                       <ul id="portfolio-flters">
                           <li data-filter="*" className="filter-active">All</li>
                           <li data-filter=".filter-app">Furniture</li>
                           <li data-filter=".filter-card">Paintings</li>
                           <li data-filter=".filter-web">Prototypes</li>
                       </ul>
                   </div>
               </div>

               <div className="row portfolio-container">
                   {projects.map(projectData =>
                       <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                           <div className="portfolio-wrap">
                               <img src={projectData.image} className="img-fluid" alt="" />
                               <div className="portfolio-info">
                                   <h4>{projectData.title}</h4>
                                   <p>App</p>
                               </div>
                               <div className="portfolio-links">
                                   <a href={projectData.image} data-gallery="portfolioGallery"
                                      className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                                   <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                               </div>
                           </div>
                       </div>
                   )}

               </div>

           </div>
       </section>
   );
}