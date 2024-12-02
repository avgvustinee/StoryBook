import NavBarChapters from "../components/NavBarChapters";

const ChapterOne = () => {
  return (
    <div>
      <NavBarChapters />

      <div className="  flex  flex-wrap mx-3 h-full sm:mx-[50px] lg:mx-[500px] mt-10 bg-[#214c74] md:h-[600px] lg:w-[620px] lg:h-[600px]  border-b border-cyan-400 rounded-md">
        <h3 className=" motion-preset-pop text-3xl text-center justify-center text-clip tracking-wider font-extrabold text-[#ddecfa] border border-[#9bc9d4] rounded-md mx-2 mt-2 ">
          Behind Story Chapter: The Heart of the Journey
        </h3>

        <p className=" text-start text-xs mt-2 mx-3 text-[#ddecfa]  font-bold">
          “The only limit to your impact is your imagination and commitment.”{" "}
        </p>
        <span className="text-[#3fc7e2] text-start text-xs font-extrabold  mx-6">
          -Tony Robbins
        </span>
        <div className="  mt-5 tracking-wide font-semibold text-white ">
          <ul className="list-inside mx-3">
            <li className=" text-[12px]">
              I am Augustine, a passionate and curious problem-solver with a
              deep interest in technology and innovation.
              <br />
              My journey began with a fascination for how things work, leading
              me to explore the world of coding, artificial intelligence, and
              digital solutions.
            </li>
          </ul>
        </div>
        <div className="flex flex-col mx-3 mt-5">
          <h3 className="border-b border-[#ddecfa] font-extrabold text-[#b1d9e7]">
            Core Values & Passions
          </h3>
        </div>
        <div className="  mt-5 tracking-wide font-semibold text-white ">
          <ul className="list-inside mx-3">
            <li className=" text-[12px]">
              I believe in the power of technology to transform lives,
              especially in underrepresented communities.
              <br />
              I’m driven by a desire to bridge the gap between technology and
              inclusively, using my skills to make a difference.
            </li>
          </ul>
        </div>
        <div className="flex flex-col mx-3 mt-5">
          <h3 className="border-b border-[#ddecfa] font-extrabold text-[#b1d9e7]">
            Hobbies & Interests
          </h3>
        </div>
        <div className="  mt-5 tracking-wide font-semibold text-white ">
          <ul className="list-inside mx-3">
            <li className=" text-[12px]">
              When I am not coding or researching AI, you can find me on the
              football field or participating in university campaigns, where I
              enjoy fostering teamwork and leadership
            </li>
          </ul>
        </div>
        <div className="flex flex-col mx-3 mt-5">
          <h3 className="border-b border-[#ddecfa] font-extrabold text-[#b1d9e7]">
            Future Aspirations
          </h3>
        </div>
        <div className="  mt-5 tracking-wide font-semibold text-white ">
          <ul className="list-inside mx-3">
            <li className=" text-[12px]">
              Looking ahead, I am excited to continue exploring the
              intersections of AI and language, creating innovative solutions
              that promote inclusively and digital equity.
            </li>
          </ul>
        </div>
        <div className="flex flex-col mx-3 mt-5">
          <h3 className="border-b border-[#ddecfa] font-extrabold text-[#b1d9e7]">
            Personal Motto
          </h3>
        </div>
        <div className=" mb-3  mt-5 tracking-wide font-semibold text-white ">
          <ul className="list-inside mx-3">
            <li className=" text-[12px]">
              A fun fact about me? I never back down from a challenge. <br />
              My motto: 'Learning never exhausts the mind.' – Leonardo da Vinci
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChapterOne;
