import React from 'react'
import abt from '../assets/about_img.webp'


const About = (props) => {
  return (
    <>
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 p-8 m-8 border rounded-lg shadow-sm transition-colors duration-300 ${
      props.mode === 'dark' 
        ? 'border-amber-700 bg-gray-800' 
        : 'border-amber-300 bg-white/70'
    }`}>
        <div className="space-y-4">
            <h1 className={`text-3xl font-bold pb-2 border-b-2 border-amber-500 inline-block ${
              props.mode === 'dark' ? 'text-amber-400' : 'text-amber-800'
            }`}>About Me</h1>
            <p className={`font-medium text-2xl ${
              props.mode === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>Hi, I am Hemanth.</p> 
            <p className={`leading-relaxed text-xl ${
              props.mode === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              I am a passionate tech enthusiast with a strong focus on competitive coding. Skilled in building full-stack applications using the MERN stack. I enjoy solving complex problems and creating impactful solutions. Driven by curiosity, I'm also exploring the world of AI and machine learning.
            </p>
            <button className={`mt-4 px-6 py-2 text-white rounded transition-colors duration-300 ${
              props.mode === 'dark' 
                ? 'bg-amber-500 hover:bg-amber-600' 
                : 'bg-amber-600 hover:bg-amber-700'
            }`}>
              View my Resume
            </button>
        </div>
        <div className="flex items-center justify-center">
            <img 
              src={abt}
              alt="about_image" 
              className={`max-w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105 ${
                props.mode === 'dark' ? 'shadow-amber-800/20' : 'shadow-md'
              }`} 
            />
        </div>
    </div>
    </>
  )
}

export default About
