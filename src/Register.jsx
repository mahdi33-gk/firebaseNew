import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Register = () => {
    const {creatUser} = useContext(AuthContext);
    const formHandler = e =>{
        e.preventDefault();
        const emaill = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        
        creatUser(emaill,password)
        .then(result =>{
          console.log(result.user)
        })
        .catch(error=>{
          console.log('found error!')
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <h1 className="text-3xl font-bold">Register now!</h1>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={formHandler}>
              <fieldset className="fieldset">
                <label className="fieldset-label">Name</label>
                <input name='name' type="text" className="input" placeholder="Name" />
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