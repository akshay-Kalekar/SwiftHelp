const Form = () => {
  return (
    <div
      id="formbox"
      className="flex flex-col items-center max-w-2xl p-6 mx-auto space-y-6 bg-gray-200 rounded-md shadow-md"
    >
      <p
        style={{ marginRight: "auto", fontSize: "12px" }}
        className=" font-semibold "
      >
        How can you help
      </p>
      <p id="formtext" className="text-lg font-medium">
        Enable us to <span className="border-black px-2 py-1">fund</span>{" "}
        innovative research
      </p>

      <div className="justify-between flex flex-row space-x-3">
        <button className="border-black border w-full px-6 py-2 bg-white text-black hover:bg-black hover:text-white">
          Monthly
        </button>
        <button
          style={{ marginLeft: "0", borderColor: "black" }}
          className="border-black border w-full px-6 py-2 bg-black text-white hover:bg-white hover:text-black"
        >
          ONE-OFF
        </button>
      </div>

      <div className="justify-between flex flex-row space-x-3">
        <button className="border-black border px-4 py-2 bg-white text-black hover:bg-black hover:text-white">
          £15
        </button>
        <button className="border-black border px-4 py-2 bg-white text-black hover:bg-black hover:text-white">
          £30
        </button>
        <button className="border-black border px-4 py-2 bg-white text-black hover:bg-black hover:text-white">
          £50
        </button>
        <button className="border-black border px-4 py-2 bg-white text-black hover:bg-black hover:text-white">
          £100
        </button>
      </div>

      <div className="flex flex-row space-x-3">
        <button className="border border-black px-4 py-2 bg-white text-black hover:bg-black hover:text-white">
          Other
        </button>
        <input
          style={{ marginLeft: "0" }}
          type="text"
          className="border border-black px-4 py-2 border border-red-500 focus:outline-black focus:border-black"
          placeholder="Input Box"
        />
      </div>

      <button
        id="formdonatebtn"
        className="w-full px-24 py-2 bg-orange-700 text-white rounded-md hover:bg-gray-800"
      >
        Donate
      </button>

      <div className="flex justify-center space-x-3">
        <img
          src="/images/apple-paysvg.png"
          alt="Image 1"
          className="w-12 h-5"
        />
        <img
          src="/images/google-paysvg.png"
          alt="Image 2"
          className="w-12 h-5"
        />
        <img src="/images/paypalsvg.png" alt="Image 3" className="w-12 h-5" />
        <img src="/images/visasvg.png" alt="Image 4" className="w-12 h-5" />
        <img
          src="/images/mastercardsvg.png"
          alt="Image 5"
          className="w-12 h-5"
        />
      </div>
    </div>
  );
};

export default Form;
