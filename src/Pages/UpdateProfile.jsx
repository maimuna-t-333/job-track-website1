import React from 'react';
import Navber from '../Components/Navber';
import Footer from '../Components/Footer';

const UpdateProfile = () => {
    return (
        <div>
            <Navber></Navber>

            <div className="card bg-base-100 w-[400px] mx-w-sm mx-auto shrink-0 shadow-2xl my-6">
                <div className="card-body">
                    <form className="fieldset">
                        <h2 className='text-accent my-2 text-3xl'>Update Your Information</h2>
                        <label className="label">Name</label>
                        <input type="text" className="input" placeholder="Your Name" />
                        <label className="label">Photo URL</label>
                        <input type="text" className="input" placeholder="Your photo URL" />
                        
                        <button className="btn btn-neutral mt-4 bg-[#00507A]">Update</button>
                    </form>
                </div>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default UpdateProfile;