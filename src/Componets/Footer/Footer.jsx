import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { FaFileAlt } from 'react-icons/fa'

//Footer
function Footer() {
  return (
    <footer className='bg-black/60 p-5 rounded-sm'>
      <h1 className='text-center mb-4 text-2xl text-white'>Mohammad Owais Azizi</h1>
      <div className="flex gap-10 items-center justify-center">
        <a href="https://github.com/MOwaisAzizi" target='_blank'><BsGithub className='text-3xl cursor-pointer text-gray-300  hover:text-blue-500' /></a>
        <a href="https://www.linkedin.com/in/m-owais-azizi-7440532b4" target='_blank'><BsLinkedin className='text-3xl cursor-pointer text-gray-300  hover:text-blue-600' /></a>
        <a href="https://flowcv.com/resume/ao3k3188fp" target='_blank'><FaFileAlt className='text-3xl cursor-pointer text-gray-300 hover:text-blue-500' /></a>
      </div>

      <div className="flex gap-6 items-center justify-center mt-5">
        <a href="#home"><p className='text-white hover:text-blue-500 '>Home</p></a>
        <a href="#tech"><p className='text-white  hover:text-blue-500 '>Skill</p></a>
        <a href="#project"><p className='text-white  hover:text-blue-500 '>Project</p></a>
        <a href="#contact"><p className='text-white  hover:text-blue-500 '>Contact</p></a>
      </div>

    </footer>
  )
}

export default Footer