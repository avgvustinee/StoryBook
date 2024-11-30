import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (

    <div className="bg-[#9bc9d4] min-h-screen ">
        <div className="flex  flex-col items-center  ">
          <h1 className="text-[#d8edf3]  mt-40 mx-5 text-balance  text-3xl sm:text-5xl lg:text-7xl text-center tracking-wide   font-extrabold font-sfCompact uppercase animate-slidein">
            Welcome to my computer science storybook
          </h1>
          <p className=" mt-28 mx-10 sm:mx-16 lg:mx-20 text-lg text-[#d8edf3] text-center font-light max-w-4xl animate-slidein ">
            I am a tech enthusiast with a knack for turning caffeine into code.
            Whether I am wrangling React components or battling bugs, I am always up
            for a challenge. When I am not busy learning new frameworks or building
            projects, you will probably find me on the football field or
            brainstorming ideas for my next big adventure.
          </p>
          <p className="mt-10 mx-10  sm:mx-16 lg:mx-20 text-lg text-[#d8edf3] text-center font-light max-w-4xl animate-slidein">
            Welcome to my computer science storybook grab a snack, it is going to be
            an exciting ride!.
          </p>
          <div className="mt-20 flex justify-center animate-slidein ">
            <Link
              to='/stories'
              className=" flex  py-2 bg-[#b1d9e7] text-white rounded-md w-40 h-10 border text-center hover:bg-[#8db6c1] font-roboto"
            >
              <span className="ml-2">Start the Journey </span>
              <ChevronRight className="animate-pulse" />
            </Link>
          </div>
        </div>
    </div>
  );
};

export default LandingPage;
