import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const fetchJobs = () => {
  return axios.get(`${API_BASE_URL}/jobs`);
};

export const checkQualification = (jobDescription, userProfile) => {
  return axios.post(`${API_BASE_URL}/check-qualification`, { jobDescription, userProfile });
};

export const generateCoverLetter = (jobDescription, userProfile) => {
  return axios.post(`${API_BASE_URL}/generate-cover-letter`, { jobDescription, userProfile });
};
