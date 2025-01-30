import React from "react";
import { motion } from "motion/react";

function Education() {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="text-white flex flex-col items-center justify-center p-5 ps-7 sm:ps-10 md:p-40 pt-40 pb-20 "
      id="education"
    >
      <motion.h2
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-center text-4xl font-semibold text-white md:text-6xl mb-20"
      >
        Eduaction
      </motion.h2>

      <motion.ol
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="relative border-s border-gray-200 dark:border-gray-700"
      >
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="flex items-center mb-2 ml-2 text-lg font-semibold text-gray-200 dark:text-white">
            University of Herat
          </h3>
          <time className=" mb-2 text-base lg:text-lg font-normal leading-none text-gray-300 dark:text-gray-400">
            Bachelor of Computer Scince(Software Engineering) Degree 
          </time>
          <span className="font-semibold mb-2 text-base leading-none text-gray-300 dark:text-gray-400">
             (Undergraduate)
          </span>
          <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
            I am currently pursuing my bachelor&apos;s degree in Software
            Engineering at the University of Herat, specializing in Front-End
            Web Development. My studies focus on modern web technologies, user
            experience design, and responsive web development, preparing me to
            excel in the tech industry.
          </p>
        </li>

        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="flex items-center mb-2 ml-2 text-lg font-semibold text-gray-200 dark:text-white">
            Frontend In WASSA 
          </h3>

          <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            WASSA organization of Herat | 6-month Program
            <br />
            <ul className=" list-disc">
              <li>
                Specialized in front-end development, gaining practical
                experience with web technologies such as HTML, CSS, JavaScript,
                and modern front-end frameworks.
              </li>
              <li>
                Strengthened problem-solving techniques in frontend,
                applying these skills to build scalable and interactive web
                solutions.
              </li>
            </ul>
          </ul>
        </li>

        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="flex items-center mb-2 ml-2 text-lg font-semibold text-gray-200 dark:text-white">
            Online Courses
          </h3>

          <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            I have completed
            several online courses to enhance my skills in front-end
            development, including:
            <br />
            <ul className=" list-disc">
              <li>Responsive Web Design (FreeCodeCamp)</li>
              <li>Complete JavaScript(Udemy)</li>
              <li>Ultimate React Course(Udemy)</li>
            </ul>
            These courses equipped me with practical knowledge and the
            confidence to build modern and responsive web applications.
          </ul>
        </li>
      </motion.ol>
    </div>
  );
}

export default Education;
