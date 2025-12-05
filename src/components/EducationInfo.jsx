import { useState, useEffect } from "react";

const EducationInfo = ({
  education,
  setEducation,
  updateEducation,
  editingEducation,
  setEditingEducation,
}) => {
  const [formEducation, setFormEducation] = useState({
    schoolName: "",
    degree: "",
    studyDate: "",
  });
  // const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    if (editingEducation) {
      setFormEducation(editingEducation);
    } else {
      setFormEducation({ schoolName: "", degree: "", studyDate: "" });
    }
  }, [editingEducation]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Antes de adicionar:", education);

    if (editingEducation) {
      updateEducation(editingEducation.id, {
        ...formEducation,
        id: editingEducation.id,
      });
    } else {
      setEducation((prev) => [
        ...prev,
        { ...formEducation, id: crypto.randomUUID() },
      ]);
    }

    // if (editingId) {
    //   updateEducation(editingId, { ...formEducation, id: editingId });
    //   setEditingId(null);
    // } else {
    //   setEducation((prev) => [
    //     ...prev,
    //     { ...formEducation, id: crypto.randomUUID() },
    //   ]);
    // }

    setFormEducation({ schoolName: "", degree: "", studyDate: "" });
  };

  // const handleEdit = (edu) => {
  //   setFormEducation(edu);
  //   setEditingId(edu.id);
  // };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>{editingEducation ? "Edit Education Info" : "Add Education"} </p>
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
        <input
          type="submit"
          value={editingEducation ? "Update Education" : "Add Education"}
        />
      </form>
    </div>
  );
};

export default EducationInfo;
