import { useState, useEffect, useRef } from "react";

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
  const nameInputRef = useRef(null);

  useEffect(() => {
    if (editingPersonal) {
      setFormPersonal(personal);
      setTimeout(() => {
        nameInputRef.current?.focus();
      }, 0);
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
            ref={nameInputRef}
            type="text"
            name="name"
            value={formPersonal.name}
            onChange={(e) =>
              setFormPersonal({ ...formPersonal, name: e.target.value })
            }
            required
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
            required
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
            required
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default PersonalInfo;
