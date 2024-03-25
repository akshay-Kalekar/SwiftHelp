import React, { useState } from 'react';
import axios from 'axios';
const Signup = () => {
  const [formData, setFormData] = useState({
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
    await axios.post('http://localhost:3000/api/signup',{
      formData
    })
    // Handle form submission here, you can send formData to backend or perform any other action
    console.log(formData);
  };

  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center">

    <form onSubmit={handleSubmit} className='card w-96 flex flex-col gap-4'>
      <label className="input input-bordered flex items-center gap-2" >
        User Name:
        <input type="text" className="grow" name="UserName" value={formData.UserName} onChange={handleChange} />
      </label>
      <label className="input input-bordered flex items-center gap-2" >
        First Name:
        <input type="text" className="grow" name="FirstName" value={formData.FirstName} onChange={handleChange} />
      </label>
      <label className="input input-bordered flex items-center gap-2" >
        Last Name:
        <input type="text" className="grow" name="LastName" value={formData.LastName} onChange={handleChange} />
      </label>
      <label className="input input-bordered flex items-center gap-2" >
        Password:
        <input type="password" name="Password" value={formData.Password} onChange={handleChange} />
      </label>
      <label className="input input-bordered flex items-center gap-2" >
        Email:
        <input type="email" name="Email" value={formData.Email} onChange={handleChange} />
      </label>
      <label className="input input-bordered flex items-center gap-2" >
        Phone Number:
        <input type="tel" name="PhoneNumber" value={formData.PhoneNumber} onChange={handleChange} />
      </label>
      <label className="input input-bordered flex items-center gap-2" >
        Address:
        <input type="text" className="grow" name="Address" value={formData.Address} onChange={handleChange} />
      </label>
      <label className="input input-bordered flex items-center gap-2" >
        Blood Type:
        <input type="text" className="grow" name="BloodType" value={formData.BloodType} onChange={handleChange} />
      </label>
      <label className="input input-bordered flex items-center gap-2" >
        Medical History:
        <textarea name="MedicalHistory" value={formData.MedicalHistory} onChange={handleChange} />
      </label>
      <label className="input input-bordered flex items-center gap-2" >
        Availability:
        <input type="text" className="grow" name="Availability" value={formData.Availability} onChange={handleChange} />
      </label>
      <label className="input input-bordered flex items-center gap-2" >
        Consent:
        <input type="checkbox" name="Consent" checked={formData.Consent} onChange={() => setFormData(prevState => ({ ...prevState, Consent: !prevState.Consent }))} />
      </label>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default Signup;
