import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FrontPage from './frontPage';
import TraditionalArt from './TraditionalArt';
import TraditionalCuisine from './TraditionalCuisine';
import Calender from './Calender';
import Arts from './Arts';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/traditional-arts" element={<TraditionalArt />} />
          <Route path="/traditional-cuisine" element={<TraditionalCuisine />} />
          <Route path="/calendar" element={<Calender />} />
          {/* If you want to include Arts component, add it as a route */}
          <Route path="/arts" element={<Arts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;