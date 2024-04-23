import React, { useState } from 'react';
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
const Signup = () => {
  const { user} = useAuth0();
  const [formData, setFormData] = useState({
    UserID : user.sub,
    UserName: '',
    FirstName: '',
    LastName: '',
    Password: '',
    Email: '',
    PhoneNumber: '',
    Address: '',
    BloodType: '',
    MedicalHistory: '',
    Availability: '',
    Consent: false // assuming it's a boolean value
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3000/api/user',{
      formData
    })
    // Handle form submission here, you can send formData to backend or perform any other action
    console.log(formData);
  };
  return (
    <div className="w-[98vw] flex flex-col justify-center items-center  gap-2">
          <h1 className='underline underline-offset-[6px] text-4xl font-serif p-4'> FORM </h1>
    <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4 px-4 lg:px-48 py-10'>
      <div>
       Full Name
      <label className="input input-bordered flex items-center gap-2" >
        <input type="text" className="grow" name="UserName" value={formData.UserName} onChange={handleChange} />
      </label>
      </div>
      <div>

        Email Address
      <label className="input input-bordered flex items-center gap-2" >
        <input type="text" className="grow" name="FirstName" value={formData.FirstName} onChange={handleChange} />
      </label>
      </div>
      <div>

        Contact Number
      <label className="input input-bordered flex items-center gap-2" >
        <input type="text" className="grow" name="LastName" value={formData.LastName} onChange={handleChange} />
      </label>
      </div>
        <div>

        Occupation
      <label className="input input-bordered flex items-center gap-2" >
        <input type="password" name="Password" value={formData.Password} onChange={handleChange} />
      </label>
        </div>
      <div className='flex gap-8 flex-wrap'>
        <div>
        Age
      <label className="input input-bordered flex items-center gap-2" >
        <input type="password" name="Password" value={formData.Password} onChange={handleChange} />
      </label>
        </div>
        <div>
        Date of Birth
      <label className="input input-bordered flex items-center gap-2" >
        <input type="date" name="Password" value={formData.Password} onChange={handleChange} />
      </label>
        </div>
        <div>
        Blood Type
      <label className="input input-bordered flex items-center gap-2" >
      <select name="cars" id="cars">
    <option value="A+">A+</option>
    <option value="A-">A-</option>
    <option value="B+">B+</option>
    <option value="B-">B-</option>
    <option value="O+">O+</option>
    <option value="O-">O-</option>
    <option value="AB+">AB+</option>
    <option value="AB-">AB-</option>
  </select>
      </label>
        </div>

      </div>
      <div>

      Primary Address
      <label className="input input-bordered flex items-center gap-2" >
        <input type="email" name="Email" value={formData.Email} onChange={handleChange} />
      </label>
      </div>
      <div className='flex gap-8 flex-wrap'>
        <div>

        City
      <label className="input input-bordered flex items-center gap-2" >
        <input type="email" name="Email" value={formData.Email} onChange={handleChange} />
      </label>
        </div>
        <div>

        State
      <label className="input input-bordered flex items-center gap-2" >
        <input type="email" name="Email" value={formData.Email} onChange={handleChange} />
      </label>
        </div>
        <div>

        Zip Code
      <label className="input input-bordered flex items-center gap-2" >
        <input type="email" name="Email" value={formData.Email} onChange={handleChange} />
      </label>
        </div>
      <div >
        Last time donated blood ?
        <label className="input input-bordered flex items-center gap-2 " >
      <select name="cars" id="cars" className='w-full outline-none'>
        <option value="0">0 Month Ago</option>
        <option value="1">1 Month Ago</option>
        <option value="2">2 Month Ago</option>
        <option value="3">3+ Month Ago</option>
        <option value="4">Never Donated</option>
      </select>
      </label>

      </div>
      </div>
      <div>

        Medical History:
      <label className="input input-bordered flex items-center gap-2 h-fit p-4" >
        <textarea name="MedicalHistory"  className="w-full p-2 border-none outline-none " value={formData.MedicalHistory} onChange={handleChange} />
      </label>
      </div>
      <div className="input input-bordered flex items-center gap-2" >
        Notification for near donation camp  
        <input type="checkbox" name="Consent" checked={formData.Consent} onChange={() => setFormData(prevState => ({ ...prevState, Consent: !prevState.Consent }))} />
      </div>
      <div className="input input-bordered flex items-center gap-2" >
        Available for emergency donation
        <input type="checkbox" name="Consent" checked={formData.Consent} onChange={() => setFormData(prevState => ({ ...prevState, Consent: !prevState.Consent }))} />
      </div>
      <button type="submit" className='btn btn-outline'>Submit</button>
    </form>
    </div>
  );
};

export default Signup;
