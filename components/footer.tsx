import React from 'react'
import { local_projects } from './../util/aboututils';
import { useRouter } from 'next/router';
import Link from 'next/link'
import {animate, motion} from 'framer-motion'


export interface Project {
title:string,
desc:string,
link:string
}
interface footerProps {
fb_projects:Project[] | undefined
}

const Footer: React.FC<footerProps> = ({fb_projects}) => {

const projects=fb_projects&&fb_projects.length>0?fb_projects:local_projects;

const router = useRouter();
return (
<div className="min-h-screen w-[100%] flex flex-col bg-slate-700 pl-4">
  <div className="flex flex-col">

  <div className="flex flex-col shadow-sm shadow-slate-300 p-4 ">
        <div  className="text-3xl md:text-4xl text-slate-400 font-bold">
          Projects
          </div>
          <ul  className="flex flex-col md:flex-row mt-[5%] ">
         {
           projects&&projects.map((item,index)=>{
             return(
               <motion.li
               initial={{
                y:100,
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
          
               key={index} 
               className="footer-projects-li">
                 <Link href={item.link}>
                 <a target="_blank">
                   <div 
                     className="text-2xl md:text-xl text-green-300 opacacity-1 font-bold overflow-hidden">
                   {item.title}
                   </div>
                   <div className="font-medium text-sm">
                   {item.desc}
                   </div>
                   </a>
                   </Link>
                </motion.li>
             )
           })
         }

        </ul>
      </div>
  </div>
</div>
);
}

export default Footer
