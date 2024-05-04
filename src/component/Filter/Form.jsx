import React, { useState } from 'react';
import axios from 'axios'; // Import Axios library

function Form() {
  const [formData, setFormData] = useState({
    FullName: '',
    Email: '',
    ContactNo: '',
    BloodGrp: '',
    MedicalHistory: '',
    City: '',
    State: '',
    ZipCode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send POST request to your API endpoint
      const response = await axios.post(`http://localhost:3000/api/donorsreq/`, formData);
      console.log('Form data sent:', response.data);
      // Handle success or show confirmation to the user
    } catch (error) {
      console.error('Error sending form data:', error);
      // Handle error or show error message to the user
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4 px-4 lg:px-48 py-10'>
      <h1 className=' font-bold text-3xl'>Blood Donation Request Form</h1>
        <div>
          Requester Name:
          <label className="input input-bordered flex items-center gap-2" >
            <input type="text" className="grow" name="FullName" value={formData.FullName} onChange={handleChange} />
          </label>
        </div>
        <div>
          Email Address
          <label className="input input-bordered flex items-center gap-2" >
            <input type="email" className="grow" name="Email" value={formData.Email} onChange={handleChange} />
          </label>
        </div>
        <div>
          Contact Number
          <label className="input input-bordered flex items-center gap-2" >
            <input type="text" className="grow" name="ContactNo" value={formData.ContactNo} onChange={handleChange} />
          </label>
        </div>
        <div className='w-fit'>
          Blood Type Needed :
          <label className="input input-bordered flex items-center w-fit" >
            <select name="BloodGrp" value={formData.BloodGrp} onChange={handleChange}>
              <option value=""></option>
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
        <div>
          Detail :
          <label className="input input-bordered flex items-center gap-2 h-fit p-4" >
            <textarea name="MedicalHistory" className="w-full p-2 border-none outline-none " value={formData.MedicalHistory} onChange={handleChange} />
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
        </div>
        <button type="submit" className='btn btn-outline'> Submit Request </button>
      </form>
    </div>
  );
}

export default Form;
