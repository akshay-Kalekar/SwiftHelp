const Middle = () => {
  return (
    <section className="bg-white py-16 lg:py-32">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 px-6">
          <h1 className="text-7xl font-bold text-orange-500">
            Donate to <br /> Keep Families <br />
            <u>together</u> in <br />
            the Future
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            In the 14 years since Jacob Benson sadly passed away from leukaemia,
            over 60,000 people of all ages have lost their lives to the disease.
            Donate this Christmas to help keep families together in the future.
          </p>

          <div className="mt-8">
            <button className="px-4 py-2 mr-4 bg-gray-500 text-white hover:bg-black">
              Donate Today
            </button>
            <button className="px-4 py-2 bg-gray-500 text-white hover:bg-black">
              Ask For Blood Bag
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <img
            src="/images/image-2.png"
            alt="Your Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div
        style={{ textAlign: "center" }}
        className="container mx-auto my-8 py-16 space-between-0"
      >
        <p className="text-2xl font-bold text-orange-500">
          Fund the <u>life-changing</u> research that matters most.{" "}
          <u>Together</u> we can help <br /> people, save people by spreading
          awareness, helping and donating.
        </p>
      </div>
    </section>
  );
};

export default Middle;
