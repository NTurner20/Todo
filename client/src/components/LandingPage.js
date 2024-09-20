import React from "react";
import {Link} from "react-router-dom";

const LandingPage = () => {
    return (
        <>
        <div className="container mt-20" style={{backgroundColor : 'lightgrey',padding: 20}}>
            <h1>Welcome to Todoy!</h1>
            <div className="row">
                <div className="col col-1">
                <Link to='/login' className='btn btn-primary'>Login</Link>
                </div>
                <div className="col col-1">
                <Link to='/register' className='btn btn-primary'>Register</Link>
                </div>
            </div>
        </div>
        
        </>
    )
};

export default LandingPage;