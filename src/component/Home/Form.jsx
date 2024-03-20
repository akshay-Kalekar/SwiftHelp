import React from 'react';

const Form = () => {
  return (
    <>
    <div className="text-center p-4 bg-gray-800">
      {/* Text at the top */}
      <p className='text-white '>How can you help</p>
      <h2 className="text-lg font-bold mb-4 text-orange-500">Enable us to fund innovative research</h2>

      {/* Two buttons below the text */}
      <div className="mb-4">
        <button className="px-4 py-2 mr-2 bg-white text-black rounded-md hover:bg-black hover:text-white">Monthly</button>
        <button className="px-4 py-2 mr-2 bg-white text-black rounded-md hover:bg-black hover:text-white">ONE-OFF</button>
      </div>

      {/* Four buttons in a row */}
      <div className="flex justify-center mb-4">
        <button className="px-4 py-2 mr-2 bg-white text-black rounded-md hover:bg-black hover:text-white">$$</button>
        <button className="px-4 py-2 mr-2 bg-white text-black rounded-md hover:bg-black hover:text-white">$$</button>
        <button className="px-4 py-2 mr-2 bg-white text-black rounded-md hover:bg-black hover:text-white">$$</button>
        <button className="px-4 py-2 mr-2 bg-white text-black rounded-md hover:bg-black hover:text-white">$$</button>
      </div>

      {/* One button and an input box in a row */}
      <div className="flex justify-center mb-4">
        <button className="px-4 py-2 mr-2 bg-white text-black rounded-md hover:bg-black hover:text-white">Other</button>
        <input type="text" className="px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500" placeholder="Input Box" />
      </div>

      {/* Finally, a button below */}
      <button className="px-4 py-2 bg-orange-700 text-white rounded-md hover:bg-gray-800">Donate</button>
    </div>
    <div className="flex justify-center mb-4">
        <img src="/images/apple-paysvg.png" alt="Image 1" className="w-auto h-auto mr-2" />
        <img src="/images/google-paysvg.png" alt="Image 2" className="w-auto h-auto mr-2" />
        <img src="/images/paypalsvg.png" alt="Image 3" className="w-auto h-auto mr-2" />
        <img src="/images/visasvg.png" alt="Image 4" className="w-auto h-auto mr-2" />
        <img src="/images/mastercardsvg.png" alt="Image 5" className="w-auto h-auto" />
      </div>
    </>
  );
};

export default Form;
