import { useState } from "react";

const ProfessionalInfo = ({ professional, setProfessional }) => {
  // const [jobTitle, setJobTitle] = useState("");
  // const [companyName, setCompanyName] = useState("");
  // const [jobDescription, setJobDescription] = useState("");
  // const [jobStart, setJobStart] = useState("");
  // const [jobEnd, setJobEnd] = useState("");
  const [formProfessional, setFormProfessional] = useState({
    jobTitle: "",
    companyName: "",
    jobDescription: "",
    jobStart: "",
    jobEnd: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Antes de adicionar:", professional);

    setProfessional((prev) => [
      ...prev,
      { ...formProfessional, id: crypto.randomUUID() },
    ]);

    setFormProfessional({
      jobTitle: "",
      companyName: "",
      jobDescription: "",
      jobStart: "",
      jobEnd: "",
    });

    // setProfessional({
    //   jobTitle: "",
    //   companyName: "",
    //   jobDescription: "",
    //   jobStart: "",
    //   jobEnd: "",
    // });
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
            value={formProfessional.jobTitle}
            onChange={(e) =>
              setFormProfessional({
                ...formProfessional,
                jobTitle: e.target.value,
              })
            }
          />
        </label>
        <label>
          <span>Company Name:</span>
          <input
            type="text"
            name="companyName"
            value={formProfessional.companyName}
            onChange={(e) =>
              setFormProfessional({
                ...formProfessional,
                companyName: e.target.value,
              })
            }
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
            value={formProfessional.jobDescription}
            onChange={(e) =>
              setFormProfessional({
                ...formProfessional,
                jobDescription: e.target.value,
              })
            }
          ></textarea>
        </label>
        <label>
          <span>Start Date:</span>
          <input
            type="date"
            name="jobStart"
            value={formProfessional.jobStart}
            onChange={(e) =>
              setFormProfessional({
                ...formProfessional,
                jobStart: e.target.value,
              })
            }
          />
        </label>
        <label>
          <span>End Date:</span>
          <input
            type="date"
            name="jobEnd"
            value={formProfessional.jobEnd}
            onChange={(e) =>
              setFormProfessional({
                ...formProfessional,
                jobEnd: e.target.value,
              })
            }
          />
        </label>
        <input type="submit" value="Add Professional Experience" />
      </div>
    </form>
  );
};

export default ProfessionalInfo;
