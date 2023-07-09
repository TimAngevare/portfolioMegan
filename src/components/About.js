import '../styling/About.css';
import Image from '../assets/me.jpg';
export default function Navigation () {
    return(
        <section id="about" className="about">
            <div className="container">

                <div className="row no-gutters">
                    <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start">
                        <img src={Image}/>
                    </div>
                    <div className="col-xl-7 ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch">
                        <div className="content d-flex flex-column justify-content-center">
                            <h3 className='header-text'>Voluptatem dignissimos provident quasi</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}