import { useState } from "react";

const EducationInfo = ({ education, setEducation }) => {
  const [formEducation, setFormEducation] = useState({
    schoolName: "",
    degree: "",
    studyDate: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Antes de adicionar:", education);

    // setEducation((prev) => {
    //   const newEducation = [...prev, { ...formEducation, id: Date.now() }];
    //   console.log("Depois de adicionar:", newEducation); // debug
    //   return newEducation;
    // });
    setEducation((prev) => [
      ...prev,
      { ...formEducation, id: crypto.randomUUID() },
    ]);
    setFormEducation({ schoolName: "", degree: "", studyDate: "" });
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
            value={formEducation.schoolName}
            onChange={(e) =>
              setFormEducation({ ...formEducation, schoolName: e.target.value })
            }
          />
        </label>
        <label>
          <span>Degree:</span>
          <input
            type="text"
            name="degree"
            value={formEducation.degree}
            onChange={(e) =>
              setFormEducation({ ...formEducation, degree: e.target.value })
            }
          />
        </label>
        <label>
          <span>Study date:</span>
          <input
            type="date"
            name="studyDate"
            value={formEducation.studyDate}
            onChange={(e) =>
              setFormEducation({ ...formEducation, studyDate: e.target.value })
            }
          />
        </label>
        <input type="submit" value="Add Education" />
      </div>
    </form>
  );
};

export default EducationInfo;
