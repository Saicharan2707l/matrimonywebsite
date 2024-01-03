import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [mes, setMes] = useState("");
  const navigate = useNavigate();


  const checkPassword = (password) => {
    var strength = 0;
    if (password.match(/[a-z]+/)) {
      strength += 1;
    }
    if (password.match(/[A-Z]+/)) {
      strength += 1;
    }
    if (password.match(/[0-9]+/)) {
      strength += 1;
    }
    if (password.match(/[$@#&!]+/)) {
      strength += 1;
    }
    if (password.length < 8) {
      strength = 0;
    }
    if (strength === 0) {
      setMes("Password is too weak");
    }
    if (strength === 1) {
      setMes("Password is weak");
    }
    if (strength === 2) {
      setMes("Password is medium");
    }
    if (strength === 3) {
      setMes("Password is strong");
    }
    if (strength === 4) {
      setMes("Password is very strong");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", {
        name,
        email,
        password: pass,
      })
      .then((res) => {
        console.log(res.data);
        alert("User created successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("Error creating user");
      });
      navigate('/userDetails')
  };
  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full name</label>
        <input
          value={name}
          style={{ backgroundColor: "lightcyan" }}
          name="name"
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder="full Name"
        />
        <label htmlFor="email">email</label>
        <input
          value={email}
          style={{ backgroundColor: "lightcyan" }}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">password</label>
        <input
          value={pass}
          style={{ backgroundColor: "lightcyan" }}
          onChange={(e) => {
            const newPassword = e.target.value;
            setPass(newPassword);
            checkPassword(newPassword);
          }}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <p>{mes}</p>
        <button type="submit">Register</button>
      </form>

      <Link to="/login" className="link-btn">
        Already have an account? Login here.
      </Link>
    </div>
  );
};
export default Register;
