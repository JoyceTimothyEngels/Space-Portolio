"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
<motion.div
          variants={slideInFromTop}
          className="Welcome-box"
        >
          
        </motion.div>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-5">
        Skills
            </h1>
            <span>
            Building innovative Apps with a modern
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Tech Stack.{" "}
            </span>
            
          </span>
        </motion.div>
        <motion.div
        variants={slideInFromRight(0.5)}
        className='text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
        >
           
        </motion.div>
    </div>
  )
}

export default SkillText