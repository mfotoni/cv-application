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

  return (
    <>
      <PersonalInfo personal={personal} setPersonal={setPersonal} />
      <EducationInfo education={education} setEducation={setEducation} />
      <ProfessionalInfo
        professional={professional}
        setProfessional={setProfessional}
      />
      <CurriculumPage
        personal={personal}
        education={education}
        professional={professional}
      />
    </>
  );
}

export default App;
