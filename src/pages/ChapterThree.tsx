import NavBarChapters from "../components/NavBarChapters";

const ChapterThree = () => {
  return (
    <div>
      <NavBarChapters />
      <div className="flex  flex-wrap mx-3 h-full sm:mx-[50px] lg:mx-[500px] mt-10 bg-[#214c74] md:h-[600px] lg:w-[620px] lg:h-[600px]  border-b border-cyan-400 rounded-md overflow-hidden">
        <h3 className="motion-preset-pop text-3xl text-center justify-center text-clip tracking-wider font-extrabold text-[#ddecfa] border border-[#9bc9d4] rounded-md mx-2 mt-2">
          Experience Chapter: Turning Knowledge into Action
        </h3>
        <p className="text-start text-xs mt-3 mx-3 text-[#ddecfa]  font-bold">
          "The most Powerful Person in the World is the Storyteller"{" "}
        </p>
        <span className="text-[#3fc7e2] text-start text-xs font-extrabold  mx-6">
          -Steve Jobs
        </span>

        <div className="flex  flex-col mx-3 mt-20">
          <h3 className="border-b border-[#ddecfa] font-extrabold text-white">
            Old Mutual ,South Africa{" "}
          </h3>
          <p className="text-xs mt-2 text-white font-bold">
            Graduate Hackathon (August 2024){" "}
          </p>
        </div>
        <div className=" mx-3 mt-10 tracking-wide font-semibold text-white ">
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
          <span className="px-3 py-1 bg-[#4daaa9]    text-white rounded-md text-xs font-bold">
            React
          </span>
          <span className="px-3 py-1 bg-[#4daaa9]  text-white rounded-md text-xs font-bold">
            TypeScript
          </span>
          <span className="px-3 py-1 bg-[#4daaa9]  text-white rounded-md text-xs font-bold">
            Node.js
          </span>
          <span className="px-3 py-1 bg-[#4daaa9]  text-white rounded-md text-xs font-bold">
            Amazon Web services
          </span>
          <span className="px-3 py-1 bg-[#4daaa9]  text-white rounded-md text-xs font-bold">
            Google Ads
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChapterThree;
