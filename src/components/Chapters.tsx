import { Link } from 'react-router-dom'
import { chapterPreview } from '../constants'

const Chapters = () => {
  return (
    <div className='mt-20 text-center  tracking-wide' >
        <h3 className='text-lg sm:text-lg md:text-2xl lg:text-3xl lg:items-center  text-[#d1ddf6] font-extrabold'>Chapter Preview</h3>
        <div className='flex flex-wrap justify-center mt-14 h-full w-full  '>
            {chapterPreview.map((chapter,index) =>(
                <div key={index} className='w-full sm:w-1/2 lg:w-1/4 px-5 py-2 lg:py-1 lg:mr-10 mx-2 mb-5 motion-translate-x-in-150 '>
                    <div className='"bg-[#4daaa9] rounded-md p-6  border border-neutral-100 lg:h-[250px] lg:w-[350px] lg:rounded-lg lg:p-5 ' >
                        <p className='text-[#b1d9e7] font-extrabold text-md'>{chapter.title}</p>
                        <div className='mt-6'>
                            <h6 className='text-[10px] text-center font-bold  text-white '>{chapter.description}</h6>
                        </div>
                        <div className='flex flex-wrap justify-center mt-5'>
                            <Link className='px-3 py-1 text-[#d0e7ef] border font-bold rounded-md text-[10px] hover:bg-[#6093a0] lg:mb-2 ' to={chapter.link}>{chapter.label}</Link>
                        </div>
                        
                    </div>

                </div>

            ))}

        </div>
    </div>
  )
}

export default Chapters
