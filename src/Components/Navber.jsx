import React, { use } from 'react';
import { Link } from 'react-router';
import logo from '../assets/logo.png'
import { AuthContext } from '../Provider/AuthProvider';
import userI from '../../public/image/user.png'
// import { Helmet } from 'react-helmet';



const Navber = () => {

    const { user, logOut} = use(AuthContext)
    const handleLogOut=()=>{
        // alert('logout')
        logOut()
        .then(result=>{
            // console.log(result)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (

        <div className='w-full'>
            <div className="navbar bg-base-300 shadow-sm justify-between w-full px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">

{
                            user ? (<>
                                <li><Link to="/profile">
                                    <img src={userI} className="w-10 h-10 border rounded-full hover:cursor-pointer" alt="Profile" />
                                </Link></li>
                                <Link to='/'><button className='bg-[#00507A] text-white px-6 font-semibold rounded py-2 hover:cursor-pointer'>LogOut</button></Link>
                            </>) : (<><Link className='text-[#00507A] text-sm font-semibold' to='/login'>Login</Link>
                                <Link className='text-[#00507A] text-sm font-semibold' to='/register'>Registration</Link> </>)
                        }

                        </ul>
                    </div>
                    <img className='w-[50px] h-[50px] rounded-2xl' src={logo} alt="" />
                    <h2 className='font-bold  text-2xl ml-4 text-[#00507A]'>HireTrack</h2>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 gap-5 ">
                        {
                            user ? (<>
                                <li><Link to="/profile">
                                    <img src={userI} className="w-10 h-10 border rounded-full hover:cursor-pointer  " alt="Profile" />
                                </Link></li>
                                <Link to='/'><button onClick={handleLogOut} className='bg-[#00507A] text-white px-6 font-semibold rounded py-2 hover:cursor-pointer'>LogOut</button></Link>
                            </>) : (<><Link className='text-[#00507A] text-sm font-semibold' to='/login'>Login</Link>
                                <Link className='text-[#00507A] text-sm font-semibold' to='/register'>Registration</Link> </>)
                        }

                    </ul>
                </div>

            </div>
        </div>

    );
};

export default Navber;