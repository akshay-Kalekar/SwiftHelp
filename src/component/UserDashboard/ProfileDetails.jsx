import React, { useState,useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
const ProfileDetails = ( ) => {
  const { username } = useParams();
  console.log(username);
  const [formData, setFormData] = useState({
    UserID: '',
    FullName: '',
    Email: '',
    ContactNo: '',
    Job: '',
    Age: '',
    DOB: '',
    BloodGrp: '',
    Address: '',
    City: '',
    State: '',
    ZipCode: '',
    DonationHistory: '',
    MedicalHistory: '',
    Notify: false,
    SOSNotify: false,
  });
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/user/${username}`);
        const userData = response.data[0]; // Assuming response.data is the user data object
        setFormData(userData); // Update formData state with fetched data
        console.log(userData)
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();

    return () => {
      console.log('Cleanup',formData); 
    };
  }, []);
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3000/api/user/${username}`, 
      formData)
    // Handle form submission here, you can send formData to backend or perform any other action
    console.log(formData);
  };
  return (
    <>
    <div className="w-[98vw] flex flex-col justify-center items-center  gap-2" data-theme="light">
      <h1 className='underline underline-offset-[6px] text-4xl font-serif p-4'> FORM </h1>
   
      <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4 px-4 lg:px-48 py-10'>
        <div>
          Full Name
          <label className="input input-bordered flex items-center gap-2  bg-slate-100" >
            <input disabled type="text" className="grow bg-slate-100" name="FullName" value={formData.FullName} onChange={handleChange} />
          </label>
        </div>
        <div>
          Email Address
          <label className="input input-bordered flex items-center gap-2" >
            <input   type="email" className="grow" name="Email" value={formData.Email} onChange={handleChange} />
          </label>
        </div>
        <div>

          Contact Number
          <label className="input input-bordered flex items-center gap-2" >
            <input type="text" className="grow" name="ContactNo" value={formData.ContactNo} onChange={handleChange} />
          </label>
        </div>
        <div>

          Occupation
          <label className="input input-bordered flex items-center gap-2 bg-slate-100" >
            <input disabled type="text" name="Job" value={formData.Job} onChange={handleChange} />
          </label>
        </div>
        <div className='flex gap-8 flex-wrap'>
          <div>
            Age
            <label className="input input-bordered flex items-center gap-2" >
              <input type="text" name="Age" value={formData.Age} onChange={handleChange} />
            </label>
          </div>
          <div>
            Date of Birth
            <label className="input input-bordered flex items-center gap-2" >
              <input  type="date" name="DOB" value={formData.DOB} onChange={handleChange} />
            </label>
          </div>
          <div>
            Blood Type
            <label className="input input-bordered flex items-center gap-2 bg-slate-100" >
              <select disabled name="BloodGrp" value={formData.BloodGrp} onChange={handleChange}>
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
            <input type="text" name="Address" value={formData.Address} onChange={handleChange} />
          </label>
        </div>
        <div className='flex gap-8 flex-wrap'>
          <div>
            City
            <label className="input input-bordered flex items-center gap-2" >
              <input type="text" name="City" value={formData.City} onChange={handleChange} />
            </label>
          </div>
          <div>
            State
            <label className="input input-bordered flex items-center gap-2" >
              <input type="text" name="State" value={formData.State} onChange={handleChange} />
            </label>
          </div>
          <div>
            Zip Code
            <label className="input input-bordered flex items-center gap-2" >
              <input type="text" name="ZipCode" value={formData.ZipCode} onChange={handleChange} />
            </label>
          </div>
          <div >
            Last time donated blood ?
            <label className="input input-bordered flex items-center gap-2 " >
              <select name="DonationHistory" value={formData.DonationHistory} onChange={handleChange} className='w-full outline-none'>
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
            <textarea name="MedicalHistory" className="w-full p-2 border-none outline-none " value={formData.MedicalHistory} onChange={handleChange} />
          </label>
        </div>
        <div className="input input-bordered flex items-center gap-2" >
          Notification for Blood Donation
          <input type="checkbox" name="Notify" checked={formData.Notify} onChange={() => setFormData(prevState => ({ ...prevState, Notify: !prevState.Notify }))} />
        </div>
        <div className="input input-bordered flex items-center gap-2" >
          Available for emergency donation
          <input type="checkbox" name="SOSNotify" checked={formData.SOSNotify} onChange={() => setFormData(prevState => ({ ...prevState, SOSNotify: !prevState.SOSNotify }))} />
        </div>
        <button type="submit" className='btn btn-outline'>Update Info</button>
      </form>
    </div>
    </>
  );
};

export default ProfileDetails;
