import React, { useState, useEffect } from "react";
import axios from "axios";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      const result = await axios.get("/jobs");
      setJobs(result.data);
      setFilteredJobs(result.data);
    };
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const result = await axios.get("http://localhost:5000/api/jobs"); // Adjust the URL if necessary
      setJobs(result.data);
      setFilteredJobs(result.data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };
  

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    const filtered = jobs.filter((job) =>
      job.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  const handleSearch = () => {
    const filtered = jobs.filter((job) =>
      job.title.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Filter"
        style={{ padding: 10, margin: 20, borderRadius: 22 }}
      />
      <button
        style={{
          border: "1px solid black",
          padding: 12,
          borderRadius: 12,
          backgroundColor: "#ff0000",
          color: "#ffffff",
        }}
        onClick={handleSearch}
      >
        Search
      </button>
      <ul>
        {filteredJobs.map((job, index) => (
          <li key={index}>
            <h3>{job.title}</h3>
            <p>
              {job.company} - {job.location}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
