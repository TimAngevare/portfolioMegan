import InDesign from '../assets/icons/indesign.png';
import Illustrator from '../assets/icons/adobe-illustrator.png';
import VectorWorks from '../assets/icons/letter-v.png';
import Photoshop from '../assets/icons/adobe-photoshop.png';
import '../styling/Services.css';

export default function Services(){
    return(
        <section id="services" class="services section-bg">
            <div class="container">

                <div class="section-title">
                    <h2>Platforms</h2>
                    <p>As a third year student of Interior Architecture I can work with a wide range of programs such as Vectorworks, Adobe Illustrator and Photoshop. Further I also work with a range of different materials for scale models.</p>
                </div>


                <div class="row">

                    <div class="col-md-12 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div class="icon-box">
                            <div class="icon"><img className="inDesign" src={InDesign}/></div>
                            <h4 class="title"><a href="">InDesign</a></h4>
                            <p class="description">I’ve used this platform for posters and processbooklets.</p>
                        </div>
                    </div>

                    <div className="col-md-12 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box">
                            <div className="icon"><img className="vectorWorks" src={VectorWorks}/></div>
                            <h4 className="title"><a href="">VectorWorks</a></h4>
                            <p className="description">In my education I’ve learned to use Vectorworks
                                I can make anything from 3D models to floorplans.
                                Next to this I’ve used TwinMotion to make renders.</p>
                        </div>
                    </div>

                    <div class="col-md-12 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div class="icon-box">
                            <div class="icon"><img className="illustrator" style={{width: 34}} src={Illustrator}/></div>
                            <h4 class="title"><a href="">Illustrator</a></h4>
                            <p class="description">This platform I’m least experienced in, but I’ve used it for presentations to show my design in a different way.</p>
                        </div>
                    </div>

                    <div className="col-md-12 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box">
                            <div className="icon"><img className="inDesign" src={Photoshop}/></div>
                            <h4 className="title"><a href="">Photoshop</a></h4>
                            <p className="description">I am very good. bla bla bladiebla bla</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}