import CV from '../assets/CV..pdf';
import '../styling/Resume.css'

export default function Resume() {
    return(
        <section id="resume" className="resume section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>Resume</h2>
                </div>

                <div className="row resumeSec">
                    <div className="col-lg-6">

                        <h3 className="resume-title">Education</h3>
                        <div className="resume-item">
                            <h4>Interior architecture Bachelor</h4>
                            <h5>2021 - present</h5>
                            <p><em>Artez university of the arts, Zwolle</em></p>
                            <p>Third year student. Currently in my academic internship.</p>
                        </div>
                        <div className="resume-item">
                            <h4>VWO bilingual highschool</h4>
                            <h5>2015 - 2021</h5>
                            <p><em>Farel College, Amersfoort</em></p>
                            <p>Graduated highschool at the Farel College with a level of VWO. Followed a scientific learning path.</p>
                        </div>

                        <h3 className="resume-title">Certificates</h3>
                        <div className="resume-item">
                            <h4>International Baccalaureate</h4>
                            <p><em>At Farel College came in possesion of my IB certificate</em></p>
                        </div>
                        <div className="resume-item">
                            <h4>DELE Spaans A1, Instito Cervantes</h4>
                            <p><em>Demonstrates profficiancy in normal day to day use of spanish language</em></p>
                        </div>
                        <div className="resume-item pb-0">
                            <h4>Council of Europe Level B2, Cambridge University Press & Assessment English</h4>
                            <p><em>Profficient in the english language. Handed by the Cambridge University</em></p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h3 className="resume-title">Professional Experience</h3>
                        <div className="resume-item">
                            <h4>Hospitality Host</h4>
                            <h5>2023 - 2023</h5>
                            <p><em>N/P notarial partners, Amersfoort </em></p>
                            <p>Temporary parttime flex worker. Day to day tasks consisted of; welcoming guests, proccess forms of external contact and ensuring a proffesional first impression towards visitors.</p>
                        </div>
                        <div className="resume-item">
                            <h4>Sales representative</h4>
                            <h5>2020 - 2022</h5>
                            <p><em>Roosters, Amersfoort</em></p>
                            <p>

                            </p>
                        </div>
                        <div className="resume-item">
                            <h4>Store worker</h4>
                            <h5>2019 - 2020</h5>
                            <p><em>Kruidvat, Amersfoort</em></p>
                            <p>
                            </p>
                        </div>
                        <div className="resume-item">
                            <h4>Medicine delivery</h4>
                            <h5>2018 - 2019</h5>
                            <p><em>Aphoteek Zielhorst B.V., Amersfoort</em></p>
                            <p>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <a className="cvDownload" href={CV} download="cvMeganVanDelden.pdf">Download my CV</a>
                </div>

            </div>
        </section>
    );
}