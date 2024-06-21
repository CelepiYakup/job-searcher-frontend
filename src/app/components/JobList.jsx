import React, { useState, useEffect } from "react";
import axios from "axios";

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        const fetchJobs = async () => {
            const result = await axios.get('/jobs');
            setJobs(result.data);
            setFilteredJobs(result.data);
        };
        fetchJobs();
    }, []);

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
        const filtered = jobs.filter(job => job.title.toLowerCase().includes(e.target.value.toLowerCase()));
        setFilteredJobs(filtered);
    };

    return (
        <div>
            <input type="text" value={filter} onChange={handleFilterChange} placeholder="Filter" />
            <ul>
                {filteredJobs.map((job, index) => (
                    <li key={index}>
                        <h3>{job.title}</h3>
                        <p>{job.company} - {job.location}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JobList;