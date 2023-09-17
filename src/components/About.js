import '../styling/About.css';
import Image from '../assets/me.png';
export default function Navigation () {
    return(
        <section id="about" className="about">
                <div className="row no-gutters">
                    <div className="image col-xl-7 col-lg-6 d-flex align-items-stretch justify-content-center justify-content-lg-start">
                        <img src={Image}/>
                    </div>
                    <div className="col-xl-5 col-lg-6 d-flex align-items-center descript">
                        <div className="content d-flex flex-column justify-content-center">
                            <h3 className='header-text'><b>Hi, I'm Megan</b></h3>
                            <h3 className='header-text'><b>An Interior Architecture student</b></h3>
                            <p>
                                I'm a 3rd year student at ArtEZ University of the Arts based in Zwolle <br/>
                                Feel free to take a look at my portfolio!
                            </p>
                        </div>
                    </div>
                </div>
        </section>
    );
}