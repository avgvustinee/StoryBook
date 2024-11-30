import NavBarChapters from "../components/NavBarChapters";
import { education } from "../constants";

const ChapterTwo = () => {
  return (
    <div >
      <NavBarChapters />
      <div className="flex flex-col flex-wrap mx-3  mt-10 bg-slate-200 sm:mx-[20px]  md:-mx[60px] lg:mx-[90px] h-[2550px] sm:h-full md:h-[800px] lg:w-[820px] lg:h-[950px]  border-b border-cyan-400 rounded-md">
        <h1 className="text-3xl text-center justify-center text-clip tracking-wider font-extrabold text-[#9bc9d4] border border-[#9bc9d4] rounded-md mx-2 mt-2">
          Education Chapter: Building a Foundation
        </h1>
        <div className="text-xs text-start  mt-3 mx-3 text-[#1a8795]  font-bold">
          <p> "Education is not the learning of facts, but the training of the mind to think."</p>
          <span className="text-[#9bc9d4] text-start text-xs font-extrabold  mx-6">
          -Albert Einstein
        </span>
        </div>

        <div className='flex flex-wrap mt-[100px] h-[100px]'>
            {education.map((chapter,index) =>(
                <div key={index} className='w-1/2 sm:w-1/2 lg:w-1/2 px-4 py-2 '>
                    <div className='bg-[#96abb0]  rounded-md p-6  border border-neutral-100 ' >
                        <p className='text-[#b1d9e7] font-extrabold text-md'>{chapter.title}</p>
                        <h6 className="text-xs mt-2 text-[#9bc9d4] font-bold">{chapter.subtitle}</h6>
                        <div className='mt-6'>
                            <h6 className='text-[10px] text-center text-white font-bold'>{chapter.description}</h6>
                        </div>
                        <div className="flex flex-wrap justify-between">
                        <h6 className="text-[10px] font-bold text-start mt-2 mx-1 text-[#9bc9d4]">{chapter.date}</h6>
                        <h5 className="text-[10px] font-bold text-start mt-2 mx-1 text-[#9bc9d4]">{chapter.status}</h5>

                        </div>
                        
                        
                        
                        
                    </div>

                </div>

            ))}

        </div>
      </div>
    </div>
  );
};

export default ChapterTwo;
