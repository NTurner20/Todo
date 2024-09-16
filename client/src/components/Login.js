import React from "react";

const Login = ({setAuth}) => {
    return (
        <>
        <h1>Login</h1>
        <button onClick={() => setAuth(true)} className="btn btn-primary">Authenticate</button>
        </>
    );
};

export default Login;