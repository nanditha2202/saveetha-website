import React from 'react';
import './AboutPage.css'; 
export default function AboutPage() {
  return (
    <div className="container">
      <div className="section">
        <h1>About Us</h1>
        <p>Welcome to SEC - Saveetha Engineering College (Autonomous), a distinguished institution...</p>
      </div>
      <div className="section">
        <h1>Affiliation/Accreditations</h1>
        <ul>
          <li>Autonomous institution affiliated with Anna University</li>
          <li>Approved by AICTE</li>
          <li>NBA accreditation for 5 undergraduate courses</li>
          <li>SIRO recognition by DSIR Government of India</li>
          <li>An 'A' grade from NAAC</li>
          <li>Ranked by NIRF</li>
        </ul>
      </div>
      <div className="section">
        <h1>Courses Offered</h1>
        <p>Our academic offerings include a variety of programs designed to prepare learners...</p>
      </div>
      <div className="section">
        <h1>Highlights</h1>
        <ul>
          <li>At Saveetha Engineering College, we understand the importance of adapting the learner-centric education...</li>
          <li>Our robust placement records speak volumes about the efficacy of our educational model, with more than...</li>
          <li>We are also proud to own the world's most powerful AI supercomputing facility, the NVIDIA DGX H100...</li>
          <li>At SEC, we don't just teach engineering; we inspire future innovators and leaders to achieve greatness...</li>
        </ul>
      </div>
    </div>
  );
}