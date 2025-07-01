import React from 'react'
import html from '../assets/skills/html.svg'
import css from '../assets/skills/css.svg'
import js from '../assets/skills/javascript.svg'
import react from '../assets/skills/react.svg'
import node from '../assets/skills/node.svg'
import mongo from '../assets/skills/mongo.svg'
import sql from '../assets/skills/mysql.svg'
import git from '../assets/skills/git.svg'
import github from '../assets/skills/github.svg'
import vsc from '../assets/skills/vscode.svg'
import java from '../assets/skills/java.svg'
import python from '../assets/skills/python.svg'

const Skills = (props) => {
  const skills=[
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "JavaScript", icon: js },
    { name: "React", icon: react },
    { name: "Java", icon: java },
    { name: "Python", icon: python },
    { name: "Node.js", icon: node },
    { name: "MongoDB", icon: mongo },
    { name: "MySQL", icon: sql },
    { name: "Git", icon: git },
    { name: "GitHub", icon: github },
    { name: "VS Code", icon: vsc },
  ]

  return (
    <section id="Skills" className={`py-16 px-6 md:px-12 lg:px-24 ${
      props.mode === 'dark' ? 'bg-gray-900 text-gray-200' : 'bg-amber-50/30 text-gray-800'
    } transition-colors duration-300`}>
      <div className="container mx-auto">
        <h2 className={`text-4xl font-bold text-center mb-12 ${
          props.mode === 'dark' ? 'text-amber-400' : 'text-amber-800'
        } relative`}>
          My Skills
          <span className="block w-20 h-1 bg-amber-500 mt-4 mx-auto rounded-full"></span>
        </h2>

        <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 p-6 rounded-lg border ${
          props.mode === 'dark' ? 'border-amber-700/40 bg-gray-800/50' : 'border-amber-300 bg-white/70'
        } transition-all duration-300 shadow-sm`}>
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center justify-center p-4 rounded-lg ${
                props.mode === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-amber-100/60'
              } transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md cursor-pointer`}
            >
              <div className={`w-16 h-16 flex items-center justify-center mb-3 rounded-full p-3 ${
                props.mode === 'dark' 
                  ? 'bg-gray-700 border border-gray-600' 
                  : 'bg-white border border-amber-200'
              } transition-all duration-300 hover:scale-110`}>
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className={`w-10 h-10 object-contain ${
                    props.mode === 'dark' ? 'filter brightness-90' : ''
                  }`}
                />
              </div>
              <p className={`font-medium text-center ${
                props.mode === 'dark' ? 'text-amber-300' : 'text-amber-800'
              } transition-colors duration-300`}>
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
