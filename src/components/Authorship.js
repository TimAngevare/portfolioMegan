
export default function Authorship(){
    return(
        <section id="authorship" className="authorship">
            <div className="container">
                <div className="section-title">
                    <h2>Authorship</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-6 col-lg-6">
                    <div className='row' style={{textAlign: "left", paddingLeft : 20}}>
                        <p>From a young age, I've been captivated by the enchanting world of dance, where each movement tells a story and stirs emotions that defy expression through any other medium. Yet, in our fast-paced modern world, we find ourselves increasingly detached from our own bodies, always on the move, always distracted.
                            What fascinates me even more is architecture's ability to evoke emotion and create unique experiences, much like dance. I aim to explore the interplay between the body and architecture to shape spaces that heighten awareness and offer a unique connection to our surroundings.
                        </p>
                        {/*<a onClick={() => {window.location.href = "/projects?id=0"}}>Read more...</a>*/}
                        <a href={window.location.href + "projects?id=0"}>Read more here</a>
                    </div>
                </div>
                <div className="col">
                    <div className="row" style={{alignSelf: "center"}}>
                        <img style={{height: 750, width: "auto", display: "block", marginLeft: "auto"}} src="https://portfolio-megan.s3.eu-west-2.amazonaws.com/images/reflectiePosterSem5.png"/>
                    </div>
                    <div className="row" style={{paddingTop: 10}}>
                        <video width="350" height="300" loop autoPlay muted style={{display: "block", marginLeft: "auto"}}>
                            <source src="https://portfolio-megan.s3.eu-west-2.amazonaws.com/images/SchouwZelfreflectieDansschetsen2.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </section>
    );
}