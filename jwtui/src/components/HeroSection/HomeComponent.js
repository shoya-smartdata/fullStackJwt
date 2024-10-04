import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import './Carousel.css';
import Cards from '../CardsSection /Cards';

function HomeComponent() {
  return (
    <>
 
    <div className="carousel-container">
      <Carousel
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        dynamicHeight={false}
        swipeable={true}
        emulateTouch={true}
        transitionTime={800}
      >
        <div>
          <img src="/banner.jpg" alt="Slide 1" />
          <div className="legend-overlay">
            <h3>WOMEN COLLECTION</h3>
            <p>100% ORIGINAL PRODUCTS </p>
          </div>
        </div>
        <div>
          <img src="/banner2.jpg" alt="Slide 2" />
          <div className="legend-overlay">
            <h3>URBAN TRENDS </h3>
            <p>EXPLORE THE URBAN TRENDS </p>
          </div>
        </div>
        <div>
          <img src="/banner3.jpg" alt="Slide 3" />
          <div className="legend-overlay">
            <h3>WIDE COLLECTIONS</h3>
            <p>WIDE TRENDS WEARE & OTHERS !</p>
          </div>
        </div>
      </Carousel>
    </div>
    <Cards />
    </>
  );
}

export default HomeComponent;
