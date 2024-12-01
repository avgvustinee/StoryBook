import Chapters from "../components/Chapters"
import HeroSection from "../components/HeroSection"
import NavBar from "../components/NavBar"


const StoryBook = () => {
  return (
    <>
    <NavBar/>
    <div className="bg-[#4daaa9] min-h-screen">
        
        <HeroSection/>
        <Chapters/>
        
      
    </div>
    </>
  )
}

export default StoryBook
