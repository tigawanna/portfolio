import React from 'react'
import { projects } from './../util/aboututils';
import { useRouter } from 'next/router';
import Link from 'next/link'
import {motion} from 'framer-motion'
interface footerProps {

}

const Footer: React.FC<footerProps> = ({}) => {
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
           projects.map((item,index)=>{
             return(
               <li key={index} 
               className="text-base md:text-lg text-slate-50 shadow hover:shadow-lg
                shadow-slate-50 hover:shadow-green-300 p-4 md:w-[30%] m-[2%]">
                 <Link href={item.link}>
                 <a target="_blank">
                   <motion.div 
                  whileHover={{ scale: 1.1, opacity: 1}}
                   className="text-2xl md:text-xl text-green-300 font-bold">
                   {item.title}
                   </motion.div>
                   <div className="font-medium text-sm">
                   {item.desc}
                   </div>
                   </a>
                   </Link>
                </li>
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
