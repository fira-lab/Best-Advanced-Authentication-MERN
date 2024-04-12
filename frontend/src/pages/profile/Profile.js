import React, { useState } from 'react';
import profileImg from "../../assets/avatarr.png";
import "./Profile.css";
import PageMenu from '../../components/pageMenu/PageMenu';

const initialState ={
    name: "",
    email: "",
    phone: "",
    bio: "",
    photo: "",
    role: "",
    isVerified: ""
    
}


const Profile = () => {
    const [profile, setProfile] = useState(initialState);
  
    const handleInputChange =() =>{};
  return (
    <section>
        <div className='container'>
            <PageMenu/>
            <h2>Profile</h2>
            <div className="--flex-start profile">
                <div className="card">
                    <>
                    <div className='profile-photo'>
                        <img src={profileImg} alt="Profile" />
                        <h3>Role: Subscriber</h3>
                    </div>
                    <form>
                       
                        <p>
                            <label>
                                Name:
                                </label>
                                <input type='text' 
                                accept='image/*'
                                name="name"
                                value={profile.name}
                                onChange={handleInputChange}/>
                            
                        </p>
                        <p>
                            <label>
                                Email:
                                </label>
                                <input type='text' 
                                accept='image/*'
                                name="email"
                                value={profile.name}
                                onChange={handleInputChange}
                                disabled/>
                            
                        </p>
                        <p>
                            <label>
                                Phone:
                                </label>
                                <input type='text' 
                                accept='image/*'
                                name="Phone"
                                value={profile.name}
                                onChange={handleInputChange}
                                disabled/>
                            
                        </p>
                        <p>
                            <label>
                                Email:
                                </label>
                                <textarea type='text' 
                                accept='image/*'
                                name="bio"
                                cols="30" rows="10">
                                </textarea>
                            
                        </p>
                        <button className='--btn --btn-primary --btn-block'>
                            Update Profile
                        </button>
                        
                        
                        
                    </form>
                    </>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Profile;
