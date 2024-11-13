import React from 'react';

const TraditionalCuisine = () => {
  return (
    <div className="container">
      {/* Watermark Image */}
      <div className="watermark-image_food"></div>

      {/* Navigation Menu */}
      <nav className="menu">
        <button>Map</button>
        <button>Art</button>
        <button>Calendar</button>
        <button>Quizzes</button>
        <button>Cuisines</button>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        {/* Left Image Section */}
        <div className="image-section">
          <img 
            src="/traditonalcuisine.png" 
            alt="Food"
          />
          <div className="overlay"></div>
        </div>

        {/* Right Content Section */}
        <div className="content-section">
          <h1>Traditional Cuisines</h1>
          <p>
          Explore the rich tapestry of India's culinary heritage, where each dish tells a story of tradition, regional diversity, and time-honored recipes passed down through generations
          
          </p>
          <button className="explore-btn">Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default TraditionalCuisine;
 