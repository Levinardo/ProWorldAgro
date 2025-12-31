import React, { useState, useEffect } from 'react';
import './EventCarousel.css';

const EventCarousel = ({ items = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || items.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, items.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false); // Pause auto-play when user manually navigates
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % items.length
    );
    setIsAutoPlaying(false);
  };

  if (items.length === 0) {
    return (
      <div className="event-carousel">
        <div className="carousel-empty">
          <p>No events to display</p>
        </div>
      </div>
    );
  }

  const currentItem = items[currentIndex];

  return (
    <div className="event-carousel">
      <div className="carousel-container">
        <button 
          className="carousel-button carousel-button-prev" 
          onClick={goToPrevious}
          aria-label="Previous slide"
        >
          &#8249;
        </button>

        <div className="carousel-slide">
          {currentItem.type === 'video' ? (
            <video 
              key={currentIndex}
              className="carousel-media" 
              src={currentItem.url} 
              controls
              autoPlay
              muted
              loop
              playsInline
              poster={currentItem.thumbnail || currentItem.url}
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <img 
              key={currentIndex}
              className="carousel-media" 
              src={currentItem.url} 
              alt={currentItem.title || 'Event image'} 
            />
          )}
          {currentItem.title && (
            <div className="carousel-caption">
              <h3>{currentItem.title}</h3>
              {currentItem.description && <p>{currentItem.description}</p>}
              {currentItem.photographer && currentItem.photographer.trim() && (
                <div className="carousel-photographer">
                  <span className="photographer-label">Photo by:</span>
                  <span className="photographer-name">{currentItem.photographer}</span>
                </div>
              )}
            </div>
          )}
        </div>

        <button 
          className="carousel-button carousel-button-next" 
          onClick={goToNext}
          aria-label="Next slide"
        >
          &#8250;
        </button>
      </div>

      {items.length > 1 && (
        <div className="carousel-indicators">
          {items.map((_, index) => (
            <button
              key={index}
              className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default EventCarousel;




