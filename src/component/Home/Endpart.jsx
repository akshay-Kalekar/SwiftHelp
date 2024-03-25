import Form from "./Form"; // Importing the component

const Endpart = () => {
  return (
    <>
      <div className="flex">
        {/* First div containing some component */}
        <div className="w-1/3 p-4">
          {/* Comment out the form here */}
          {/* <Form /> */}
        </div>

        {/* Second div containing an image */}
        <div className="w-1/2 relative">
    

        
          <img
            src="/images/image-5-ZMR.png"
            alt="Your Image"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0">
            <div
              style={{
                position: "absolute",
                top: "10px",
                left: "90px",
                transform: "translateX(-100%)",
              }}
            >
              <Form /> {/* Apply position and offset styles */}
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          flexDirection: "row-reverse",
          marginRight: "17%",
          marginTop: "1%",
        }}
        className="flex"
      >
        <button className="ms-0 border-black border px-6 py-2 bg-white text-black hover:bg-black hover:text-white">
          Other Ways to Give
        </button>
      </div>
    </>
  );
};

export default Endpart;
