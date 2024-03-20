import React from 'react';

const Middle = () => {
  return (
    <>
    <div className="flex">
      {/* First div */}
      <div className="flex flex-col items-center justify-between w-1/2 p-4 bg-white">
        <div className='text-center'>
          <h1 className="text-6xl font-bold mb-4 text-orange-500">Donate to</h1>
          <h1 className="text-6xl font-bold mb-4 text-orange-500">Keep Families</h1>
          <h1 className="text-6xl font-bold mb-4 text-orange-500">together in</h1>
          <h1 className="text-6xl font-bold mb-4 text-orange-500">the Future</h1>
          <p className=''>In the 14 years since Jacob Benson sadly passed away from leukaemia,
over 60,000 people of all ages have lost their lives to the disease. Donate
this Christmas to help keep families together in the future.</p>
        </div>
        <div className="flex">
          <button className="px-4 py-2 mr-2 bg-gray-500 text-white rounded-md hover:bg-black">Donate Today</button>
          <button className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-black">Our Blogs</button>
        </div>
      </div>
      
      {/* Second div */}
      <div className="w-1/2">
        <img src='/images/image-2.png' alt="Your Image" className="w-full h-full object-cover" />
      </div>
    </div>
    <div className='text-center my-4'>
        <p className="text-2xl font-bold mb-4 text-orange-500" >fund the life-changing research that matters most. Together we can help people , save people by spreading awareness ,helping and donating</p>
    </div>
    </>
  );
};

export default Middle;
