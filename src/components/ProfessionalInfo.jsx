import { useState } from "react";

const ProfessionalInfo = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobStart, setJobStart] = useState("");
  const [jobEnd, setJobEnd] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(jobTitle);
    console.log(companyName);
    console.log(jobDescription);
    console.log(jobStart);
    console.log(jobEnd);

    setJobTitle("");
    setCompanyName("");
    setJobDescription("");
    setJobStart("");
    setJobEnd("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>Professional Experience</p>
        <label>
          <span>Job Title:</span>
          <input
            type="text"
            name="jobTitle"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </label>
        <label>
          <span>Company Name:</span>
          <input
            type="text"
            name="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </label>
        <label>
          <span>Job Description:</span>
          {/* <input
          type="text"
          name="jobDescription"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        /> */}
          <textarea
            name="jobDescription"
            onChange={(e) => setJobDescription(e.target.value)}
            value={jobDescription}
          ></textarea>
        </label>
        <label>
          <span>Start Date:</span>
          <input
            type="date"
            name="jobStart"
            value={jobStart}
            onChange={(e) => setJobStart(e.target.value)}
          />
        </label>
        <label>
          <span>End Date:</span>
          <input
            type="date"
            name="jobEnd"
            value={jobEnd}
            onChange={(e) => setJobEnd(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default ProfessionalInfo;
