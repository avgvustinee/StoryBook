import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="bg-[#4daaa9] min-h-screen ">
      <div className="flex  flex-col items-center  ">
        <h1 className="text-[#d8edf3]  mt-40 mx-5 text-balance  text-3xl sm:text-5xl lg:text-7xl text-center tracking-wide   font-extrabold font-sfCompact uppercase animate-shake">
          Welcome to my computer science storybook
        </h1>
        <p className=" mt-28 mx-10 sm:mx-16 lg:mx-20 text-lg text-[#d8edf3] text-center font-semibold max-w-4xl animate-fade-up ">
          I am a tech enthusiast with a knack for turning caffeine into code.
          Whether I am wrangling React components or battling bugs, I am always
          up for a challenge. When I am not busy learning new frameworks or
          building projects, you will probably find me on the football field or
          brainstorming ideas for my next big adventure.
        </p>
        <p className="mt-10 mx-10  sm:mx-16 lg:mx-20 text-lg text-[#d8edf3] text-center font-bold max-w-4xl animate-fade-up">
          Grab some snack, it is going to
          be an exciting ride!.
        </p>
        <div className="mt-10  mb-10 flex justify-center motion-preset-fade animate-bounce ">
          <Link
            to="/stories"
            className=" flex  py-2  text-white rounded-md w-40 h-10 border hover:border-[#d8edf3] text-center font-roboto cursor-pointer hover:outline-dotted "
          >
            <span className="ml-2 font-medium text-[#d0e7ef] ">
              Start the Journey{" "}
            </span>
            <ChevronRight className="animate-pulse" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
