// CarouselComponent.js
import React from 'react';
import Slider from 'react-slick';
import './Crousoule.css'

const CarouselComponent = () => {
  const cardsData = [
    { id: 1, title: 'Card 1', content: 'This is the content for Card 1' },
    { id: 2, title: 'Card 2', content: 'This is the content for Card 2' },
    { id: 3, title: 'Card 3', content: 'This is the content for Card 3' },
    { id: 4, title: 'Card 4', content: 'This is the content for Card 4' },
    { id: 5, title: 'Card 5', content: 'This is the content for Card 5' },
    { id: 6, title: 'Card 6', content: 'This is the content for Card 6' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show one set of three cards per slide
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {cardsData.map((card, index) => (
        <div className="card-container" key={index}>
          <div className="card">
            <h3>{card.title}</h3>
            <p>{card.content}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default CarouselComponent;
