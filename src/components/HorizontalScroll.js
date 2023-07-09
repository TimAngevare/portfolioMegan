import Image1 from '../assets/portfolio/portfolio-1.jpg'
import Image2 from '../assets/portfolio/portfolio-2.jpg'
import Image3 from '../assets/portfolio/portfolio-3.jpg'
import Image4 from '../assets/portfolio/portfolio-4.jpg'
import {useEffect} from "react";
export default function HorizontalScroll(){
    let isScrolling = false;

    function smoothVerticalScroll(deltaY) {
        const startScrollTop = document.documentElement.scrollTop;
        const endScrollTop = startScrollTop + deltaY * 600;
        let currentTime = 0;
        const duration = 10; // Set the duration of the smooth scroll animation

        function scrollStep(timestamp) {
            if (!currentTime) currentTime = timestamp;
            const progress = timestamp - currentTime;
            const scrollY = easeInOutQuad(progress, startScrollTop, endScrollTop - startScrollTop, duration);
            document.documentElement.scrollTop = scrollY;
            document.body.scrollTop = scrollY;

            if (progress < duration) {
                requestAnimationFrame(scrollStep);
            } else {
                isScrolling = false;
            }
        }

        function easeInOutQuad(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(scrollStep);
    }

    useEffect(() => {
        let container = document.getElementById("scroll-container");
        const maxScrollLeft = container.scrollWidth - container.clientWidth;

        container.addEventListener('wheel', (event) => {
            event.preventDefault();

            if (container.scrollLeft <= maxScrollLeft && container.scrollLeft > maxScrollLeft * 0.8 && event.deltaY > 0) {
                const resumeContainer = document.querySelector("#resume");
                resumeContainer.scrollIntoView({ behavior: "smooth", block: "start" });
                if (!isScrolling) {
                    isScrolling = true;
                    // smoothVerticalScroll(event.deltaY);
                }
            } else {
                container.scrollLeft += event.deltaY;
            }
        });
    },[]);


    return(
        <section id="horizontal" class="scrolling">
            <div class="horizontal-scroll">
                <div class="scroll-container" id="scroll-container">
                    <img class="image-scroll" src={Image1} alt="Cinque Terre" />
                    <img class="image-scroll" src={Image2}  alt="Forest" />
                    <img class="image-scroll" src={Image3}  alt="Northern Lights" />
                    <img class="image-scroll" src={Image4}  alt="Mountains" />
                </div>
            </div>
        </section>
    );
}