import { useState, useEffect } from "react";

const ProfessionalInfo = ({
  professional,
  setProfessional,
  updateProfessional,
  editingProfessional,
  // setEditingProfessional,
}) => {
  const [formProfessional, setFormProfessional] = useState({
    jobTitle: "",
    companyName: "",
    jobDescription: "",
    jobStart: "",
    jobEnd: "",
  });

  useEffect(() => {
    if (editingProfessional) {
      setFormProfessional(editingProfessional);
    } else {
      setFormProfessional({
        jobTitle: "",
        companyName: "",
        jobDescription: "",
        jobStart: "",
        jobEnd: "",
      });
    }
  }, [editingProfessional]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Antes de adicionar:", professional);

    if (editingProfessional) {
      updateProfessional(editingProfessional.id, {
        ...formProfessional,
        id: editingProfessional.id,
      });
    } else {
      setProfessional((prev) => [
        ...prev,
        { ...formProfessional, id: crypto.randomUUID() },
      ]);
    }

    setFormProfessional({
      jobTitle: "",
      companyName: "",
      jobDescription: "",
      jobStart: "",
      jobEnd: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          {editingProfessional
            ? "Edit Professional Experience"
            : "Add Professional Experience"}
        </p>
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
        <input
          type="submit"
          value={
            editingProfessional
              ? "Update Professional Experience"
              : "Add Professional Experience"
          }
        />
      </form>
    </div>
  );
};

export default ProfessionalInfo;
