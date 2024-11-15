import React from 'react';

const TraditionalArt = () => {
  return (
    <div className="container">
      {/* Watermark Image */}
      <div className="watermark-image_arts"></div>

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
            src="/traditionalartsmain.png" 
            alt="Traditional Kathakali dancer"
          />
          <div className="overlay"></div>
        </div>

        {/* Right Content Section */}
        <div className="content-section">
          <h1>Traditional Arts</h1>
          <p>
            Discover India's rich artistic heritage, from classical masterpieces 
            to vibrant folk traditions. Each artwork tells a unique story, 
            celebrating the spirit and cultural diversity of India.
          </p>
          <button className="explore-btn">Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default TraditionalArt;
