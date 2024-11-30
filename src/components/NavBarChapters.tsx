import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { menuItems } from "../constants";

const NavBarChapters = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <div className="bg-[#9bc9d4] sticky top-0 w-full">
      <nav className="sticky top-0 backdrop-blur-sm z-50 py-4 mr-3 ">
        <div className="container py-3 mx-auto relative text-sm">
          <div className="flex justify-end items-center mx-5 sm:mr-5 md:mr-5 lg:mr-1">
            <div className="md:flex flex-col justify-start relative">
              <button
                onClick={toggleNavbar}
                className="text-[#d5f2f9] text-lg"
              >
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {mobileDrawerOpen && (
            <div className=" top-full ml-20 mr-[300px] sm:text-center   h-[700px] justify-center sm:h-[700px] sm:w-[500px]  md:h-[700px] md:w-[500px] lg:h-[700px] lg:w-[720px]  items-center left-0  mt-2 bg-[#4daaa9] rounded-lg shadow-lg overflow-hidden">
              <h2 className="px-4 py-3 text-lg text-[#d8edf3] border-b border-[#d8edf3]/20 text-center font-extrabold">
                Hello My Friend, choose a chapter you would like to read today!
              </h2>
              <ul className="py-2 items-center">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.link}
                      className="block px-4 py-2 text-white text-center hover:bg-[#24e3d0] transition-colors duration-200 font-extrabold"
                      onClick={() => setMobileDrawerOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBarChapters;