export default function Contact() {
    return(
        <section id="contact" className="contact section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>Contact</h2>
                    <p>Feel free to contact me for any questions or possible collaborations!</p>
                </div>

                <div className="row">

                    <div className="col-lg-4 col-md-4">
                        <div className="contact-about">
                            <h3 className="header-text">Megan van Delden</h3>
                            <p>Student Interior Architecture, part-time creative developer</p>
                            <div className="social-links">
                                <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                                <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4">
                        <div className="info">
                            <div className="d-flex align-items-center">
                                <i className="bi bi-geo-alt"></i>
                                <p>Zwolle, The Netherlands</p>
                            </div>

                            <div className="d-flex align-items-center mt-4">
                                <i className="bi bi-envelope"></i>
                                <p>meganvandelden@gmail.com</p>
                            </div>

                            <div className="d-flex align-items-center mt-4">
                                <i className="bi bi-phone"></i>
                                <p>+31 6 55076558</p>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}