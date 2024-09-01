import React from 'react';

const Login = () => {
    return (
        <div>
        <h1>Login</h1>
        <label name="email">
            Email ID <input></input>
        </label>
        <label name="password"> 
            Password <input></input>
        </label>
        <button>Login</button>
        <p>Forgot password?</p>
        <p>Don't have an account? Create new</p>
        <p>or login with</p>
        <button>Sign in with Google</button>
        </div>
    )
}

export default Login

