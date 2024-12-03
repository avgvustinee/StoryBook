import NavBarChapters from "../components/NavBarChapters";
import C from "../assets/C.jpeg";
import CSharp from "../assets/CSharp.png";
import Java from "../assets/Java.jpeg";
import Web from "../assets/web.png";
import Python from "../assets/python.jpg";
import badge from "../assets/badge.png";

const ChapterFive = () => {
  return (
    <div>
      <NavBarChapters />
      <div className="flex  flex-wrap mx-3 h-full sm:mx-[50px] lg:mx-[500px] mt-20 bg-[#214c74] md:h-[600px] lg:w-[620px] lg:h-[600px]  border-b border-cyan-400 rounded-md overflow-hidden">
        <h3 className="motion-preset-pop text-3xl text-center justify-center text-clip tracking-wider font-extrabold text-[#ddecfa] border border-[#9bc9d4] rounded-md mx-2 mt-2">
          Coding Journey Chapter: From Curiosity to Mastery
        </h3>
        <p className="text-start text-xs mt-3 mx-3 text-[#ddecfa]  font-bold ">
          "Every line of code is a step toward turning ideas into reality."
        </p>
        <span className="text-[#3fc7e2] text-start text-xs font-extrabold  mx-6">
          -Kholofelo Augustine Shokane
        </span>

        <div className=" relative flex flex-wrap mt-10 motion-preset-slide-right-md motion-delay-500 ">
          <img
            className="items-center w-72 mx-10  "
            src={C}
          />
          <img className="w-7 absolute top-0 right-8" src={badge} />
          <p className="mt-2 text-center mx-10 text-[#ddecfa] ">
            I've completed the first coding module!{" "}
          </p>
          <p className="text-white mx-4 mt-10 text-center font-roboto">
            I started learning coding at the University of Limpopo, where I was
            first introduced to C++. During classes, I worked on both the
            theoretical concepts and the practical parts of the tutorials. This
            combination helped me build a strong foundation in programming and
            develop problem-solving skills through hands-on experience.
            <br />
            One of the most interesting projects I built with C++ was a
            simulation of a banking system. The system allowed users to create
            accounts, check their balances, make deposits and withdrawals, and
            view their transaction history. I designed it using an
            object-oriented approach, creating separate classes for customer
            accounts and transactions.
          </p>
        </div>
        <div className=" relative flex flex-wrap mt-10 motion-preset-slide-left-md motion-delay-700  ">
          <img
            className="items-center w-72 mx-10 "
            src={CSharp}
          />
          <img className="w-7 absolute top-0  right-16" src={badge} />
          <p className="mt-2 text-center mx-10 text-[#ddecfa] ">
            I've completed the first coding module!{" "}
          </p>
          <p className="text-white mx-4 mt-10 text-center font-roboto">
            After learning C++, I was introduced to C# as the second programming
            language during my time at the University of Limpopo. C# provided me
            with a new perspective on programming, especially with its focus on
            simplicity and ease of building applications within the .NET
            ecosystem.
            <br />I explored concepts like object-oriented programming, GUI
            development, and database connectivity, which further deepened my
            understanding of software development. This experience helped me
            appreciate how different languages can be used for various types of
            applications and broadened my skills in writing clean, efficient,
            and maintainable code.
          </p>
        </div>
        <div className=" relative flex flex-wrap mt-10 motion-preset-slide-right-md motion-delay-1000  ">
          <img
            className="items-center w-72 mx-10 "
            src={Java}
          />
          <img className="w-7 absolute top-0 right-8" src={badge} />
          <p className="mt-2 text-center mx-10 text-[#ddecfa] ">
            I've completed the first coding module!{" "}
          </p>
          <p className="text-white mx-4 mt-10 text-center font-roboto">
            In my second year, first semester, I was introduced to Java. This
            marked a significant step in my programming journey, as I learned
            about Java's platform independence and extensive libraries. I worked
            on various assignments and projects that reinforced object-oriented
            programming concepts such as inheritance, polymorphism, and
            abstraction. Java's robust features allowed me to develop more
            complex applications, and I gained experience in handling
            exceptions, managing files, and implementing multithreading
            <br />
            <br />I worked on a Student Management System as part of my Java
            learning. This project involved creating a system to manage student
            records, including adding, updating, and viewing details such as
            grades and attendance. I used object-oriented principles to design
            the system, creating classes for students and operations like adding
            new records, updating existing information, and displaying student
            data.
          </p>
        </div>
        <div className=" relative flex flex-wrap mt-10 motion-preset-slide-right-md motion-delay-1500  ">
          <img
            className="items-center w-72 mx-10 "
            src={Web}
          />
          <img className="w-7 absolute top-0 right-8" src={badge} />
          <p className="mt-2 text-center mx-10 text-[#ddecfa] ">
            I've completed the first coding module!{" "}
          </p>
          <p className="text-white mx-4 mt-10 text-center font-roboto">
            In my second year, second semester, I shifted focus to web
            development, where I learned HTML, CSS, and JavaScript. This
            transition allowed me to explore building websites and web
            applications, starting with the basics of structuring content with
            HTML, styling pages with CSS, and adding interactivity with
            JavaScript. Through this learning, I developed a strong foundation
            in front-end web development and gained hands-on experience in
            designing user interfaces, improving user experience, and making
            websites responsive.
            <br />
            <br />
            JavaScript further enhanced my ability to create dynamic content,
            such as interactive forms and real-time updates without refreshing
            the page. This phase marked a significant expansion of my skills and
            set the stage for future projects in web development.
          </p>
        </div>
        <div className=" relative flex flex-wrap mt-10 ">
          <img
            className="items-center h-64 w-72 mx-10 motion-preset-slide-right-md motion-delay-2000 "
            src={Python}
          />
          <img className="w-7 absolute top-0 right-8" src={badge} />
          <p className="mt-2 text-center mx-10 text-[#ddecfa] ">
            I've completed the first coding module!{" "}
          </p>
          <p className="text-white mx-4 mb-6 mt-10 text-center font-roboto">
            In my final year at university, I learned Python and had the
            opportunity to build a backend using Django ( Web Application Framework ) for a student emergency
            system. The system was designed to help students in health-related
            emergencies by allowing them to request an ambulance when needed.
            <br />
            I used Django’s robust framework to handle backend operations,
            including managing user requests, sending notifications, and
            integrating location services to ensure ambulances were dispatched
            promptly.
            <br />
            <br />
            This project involved working with databases to store user and
            emergency request data, as well as handling HTTP requests and
            responses using Django's views and models. It was a valuable
            experience that enhanced my skills in Python, backend development,
            and real-world application design, especially in health-related
            scenarios where timely responses are critical.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChapterFive;
