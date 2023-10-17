import {useEffect} from "react";
import ScrollCarousel from 'scroll-carousel';
import '../styling/HorizontalScroll.css'
export default function HorizontalScroll(){
    useEffect(() => {
        new ScrollCarousel(".my-carousel", {
            autoplay: true,
            autoplaySpeed: 2,
            speed: 1
        });
    },[])

    return(
        <div>
            <div className="my-carousel">
                <a href={window.location.href + "projects?id=2"}>
                    <div className="my-slide">
                        <img src="https://portfolio-megan.s3.eu-west-2.amazonaws.com/images/carousel/1.jpg"/>
                        <div className="hide">Hotel Varme</div>
                    </div>
                </a>
                <a href={window.location.href + "projects?id=4"}>
                    <div className="my-slide">
                        <img src="https://portfolio-megan.s3.eu-west-2.amazonaws.com/images/carousel/2.jpg"/>
                        <div className="hide">Museum Annex Villa Palička</div>
                    </div>
                </a>
                <a href={window.location.href + "projects?id=5"}>
                    <div className="my-slide">
                        <img src="https://portfolio-megan.s3.eu-west-2.amazonaws.com/images/carousel/3.jpg"/>
                        <div className="hide">Enlightening softness</div>
                    </div>
                </a>
                <a href={window.location.href + "projects?id=6"}>
                    <div className="my-slide">
                        <img src="https://portfolio-megan.s3.eu-west-2.amazonaws.com/images/carousel/4.jpg"/>
                        <div className="hide">The dance-shaped space, Wezenlanden Park.</div>
                    </div>
                </a>
                <a href={window.location.href + "projects?id=3"}>
                    <div className="my-slide">
                        <img src="https://portfolio-megan.s3.eu-west-2.amazonaws.com/images/carousel/5.jpg"/>
                        <div className="hide">Detail for the dance-shaped space</div>
                    </div>
                </a>
                <a href={window.location.href + "projects?id=2"}>
                    <div className="my-slide">
                        <img src="https://portfolio-megan.s3.eu-west-2.amazonaws.com/images/carousel/6.jpg"/>
                        <div className="hide">Hotel Varme</div>
                    </div>
                </a>
            </div>
        </div>
    );

}