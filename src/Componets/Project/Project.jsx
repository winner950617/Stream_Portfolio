import React from 'react'
import { motion } from 'motion/react'
import ProjectCard from '../ProjectCard/ProjectCard'
import projectArray from '../../Data/project'

function Project() {

    const variants={
        hidden:{opacity:0,y:50},
        visible:{opacity:1,y:0},
    }

    return (
        <section className='flex min-h-screen w-full flex-wrap items-center justify-center scroll-mt-40 md:pb-10 ' id='project'>

                <motion.h1 className='text-4xl font-semibold text-white md:text-6xl mb-10'
                variants={variants}
                initial="hidden"
                whileInView="visible"
                transition={{duration:0.5}}
                >Projects</motion.h1>
            
            <div  
            className="flex justify-center flex-wrap w-full max-[1000px] gap-5  text-white">
                {
                    projectArray.map((project, i) => {
                        return <ProjectCard key={i} project={project} />
                    })
                }
            </div>
        </section>
    )
}


  
  export default Project;