import { useState } from "react";

import "./App.css";
import CurriculumPage from "./components/CurriculumPage";
import EducationInfo from "./components/EducationInfo";
import PersonalInfo from "./components/PersonalInfo";
import ProfessionalInfo from "./components/ProfessionalInfo";

function App() {
  const [personal, setPersonal] = useState({ name: "", email: "", phone: "" });
  const [education, setEducation] = useState([]);
  const [professional, setProfessional] = useState([]);

  const [editingEducation, setEditingEducation] = useState(null);
  const [editingProfessional, setEditingProfessional] = useState(null);

  const updateEducation = (id, updatedEdu) => {
    setEducation((prev) =>
      prev.map((edu) => (edu.id === id ? updatedEdu : edu))
    );
    setEditingEducation(null);
  };

  const updateProfessional = (id, updatedProf) => {
    setProfessional((prev) =>
      prev.map((prof) => (prof.id === id ? updatedProf : prof))
    );
    setEditingProfessional(null);
  };

  // const [editingEducationId, setEditingEducationId] = useState(null);

  // const handleEditEducation = (id, updatedEdu) => {
  //   setEducation((prev) =>
  //     prev.map((edu) => (edu.id === id ? { ...updatedEdu, id } : edu))
  //   );
  //   setEditingEducationId(null);
  // };

  return (
    <>
      <PersonalInfo personal={personal} setPersonal={setPersonal} />
      <EducationInfo
        education={education}
        setEducation={setEducation}
        updateEducation={updateEducation}
        editingEducation={editingEducation}
        setEditingEducation={setEditingEducation}
      />
      <ProfessionalInfo
        professional={professional}
        setProfessional={setProfessional}
        updateProfessional={updateProfessional}
        editingProfessional={editingProfessional}
        setEditingProfessional={setEditingProfessional}
      />
      <CurriculumPage
        personal={personal}
        education={education}
        professional={professional}
        // onEditEducation={(id, updatedEdu) => updateEducation(id, updatedEdu)}
        // onEditProfessional={(id, updatedProf) =>
        //   updateProfessional(id, updatedProf)
        // }
        onEditEducation={setEditingEducation}
        onEditProfessional={setEditingProfessional}
      />
    </>
  );
}

export default App;
