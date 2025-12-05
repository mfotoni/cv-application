import { useState, useEffect } from "react";

const PersonalInfo = ({
  personal,
  setPersonal,
  editingPersonal,
  setEditingPersonal,
}) => {
  const [formPersonal, setFormPersonal] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (editingPersonal) {
      setFormPersonal(personal);
    }
  }, [editingPersonal, personal]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPersonal(formPersonal);
    setEditingPersonal(false);

    console.log(personal);
    setFormPersonal({ name: "", email: "", phone: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p> Personal Info</p>
        <label>
          <span>Name: </span>
          <input
            type="text"
            name="name"
            value={formPersonal.name}
            onChange={(e) =>
              setFormPersonal({ ...formPersonal, name: e.target.value })
            }
          />
        </label>
        <label>
          <span>E-mail: </span>
          <input
            type="email"
            name="email"
            value={formPersonal.email}
            onChange={(e) =>
              setFormPersonal({ ...formPersonal, email: e.target.value })
            }
          />
        </label>
        <label>
          <span>Phone Number: </span>
          <input
            type="text"
            name="phone"
            value={formPersonal.phone}
            onChange={(e) =>
              setFormPersonal({ ...formPersonal, phone: e.target.value })
            }
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default PersonalInfo;
