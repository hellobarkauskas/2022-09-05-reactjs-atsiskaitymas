import { useState } from "react";
import MainLayout from "./MainLayout";
import './FormStyle.css';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const userLogin = (event) => {
        event.preventDefault();
        fetch('https://autumn-delicate-wilderness.glitch.me/v1/auth/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })

        .then(response => response.json())
        .then(response => console.log(response))
        .catch(error => console.log(error))
        setEmail('');
        setPassword('');
    }

    return (
        <div>
            <MainLayout />

            <form className="login-form">
                <h2>Login page</h2>
                <label for='email'>Email</label>
                <input type="text" name="email" id="email" value={email} onChange={event => setEmail(event.target.value)}/>
                <label for='password'>Password</label>
                <input type="text" name="password" id="password" value={password} onChange={event => setPassword(event.target.value)}/>
                <button type="submit" onClick={event => userLogin(event)}>Login</button>
            </form>  
        </div>
    )
}

export default LoginForm;