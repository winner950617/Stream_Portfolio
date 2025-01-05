import React from 'react'
import Header from './Componets/Header/Header'
import About from './Componets/About/About'
import TechStack from './Componets/TechStack/TechStack'
import Project from './Componets/Project/Project'
import Contact from './Componets/Contact/Contact'
import Footer from './Componets/Footer/Footer'
import Education from './Componets/Education/Education'

//app section
export default function App() {
  return (
    <>
      <div className="fixed inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <main className='flex flex-col items-center px-2 md:px-4 lg:px-16'>
        
        <Header />

        <About />
        

        <TechStack />

        <Project />
        
        <Education />

        <Contact />
    
      </main>
      
      <Footer />

    </>
  )
}

