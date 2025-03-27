import logo from './logo.svg';
import './App.css';

import { Routes, BrowserRouter as Router, Route, Link, Navigate } from "react-router-dom";
import FeedbackForm from './components/FeedbackForm';
import ReviewList from './components/ReviewList';

function App() {
  return (
    <Router>
      <h1>Movie Feedback Form🎬</h1>
      <div>
        <nav>
          <Link to="/feedback" style={{ marginRight: '10px' }}>Give Feedback</Link>
          <Link to="/reviews">View Review</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Navigate to="/feedback" />} />
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/reviews" element={<ReviewList />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;