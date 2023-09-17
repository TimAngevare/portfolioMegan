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
                <a href={window.location.href + "projects?id=3"}>
                    <div className="my-slide">
                        <img src="https://portfolio-megan.s3.eu-west-2.amazonaws.com/images/carousel/1.jpg"/>
                        <div className="hide">Project Dos</div>
                    </div>
                </a>
                <a href={window.location.href + "projects?id=5"}>
                    <div className="my-slide">
                        <img src="https://portfolio-megan.s3.eu-west-2.amazonaws.com/images/carousel/2.jpg"/>
                        <div className="hide">Project quatro</div>
                    </div>
                </a>
                <a href={window.location.href + "projects?id=2"}>
                    <div className="my-slide">
                        <img src="https://portfolio-megan.s3.eu-west-2.amazonaws.com/images/carousel/3.jpg"/>
                        <div className="hide">Project Uno</div>
                    </div>
                </a>
                <a href={window.location.href + "projects?id=3"}>
                    <div className="my-slide">
                        <img src="https://portfolio-megan.s3.eu-west-2.amazonaws.com/images/carousel/4.jpg"/>
                        <div className="hide">Project dos</div>
                    </div>
                </a>
                <a href={window.location.href + "projects?id=3"}>
                    <div className="my-slide">
                        <img src="https://portfolio-megan.s3.eu-west-2.amazonaws.com/images/carousel/5.jpg"/>
                        <div className="hide">Project dos</div>
                    </div>
                </a>
                <a href={window.location.href + "projects?id=3"}>
                    <div className="my-slide">
                        <img src="https://portfolio-megan.s3.eu-west-2.amazonaws.com/images/carousel/6.jpg"/>
                        <div className="hide">Project dos</div>
                    </div>
                </a>
            </div>
        </div>
    );

}