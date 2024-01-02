import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!email || !password) {
            alert('Please enter all the Required fields');
            return;
        }
        
        axios.post( 'http://localhost:3001/login', {email, password})
        .then(result => {
            console.log(result);
            if(result.data === "Success"){
                console.log("Login Success");
                alert('Login successful!')
                navigate('/home');
            }
            else{
                alert('Incorrect password! Please try again.');
            }
        })
        .catch(err => console.log(err));
    }



    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} style={{backgroundColor: "lightcyan"}}onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input  style={{backgroundColor: "lightcyan"}} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <Link to='/register' className="btn btn-secondary">Don't have an account? Register here.</Link>
        </div>
    )
}


export default Login;