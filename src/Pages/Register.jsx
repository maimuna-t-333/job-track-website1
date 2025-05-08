import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const  {createUser,setUser}=use(AuthContext)
    const handleRegister=(e)=>{
        e.preventDefault();
        console.log(e.target)
        const name=e.target.name.value
        const email=e.target.email.value
        const photo=e.target.photoUrl.value
        const pass=e.target.password.value
        console.log({name,email,photo,pass}),
        createUser(email,pass)
        .then(result=>{
            const user=result.user
            console.log(user)
            setUser(user)
        })
        .catch(error=>{
            console.log(error)
        })

    }
    return (
        <div className='flex justify-center items-center '>
             <div className="card bg-base-100  w-11/12 mx-auto mt-20 max-w-sm shrink-0 shadow-2xl ">
                <div className="card-body">
                    <form onSubmit={handleRegister} className="fieldset">
                        <h2 className='text-3xl mb-4 font-bold text-accent'>Register Now!!</h2>
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input" placeholder="Name" required />
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" required />
                        <label className="label">Photo URL</label>
                        <input type="text" name='photoUrl' className="input" placeholder="Photo URL" required />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" required />
                        
                        <button type='submit' className="btn btn-neutral mt-4 bg-base-200 border-none text-black my-2">Register</button>
                        <p>Already register? Please <Link to='/login'> <span className='text-blue-400'>Login</span> </Link> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;