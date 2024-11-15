import React from 'react';

const Calender = () => {
  return (
    <div className="container">
      {/* Watermark Image */}
      <div className="watermark-image_cal"></div>

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
            src="/cal.png" 
            alt="Festival Calender"
          />
          <div className="overlay"></div>
        </div>

        {/* Right Content Section */}
        <div className="content-section">
          <h1>Festival Calender</h1>
          <p>
          Stay connected to India's cultural roots with a calendar of traditional festivals and events, showcasing the diverse celebrations that enrich the nation's heritage.
        
          </p>
          <button className="explore-btn">Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default Calender;
 