import React, { useState } from "react";
import { Link } from "react-router-dom";
const Register = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form"  onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} style={{backgroundColor: "lightcyan"}} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
            <label htmlFor="email">email</label>
            <input value={email} style={{backgroundColor: "lightcyan"}} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} style={{backgroundColor: "lightcyan"}} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Register</button>
        </form>

        <Link to='/login' className="link-btn">Already have an account? Login here.</Link>
        
    </div>
    )
}
export default Register;