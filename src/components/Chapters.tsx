import { Link } from 'react-router-dom'
import { chapterPreview } from '../constants'

const Chapters = () => {
  return (
    <div className='mt-20 text-center tracking-wide' >
        <h3 className='text-lg sm:text-lg md:text-2xl lg:text-3xl  text-[#d1ddf6] font-extrabold'>Chapter Preview</h3>
        <div className='flex flex-wrap  justify-center mt-14 h-full w-full lg:mx-10 '>
            {chapterPreview.map((chapter,index) =>(
                <div key={index} className=' sm:w-1/2 lg:w-1/2 px-5 py-2 mx-2 mb-5'>
                    <div className='bg-[#9bc9d4]   rounded-md p-6  border border-neutral-100 ' >
                        <p className='text-[#b1d9e7] font-extrabold text-md'>{chapter.title}</p>
                        <div className='mt-6'>
                            <h6 className='text-[10px] text-center text-white '>{chapter.description}</h6>
                        </div>
                        <div className='flex flex-wrap justify-center mt-5'>
                            <Link className='px-3 py-1 text-[#d0e7ef] border rounded-md text-[10px] hover:bg-[#6093a0] ' to={chapter.link}>{chapter.label}</Link>
                        </div>
                        
                    </div>

                </div>

            ))}

        </div>
    </div>
  )
}

export default Chapters
