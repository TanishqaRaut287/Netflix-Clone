import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import './MovieCarousel.css'
import CarouselButtons from '../Button/CarouselButtons';

export const MovieCarousel = () => {

    return (
        <>

            <Carousel
                autoPlay
                infiniteLoop
                showArrows={false}
                showStatus={false}
                showThumbs={false}
                showIndicators={false}
                swipeable={false}
            >

                <div style={{ position: "relative" }}>
                    <CarouselButtons />
                    <img src="https://occ-0-2484-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABTGzG_Qv4VX_WRfVk0RV7Ucmjbe6s0f15-kuHf_361P4TiuW6p86PMV3dCSDQO9ZaarIeD339Go3KNrHhDKZGLzA2RilGz1vmNNA.jpg?r=f31" />
                </div>
                <div>
                    <CarouselButtons />
                    <img src="https://occ-0-2484-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABTGzG_Qv4VX_WRfVk0RV7Ucmjbe6s0f15-kuHf_361P4TiuW6p86PMV3dCSDQO9ZaarIeD339Go3KNrHhDKZGLzA2RilGz1vmNNA.jpg?r=f31" />
                </div>

            </Carousel>
        </>

    );
}



