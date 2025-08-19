import { Link } from "react-router-dom";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from "react";

export default function Header() {
   const [isOpen, setIsOpen] = useState(false)
   const handleToggle = () => {
     setIsOpen(!isOpen)
   }


  

  return (
    <header className="fixed top-0 py-4 md:py-6 px-4 sm:px-6 left-0 right-0 
    z-10 bg-white ">
      <div className="container  mx-auto flex justify-between items-center h-full">
        {/* logo*/}
        <div className="w-24 md:w-auto">
          <a href="/">
            <img src="/Frame 168.svg" className="w-full" alt="logo"/>
          </a>
        </div>

        {/*Nav Items*/}

        <div className="hidden md:flex flex-grow justify-center ">
          <nav>
            <ul className="font-medium flex flex-col md:flex-row lg:space-x-16 
            sm:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0 color text-[#000000] ">
              <li>
                <Link to="/" className= "text-[#000000] hover:text-gray-600 transition">Home</Link>
              </li>
              <li>
                <Link to="/shop" className="text-[#000000] hover:text-gray-600 transition" >Shop</Link>
              </li>
              <li>
                <Link to="/About" className="text-[#000000] hover:text-gray-600 transition">About</Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#000000] hover:text-gray-600 transition">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>

        {/*Icons*/}
        <div className=" flex items-center space-x-4 sm:space-x-6 ">
          <a href="#" className="text-lg text-[#000000] hover:text-gray-600 transition">
       <MdOutlineSupervisorAccount />
       </a>

       <a href="#" className="text-lg text-[#000000]  hover:text-gray-600 transition">
       <FiSearch />
       </a>

       <a href="#" className="text-lg text-[#000000] hover:text-gray-600 transition">
       <IoIosHeartEmpty />
       </a>

       <a href="#" className="text-lg text-[#000000] hover:text-gray-600 transition">
       <AiOutlineShoppingCart />
       </a>
        </div>
            
            {/*Hamburger Menu*/}
            <div className="block md:hidden text-xl">
              <button
              onClick={handleToggle} 
              className= {` text-black focus:outline-none ${isOpen ? "border border-white" : ""}`}>
                <HiOutlineMenuAlt3  className="size-5"/>
              </button>
            </div>

      </div>

      {/*mobile nav items*/}

       {isOpen && (
        <div className="md:hidden bg-white w-full pb-4">
          <nav>
            <ul className="flex flex-col space-y-3 px-4 pt-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-gray-600 transition block py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="hover:text-gray-600 transition block py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/About"
                  className="hover:text-gray-600 transition block py-2"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-gray-600 transition block py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
