const CurriculumPage = ({
  personal,
  education,
  professional,
  onEditEducation,
  onEditProfessional,
}) => {
  return (
    <div id="curriculum-page">
      Curriculum Page
      {/* Things to renderize curriculum info */}
      <div className="personal-display">
        <h3>Personal Info</h3>
        <p>Name: {personal?.name || "-"}</p>
        <p>E-mail: {personal?.email || "-"}</p>
        <p>Phone: {personal?.phone || "-"}</p>
        <button>Edit</button>
        <button>Delete</button>
      </div>
      {/* renderize personal info */}
      <div className="education-display">
        <h3>Education</h3>
        <ul>
          {education.map((edu) => (
            <li key={edu.id}>
              {edu.schoolName} - {edu.degree} - {edu.studyDate}
              <button onClick={() => onEditEducation(edu)}>Edit</button>
              <button>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      {/* <p>School Name:{education?.schoolName || "-"}</p>
      <p>Degree:{education?.degree || "-"}</p>
      <p>Study Date:{education?.studyDate || "-"}</p> */}
      {/* renderize education info */}
      <div className="professional-display">
        <h3>Professional Experience</h3>
        <ul>
          {professional.map((prof) => (
            <li key={prof.id}>
              {prof.jobTitle} - {prof.companyName}
              <p> {prof.jobDescription} </p>
              {prof.jobStart} until: {prof.jobEnd}
              <button onClick={() => onEditProfessional(prof)}>Edit</button>
              <button>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      {/* renderize professional info */}
    </div>
  );
};

export default CurriculumPage;
