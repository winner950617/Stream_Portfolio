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
        Employment history
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
            Senior Video Streaming Software Engineer
          </h3>
          {/* <time className=" text-base lg:text-lg font-semibold lg:font-normal leading-none text-gray-300">
            Scalevista– San Francisco, CA | March 2023 – March 2024
          </time>
          <span className=" text-base leading-none text-gray-300">
            (Undergraduate)
          </span> */}
          {/* <p className="mb-2 text-base font-normal text-gray-400">
            •	Led development of real-time video streaming solutions, enhancing multimedia application performance.
            •	Integrated WebRTC and GStreamer for low-latency streaming in healthcare and media sectors.
            •	Designed and implemented a data visualization desktop application, improving user experience by 40%.
          </p> */}
          <ul className="mb-4 text-base font-normal text-gray-400">
            Scalevista– San Francisco, CA | March 2023 – March 2024
            <br />
            <ul className=" list-disc">
              <li>
                Led development of real-time video streaming solutions, enhancing multimedia application performance.
              </li>
              <li>
                Integrated WebRTC and GStreamer for low-latency streaming in healthcare and media sectors.

              </li>
              <li>
                Designed and implemented a data visualization desktop application, improving user experience by 40%.
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
            Multimedia Software Engineer
          </h3>

          <ul className="mb-4 text-base font-normal text-gray-400">
            OnGraph Technologies – New York, NY  | June 2019 – February 2023
            <br />
            <ul className=" list-disc">
              <li>
                Spearheaded multimedia processing project using FFmpeg and OpenCV, reducing video processing time by 30%.
              </li>
              <li>
                Developed robust desktop applications in C# and C++, improving stability and responsiveness.
              </li>
              <li>
                Led integration of real-time video streaming using RTSP and HLS for media platforms.
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
            Junior Multimedia Developer
          </h3>

          <ul className="mb-4 text-base font-normal text-gray-400">
            MindSea – Halifax, Canada | July 2017 – May 2019
            <br />
            <ul className=" list-disc">
              <li>Assisted in developing desktop applications using C++, Python, and .NET technologies, enhancing workflow automation.
              </li>
              <li>Contributed to implementation of video streaming solutions, supporting WebRTC-based applications.</li>
              <li>Optimized desktop application performance, reducing load times by 20%.</li>
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
