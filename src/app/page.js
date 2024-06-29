"use client";

import JobList from "./components/JobList";

export default function Home() {
  return (
    <div style={{ textAlign: "center", backgroundColor: "orange", padding:20, margin:"0px 10px 0px 10px"}}>
      <h1
        style={{
          color: "#212121",
          border: "1px solid #212121",
          borderRadius: 22,
          padding: 20,
          margin: "20px 40px 20px 40px",
          fontWeight: "bold",
          fontSize: 24,
        }}
      >
        Job List
      </h1>
      <JobList />
    </div>
  );
}
