import NavBarChapters from "../components/NavBarChapters";
import { education } from "../constants";

const ChapterTwo = () => {
  return (
    <div >
      <NavBarChapters />
      <div className="flex flex-col flex-wrap mx-3  mt-10 bg-[#214c74] sm:mx-[20px]  md:-mx[60px] lg:mx-[90px] h-[2770px] sm:h-full md:h-[800px] lg:w-[820px] lg:h-[950px]  border-b border-cyan-400 rounded-md">
        <h1 className="text-3xl text-center justify-center text-clip tracking-wider font-extrabold text-[#ddecfa] border border-[#9bc9d4] rounded-md mx-2 mt-2">
          Education Chapter: Building a Foundation
        </h1>
        <div className="text-xs text-start  mt-3 mx-3 text-[#ddecfa]  font-bold">
          <p> "Education is not the learning of facts, but the training of the mind to think."</p>
          <span className="text-[#3fc7e2] text-start text-xs font-extrabold  mx-6">
          -Albert Einstein
        </span>
        </div>

        <div className='flex flex-wrap mt-[40px] h-[100px]'>
            {education.map((chapter,index) =>(
                <div key={index} className='sm:w-1/2 lg:w-1/2 px-4 py-2 '>
                    <div className=' rounded-md p-6  border border-neutral-100 ' >
                        <p className='text-[#b1d9e7] font-extrabold text-md'>{chapter.title}</p>
                        <h6 className="text-xs mt-2 text-[#4dacc4] font-bold">{chapter.subtitle}</h6>
                        <div className='mt-6'>
                            <h6 className='text-[12px] text-center text-white font-bold'>{chapter.description}</h6>
                        </div>
                        <div className="flex flex-wrap justify-between">
                        <h6 className="text-[10px] font-bold text-start mt-2 mx-1 text-[#7ad9f8]">{chapter.date}</h6>
                        <h5 className="text-[10px] font-bold text-start mt-2 mx-1 text-[#7ad9f8]">{chapter.status}</h5>

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
