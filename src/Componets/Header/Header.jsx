import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFileAlt } from "react-icons/fa";

function Header() {
  const [isOpen, setIsopen] = useState(false);

  const menuOpen = () => {
    setIsopen(!isOpen);
  };

  return (
    <nav
      className="fixed top-0 z-10 flex w-full items-center 
    justify-between bg-black/70 lg:px-5 md:px-0 sm:px-10 px-5 py-6 text-white
    backdrop-blur-md md:justify-evenly"
    >
      <a
        href="#home"
        className="bg-gradient-to-r from-blue-500 to-pink-500 
        bg-clip-text text-transparent opacity-80 text-3xl font-semibold 
        transition-all duration-300 hover:opacity-100 
        "
      >
        Azizi
      </a>

      <ul className="hidden md:flex gap-10">
        <a
          href="#home"
          className="cursor-pointer opacity-75 transition-all duration-300 hover:opacity-100"
        >
          {" "}
          <li>Home</li>{" "}
        </a>
        <a
          href="#tech"
          className="cursor-pointer opacity-75 transition-all duration-300 hover:opacity-100"
        >
          {" "}
          <li>Skill</li>{" "}
        </a>
        <a
          href="#project"
          className="cursor-pointer opacity-75 transition-all duration-300 hover:opacity-100"
        >
          {" "}
          <li>Project</li>{" "}
        </a>
        <a
          href="#education"
          className="cursor-pointer opacity-75 transition-all duration-300 hover:opacity-100"
        >
          {" "}
          <li>Education</li>{" "}
        </a>
        <a
          href="#contact"
          className="cursor-pointer opacity-75 transition-all duration-300 hover:opacity-100"
        >
          {" "}
          <li>Contact</li>{" "}
        </a>
      </ul>

      <ul className="hidden md:flex gap-10">
        <a
          href="https://www.linkedin.com/in/m-o-azizi"
          target="_blank"
        >
          {" "}
          <li className="cursor-pointer text-xl opacity-80 transition-all duration-300 hover:text-sky-600 hover:opacity-100">
            {" "}
            <BsLinkedin />{" "}
          </li>
        </a>
        <a href="https://github.com/MOwaisAzizi" target="_blank">
          <li className="cursor-pointer text-xl opacity-80 transition-all duration-300 hover:text-dark-500 hover:text-sky-500 hover:opacity-100">
            {" "}
            <BsGithub />{" "}
          </li>
        </a>
        <a href="https://flowcv.com/resume/ao3k3188fp" target="_blank">
          {" "}
          <li className="cursor-pointer text-xl opacity-80 transition-all duration-300 hover:text-sky-500 hover:opacity-100">
            {" "}
            <FaFileAlt />{" "}
          </li>
        </a>
      </ul>

      {/* To handel menu icon active or not in page*/}
      {isOpen ? (
        <BiX
          onClick={menuOpen}
          className="block md:hidden text-4xl cursor-pointer"
        />
      ) : (
        <BiMenu
          onClick={menuOpen}
          className="block md:hidden text-4xl cursor-pointer"
        />
      )}

      {/* to handel side navigation Bar */}
      {isOpen && (
        <div
          className={`fixed md:hidden right-0 top-[84px] flex h-screen w-1/2 
                    flex-col items-start justify-start gap-10 border-l
                     border-gray-800 bg-black/90 p-10 ${
                       isOpen ? "block" : "hidden"
                     }`}
        >
          <ul className="flex flex-col gap-7">
            <a
              href="#home"
              className="cursor-pointer opacity-75 transition-all duration-300 hover:opacity-100"
            >
              {" "}
              <li>Home</li>{" "}
            </a>
            <a
              href="#tech"
              className="cursor-pointer opacity-75 transition-all duration-300 hover:opacity-100"
            >
              {" "}
              <li>Skill</li>{" "}
            </a>
            <a
              href="#project"
              className="cursor-pointer opacity-75 transition-all duration-300 hover:opacity-100"
            >
              {" "}
              <li>Project</li>{" "}
            </a>
            <a
              href="#education"
              className="cursor-pointer opacity-75 transition-all duration-300 hover:opacity-100"
            >
              {" "}
              <li>Education</li>{" "}
            </a>
            <a
              href="#contact"
              className="cursor-pointer opacity-75 transition-all duration-300 hover:opacity-100"
            >
              {" "}
              <li>Contact</li>{" "}
            </a>
          </ul>

          <ul className="flex flex-wrap gap-7">
            <a
              href="https://www.linkedin.com/in/m-o-azizi"
              target="_blank"
            >
              {" "}
              <li className="cursor-pointer text-xl opacity-80 transition-all duration-300 hover:text-sky-600 hover:opacity-100">
                {" "}
                <BsLinkedin />{" "}
              </li>
            </a>
            <a href="https://github.com/MOwaisAzizi" target="_blank">
              <li className="cursor-pointer text-xl opacity-80 transition-all duration-300 hover:text-sky-500 hover:opacity-100">
                {" "}
                <BsGithub />{" "}
              </li>
            </a>
            <a href="https://flowcv.com/resume/ao3k3188fp" target="_blank">
              {" "}
              <li className="cursor-pointer text-xl opacity-80 transition-all duration-300 hover:text-sky-500 hover:opacity-100">
                {" "}
                <FaFileAlt />{" "}
              </li>
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Header;
