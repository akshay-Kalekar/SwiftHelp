import React from 'react';
import Form from './Form'; // Importing the component


const Endpart = () => {
  return (
    <div className="flex">
      {/* First div containing some component */}
      <div className="w-1/2 p-4">
        <Form />
      </div>

      {/* Second div containing an image */}
      <div className="w-1/2">
        <img src='/images/image-5-ZMR.png' alt="Your Image" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Endpart;
