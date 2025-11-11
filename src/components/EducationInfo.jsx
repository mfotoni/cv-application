import { useState } from "react";

const EducationInfo = () => {
  const [schoolName, setSchoolName] = useState("");
  const [degree, setDegree] = useState("");
  const [studyDate, setStudyDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(schoolName);
    console.log(degree);
    console.log(studyDate);

    setSchoolName("");
    setDegree("");
    setStudyDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>Education Info</p>
        <label>
          <span>School Name:</span>
          <input
            type="text"
            name="schoolName"
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
          />
        </label>
        <label>
          <span>Degree:</span>
          <input
            type="text"
            name="degree"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
          />
        </label>
        <label>
          <span>Study date:</span>
          <input
            type="date"
            name="studyDate"
            value={studyDate}
            onChange={(e) => setStudyDate(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default EducationInfo;
