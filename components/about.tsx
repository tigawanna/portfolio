import React,{useState} from 'react'
import { langs, metext,frontend,backend } from '../util/aboututils';
import { motion } from 'framer-motion';
import Icons from './Icons' 

interface introProps {

}

 const About: React.FC<introProps> = ({}) => {
  


    return (
    <div className="mt-[60px] min-h-screen max-w-[99%] flex flex-col bg-slate-800">
  


     <div  className="flex-center w-full  flex-col justify-evenly ">  

     <div  className="flex w-full  h-full flex-col md:flex-row justify-evenly ">  

      <motion.div 
          initial={{
          y:0,
          x:-20,
        opacity:0.1
          }}
          whileInView={{
          opacity:1,
          y:0,
          x:0
            }} 
          transition={{
          type:"spring",
          stiffness:30
            }}
      className="flex-center flex-col h-full w-[95%] shadow hover:shadow-lg shadow-slate-300 
      hover:shadow-green-300 p-4 m-2 ">
        <div  className="text-3xl md:text-4xl text-slate-400 font-bold ">
          Ethos
        </div>
        <ul className="flex flex-col m-[5%]">
         {
           metext.map((item,index)=>{
             return(
               <motion.li
               whileHover={{ scale: 1.1, opacity: 1}}
               key={index}
              className="text-base md:text-lg  font-mono text-slate-50 hover:text-green-300"> {">"} {item}
               </motion.li>
             )
           })
         }
         ...
        </ul>
      </motion.div>

    <motion.div 
     initial={{
       y:0,
       x:-20,
     opacity:0.1
    }}
     whileInView={{
      opacity:1,
      y:0,
      x:0
      }} 
     transition={{
      type:"spring",
      stiffness:30
      }}
    
    className="flex flex-col  w-[95%] h-full shadow hover:shadow-lg shadow-slate-300 
     hover:shadow-green-300 p-4 m-2">

       <div  className="text-3xl md:text-4xl text-slate-400 font-bold">
          Languages
          </div>
          <ul className="flex flex-col mt-[5%]">
         {
           langs.map((item,index)=>{
             return(
               <li key={index}
               className="text-sm md:text-lg text-slate-50 font-mono "> {">"} {item}</li>
             )
           })
         }

        </ul>
      </motion.div>


     </div>

    <div className="flex-center w-full  flex-col md:flex-row justify-evenly ">

    <motion.div
      initial={{
        y:0,
        x:-20,
      opacity:0.1
        }}
        whileInView={{
        opacity:1,
        y:0,
        x:0
          }} 
        transition={{
        type:"spring",
        stiffness:30
          }}
    
    className="flex w-[95%] flex-col  justify-evenly  shadow hover:shadow-lg 
    shadow-slate-300 hover:shadow-green-300 p-4 m-1"> 

      <div  className="text-2xl md:text-4xl text-slate-400 font-bold">
          Frontend
          </div>
          <ul  className="flex flex-wrap">
         {
           frontend.map((item,index)=>{
             return(
               <li key={index}
               className="h-full text-sm md:text-lg text-slate-50 m-1 font-mono"> {">"} {item}</li>
             )
           })
         }

        </ul>
      </motion.div>

      <motion.div 
        initial={{
          y:0,
          x:-20,
        opacity:0.1
          }}
          whileInView={{
          opacity:1,
          y:0,
          x:0
            }} 
          transition={{
          type:"spring",
          stiffness:30
            }}
      className="flex flex-col w-[95%] shadow hover:shadow-lg  shadow-slate-300 
      hover:shadow-green-300 p-4 m-1">
        <div  className="h-full text-2xl md:text-4xl text-slate-400 font-bold">
          Backend 
          </div>
          <ul  className="flex flex-wrap mt-[5%]">
         {
           backend.map((item,index)=>{
             return(
               <li key={index}
               className="text-sm md:text-lg  text-slate-50 m-1 font-mono"> {">"} {item}</li>
             )
           })
         }

        </ul>
     </motion.div>

    </div>

    </div>
    <Icons/>
    </div> 
        );
}
export default About
