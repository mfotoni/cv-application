const CurriculumPage = ({ personal, education, professional }) => {
  return (
    <div id="curriculum-page">
      Curriculum Page
      {/* Things to renderize curriculum info */}
      <h3 className="personal-display">Personal Info</h3>
      <p>Name: {personal?.name || "-"}</p>
      <p>E-mail: {personal?.email || "-"}</p>
      <p>Phone: {personal?.phone || "-"}</p>
      {/* renderize personal info */}
      <h3 className="education-display">Education</h3>
      <ul>
        {education.map((edu) => (
          <li key={edu.id}>
            {edu.schoolName} - {edu.degree} - {edu.studyDate}
          </li>
        ))}
      </ul>
      {/* <p>School Name:{education?.schoolName || "-"}</p>
      <p>Degree:{education?.degree || "-"}</p>
      <p>Study Date:{education?.studyDate || "-"}</p> */}
      {/* renderize education info */}
      <h3 className="professional-display">Professional Experience</h3>
      <ul>
        {professional.map((prof) => (
          <li key={prof.id}>
            {prof.jobTitle} - {prof.companyName} <p> {prof.jobDescription} </p>
            {prof.jobStart} until: {prof.jobEnd}
          </li>
        ))}
      </ul>
      {/* <p>Job Title:{professional?.jobTitle || "-"}</p>
      <p>Company Name:{professional?.companyName || "-"}</p>
      <p>Job Description:{professional?.jobDescription || "-"}</p>
      <p>
        Period:{professional?.jobStart || "-"} - {professional?.jobEnd || "-"}
      </p> */}
      {/* renderize professional info */}
    </div>
  );
};

export default CurriculumPage;
