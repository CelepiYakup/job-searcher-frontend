'use client';

import JobList from './components/JobList';

export default function Home() {
  return (
    <div style={{ textAlign: 'center',}}>
      <h1 style={{ color: '#212121' }}>Job List</h1>
      <JobList />
    </div>
  );
}
