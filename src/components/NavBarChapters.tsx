import { Link } from "react-router-dom";
import { menuItems } from "../constants";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NavBarChapters = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <div className="bg-[#4daaa9] sticky z-50 top-0 h-full">
      <nav className="sticky top-0 backdrop-blur-sm z-50 py-4 mr-3">
        <div className="container py-3 mx-auto relative text-sm">
          <div className="flex justify-end items-center mx-5 sm:mr-5 md:mr-5 lg:mr-1">
            <div className="md:flex flex-col justify-end relative">
              <button
                onClick={toggleNavbar}
                className="text-[#d5f2f9] text-lg"
              >
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {mobileDrawerOpen && (
            <div className=" top-full motion-preset-slide-right-lg motion-duration-2000 sm:text-center  h-[360px] justify-end sm:h-[700px] sm:w-[600px]  md:h-[730px] md:w-[600px] lg:h-[720px] lg:w-[720px]  mx-2 left-0 w-64 mt-2 bg-[#4daaa9]  rounded-lg shadow-lg overflow-hidden ">
              <h2 className="px-4 motion-preset-shake py-3 text-lg text-[#d8edf3] border-b border-[#d8edf3]/20 text-center font-extrabold">
                Hello My Friend, choose a chapter you would like to read today!
              </h2>
              <ul className="py-2">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.link}
                      className="block mb-1 px-4 py-1 text-white hover:bg-[#24e3d0] transition-colors duration-200 font-extrabold"
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