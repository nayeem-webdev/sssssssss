import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto mt-2 md:mt-5 px-2 md:px-5">
      <div className="-mt-[100px] px-5 pt-28 pb-40 md:pb-56 lg:pb-[300px] xl:pb-80 flex flex-col items-center bg-primary text-white rounded-[32px]">
        <h1 className="text-center font-bold text-3xl w-full md:w-4/5 mb-6 md:text-5xl md:leading-[4rem]  mx-auto">
          Upgrade Your Tech Accessorize with Gadget Mafia Accessories
        </h1>
        <p className="text-center w-full md:w-3/5 mx-auto mb-6">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <button
          onClick={() => navigate("/shop")}
          className="bg-white hover:bg-white/95 rounded-full font-bold text-primary px-8 py-6 text-xl box-shadow-f"
        >
          Shop Now
        </button>
      </div>
      <div className="-mt-[150px] md:-mt-[200px] lg:-mt-[260px] xl:-mt-[300px] p-2 sm:p-4 lg:p-6 mx-auto bg-white bg-opacity-20 w-3/4 rounded-2xl border-2 border-white">
        <div className="h-[200px] sm:h-[300px] lg:h-[460px] xl:h-[560px] overflow-hidden rounded-2xl">
          <img
            src="/assets/banner.jpg" // Adjusted path
            alt="Banner Image"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
