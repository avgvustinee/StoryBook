import NavBarChapters from "../components/NavBarChapters";

const ChapterOne = () => {
  return (
    <div>
      <NavBarChapters />
      <div className="flex  flex-wrap mx-3 h-full sm:mx-[50px] lg:mx-[500px] mt-10 bg-slate-200 md:h-[600px] lg:w-[620px] lg:h-[600px]  border-b border-cyan-400 rounded-md">
        <h3 className="text-3xl text-center justify-center text-clip tracking-wider font-extrabold text-[#9bc9d4] border border-[#9bc9d4] rounded-md mx-2 mt-2">
          Experience Chapter: Turning Knowledge into Action
        </h3>
        <p className="text-start text-xs mt-3 mx-3 text-[#1a8795]  font-bold">
          "The most Powerful Person in the World is the Storyteller"{" "}
        </p>
        <span className="text-[#9bc9d4] text-start text-xs font-extrabold  mx-6">
          -Steve Jobs
        </span>

        <div className="flex  flex-col mx-3 mt-20">
          <h3 className="border-b border-black font-extrabold text-[#9bc9d4]">
            Old Mutual ,South Africa{" "}
          </h3>
          <p className="text-xs mt-2 text-[#1a8795] font-bold">
            Graduate Hackathon (August 2024){" "}
          </p>
        </div>
        <div className=" mx-3 mt-10 tracking-wide font-semibold text-[#1a8795] ">
          <ul className="list-disc mx-5">
            <li className=" text-[13px]">
              Engineered a travel insurance solution leveraging data warehouses
              to identify travel booking triggers and deliver real-time ,
              personalized insurance recommendations.
            </li>
            <li className="mt-2 text-[13px]">
              Designed and implemented a robust system to analyze booking
              triggers, aligning customer needs with tailored travel insurance
              products
            </li>
            <li className="mt-2 text-[13px]">
              Developed a high-performance data pipeline that reduced booking
              processing time by 40%, delivering personalized travel insurance
              recommendations in real-time and enhancing customer satisfaction.
            </li>
          </ul>
        </div>
        <div className=" flex flex-wrap mt-10 mx-5 gap-1 mb-5">
          <span className="px-3 py-1 bg-[#9bc9d4]    text-cyan-100 rounded-md text-xs font-bold">
            React
          </span>
          <span className="px-3 py-1 bg-[#9bc9d4]  text-cyan-100 rounded-md text-xs font-bold">
            TypeScript
          </span>
          <span className="px-3 py-1 bg-[#9bc9d4]  text-cyan-100 rounded-md text-xs font-bold">
            Node.js
          </span>
          <span className="px-3 py-1 bg-[#9bc9d4]  text-cyan-100 rounded-md text-xs font-bold">
            Amazon Web services
          </span>
          <span className="px-3 py-1 bg-[#9bc9d4]  text-cyan-100 rounded-md text-xs font-bold">
            Google Ads
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChapterOne;
