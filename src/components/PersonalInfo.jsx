// import { useState } from "react";

const PersonalInfo = ({ personal, setPersonal }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(personal);

    // setName("");
    // setEmail("");
    // setPhone("");
    // setPersonal({ name: "", email: "", phone: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p> Personal Info</p>
        <label>
          <span>Name: </span>
          <input
            type="text"
            name="name"
            value={personal.name}
            onChange={(e) => setPersonal({ ...personal, name: e.target.value })}
          />
        </label>
        <label>
          <span>E-mail: </span>
          <input
            type="email"
            name="email"
            value={personal.email}
            onChange={(e) =>
              setPersonal({ ...personal, email: e.target.value })
            }
          />
        </label>
        <label>
          <span>Phone Number: </span>
          <input
            type="text"
            name="phone"
            value={personal.phone}
            onChange={(e) =>
              setPersonal({ ...personal, phone: e.target.value })
            }
          />
        </label>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default PersonalInfo;
