import { useState } from "react";

const PersonalInfo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(phone);

    setName("");
    setEmail("");
    setPhone("");
  };

  // const handleName = (e) => {
  //   setName(e.target.value);
  // };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p> Personal Info</p>
        <label>
          <span>Name: </span>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          <span>E-mail: </span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Phone Number: </span>
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default PersonalInfo;
