'use client';

import CoverLetterGenerator from './components/CoverLetterGenerator';

const jobDescription = "Job description information"; 
const userProfile = "User profile information"; 

export default function CoverLetterPage() {
  return (
    <div>
      <h1>Generate Cover Letter</h1>
      <CoverLetterGenerator jobDescription={jobDescription} userProfile={userProfile} />
    </div>
  );
}
