// import { useState } from "react";

import "./App.css";
import EducationInfo from "./components/EducationInfo";
import PersonalInfo from "./components/PersonalInfo";
import ProfessionalInfo from "./components/ProfessionalInfo";

function App() {
  return (
    <>
      <PersonalInfo />
      <EducationInfo />
      <ProfessionalInfo />
    </>
  );
}

export default App;
