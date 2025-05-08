import React, { use } from 'react';
import Navber from '../Components/Navber';
import Footer from '../Components/Footer';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router';

const Profile = () => {
    const navigate=useNavigate()
    const handleUpdate=()=>{
        navigate('/updateProfile')
    }
    const { user } = use(AuthContext);
    return (
        <div>
            <Navber></Navber>
            <div className="max-w-md mx-auto my-10 p-6 bg-white rounded shadow">
                <h2 className="text-2xl font-bold mb-4 text-center">My Profile</h2>
                <div className="flex flex-col items-center gap-4">
                    <img
                        src={user?.photoURL || '/image/user.png'}
                        alt="User"
                        className="w-24 h-24 rounded-full border"
                    />
                    <h3 className="text-xl font-semibold">{user?.displayName || 'No Name Available'}</h3>
                    <p className="text-gray-600">{user?.email}</p>
                    <button onClick={handleUpdate} className='bg-[#00507A] rounded-xl text-white px-4 py-2 hover:cursor-pointer'>Update information</button>
                    
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Profile;