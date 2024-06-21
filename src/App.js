import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JobList from './components/JobList';
import CoverLetterGenerator from './components/CoverLetterGenerator';
import QualificationChecker from './components/QualificationChecker';

const App = () => {
  const userProfile = "User profile information"; 
  const jobDescription = "Job description information"; 

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<JobList />} />
          <Route path="/cover-letter" element={<CoverLetterGenerator jobDescription={jobDescription} userProfile={userProfile} />} />
          <Route path="/check-qualification" element={<QualificationChecker jobDescription={jobDescription} userProfile={userProfile} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
