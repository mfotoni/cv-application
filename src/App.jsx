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

  const [editingPersonal, setEditingPersonal] = useState(null);
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

  const deleteEducation = (id) => {
    setEducation((prev) => prev.filter((edu) => edu.id !== id));
  };

  const deleteProfessional = (id) => {
    setProfessional((prev) => prev.filter((prof) => prof.id !== id));
  };

  return (
    <>
      <PersonalInfo
        personal={personal}
        setPersonal={setPersonal}
        editingPersonal={editingPersonal}
        setEditingPersonal={setEditingPersonal}
      />
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
        onEditPersonal={() => setEditingPersonal(true)}
        onEditEducation={setEditingEducation}
        onEditProfessional={setEditingProfessional}
        onDeleteEducation={deleteEducation}
        onDeleteProfessional={deleteProfessional}
      />
    </>
  );
}

export default App;
