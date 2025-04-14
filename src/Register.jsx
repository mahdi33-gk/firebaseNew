import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const formHandler = e =>{
        e.preventDeafult();
        const email = e.taget.name.value;
        const password = e.taget.password.value;
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <h1 className="text-3xl font-bold">Register now!</h1>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={formHandler}>
              <fieldset className="fieldset">
                <label className="fieldset-label">Email</label>
                <input name='email' type="email" className="input" placeholder="Email" />
                <label className="fieldset-label">Password</label>
                <input
                 name='password'
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
              <h3 className="mt-3">Already have one? <Link to={'/login'} className="ml-2 underline">login now!</Link></h3>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Register;