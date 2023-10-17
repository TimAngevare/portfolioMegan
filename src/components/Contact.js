import Insta from '../assets/icons/instagram.png';
import LinkedIn from '../assets/icons/linkedin.png'

export default function Contact() {
    return(
        <section id="contact" className="contact section-bg">
            <div className="container">

                <div className="row justify-content-center section-title" style={{textAlign: "center"}}>
                    <h2>Contact</h2>
                    <p>Feel free to contact me for any questions or possible collaborations!</p>
                </div>

                <div className="row justify-content-center" style={{textAlign: "center"}}>

                    <div className="col-lg-3 col-md-3" style={{paddingRight:0}}>
                        <div className="contact-about">
                            <h3 className="header-text">Megan van Delden</h3>
                            <p>Student Interior Architecture, part-time creative developer</p>
                            <div className="social-links">
                                <a href="https://www.instagram.com/in_meganvandelden/" className="instagram"><img src={Insta}/></a>
                                <a href="https://www.linkedin.com/in/megan-van-delden-a95248207/" className="linkedin"><img src={LinkedIn}/></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4">
                        <div className="info">
                            <div className="d-flex align-items-center">
                                <p>Zwolle, The Netherlands</p>
                            </div>

                            <div className="d-flex align-items-center mt-4">
                                <p>meganvandelden@gmail.com</p>
                            </div>

                            <div className="d-flex align-items-center mt-4">
                                <p>+31 6 55076558</p>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}