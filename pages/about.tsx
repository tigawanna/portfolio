import React from 'react'
import { langs, metext,frontend,backend } from './../util/aboututils';

interface introProps {

}

 const About: React.FC<introProps> = ({}) => {
    return (
        <div className="mt-[60px] min-h-screen w-[100%] flex flex-col bg-slate-600 pl-4">
  

      <div  className="flex w-full md:flex-row flex-col justify-evenly mt-[5%]">  

      <div className="flex flex-col shadow-lg shadow-slate-300 p-4 ">
        <div  className="text-3xl md:text-5xl text-slate-400 font-bold">
          Ethos
        </div>
        <ul  className="flex flex-col mt-[5%]">
         {
           metext.map((item,index)=>{
             return(
               <li key={index}
                className="text-base md:text-lg text-slate-50 "> {">"} {item}</li>
             )
           })
         }
         ...
        </ul>
      </div>

      <div className="flex flex-col shadow-lg shadow-slate-300 p-4 ">
        <div  className="text-3xl md:text-4xl text-slate-400 font-bold">
          Languges
          </div>
          <ul  className="flex flex-col mt-[5%]">
         {
           langs.map((item,index)=>{
             return(
               <li key={index}
               className="text-base md:text-lg text-slate-50 "> {">"} {item}</li>
             )
           })
         }

        </ul>
      </div>
  
    <div className="flex flex-col shadow-lg shadow-slate-300 p-4 ">
        <div  className="text-3xl md:text-4xl text-slate-400 font-bold">
          Frontend
          </div>
          <ul  className="flex flex-col">
         {
           frontend.map((item,index)=>{
             return(
               <li key={index}
               className="text-base md:text-lg text-slate-50 "> {">"} {item}</li>
             )
           })
         }

        </ul>
      </div>
      <div className="flex flex-col shadow-lg shadow-slate-300 p-4 ">
        <div  className="text-3xl md:text-4xl text-slate-400 font-bold">
          Backend 
          </div>
          <ul  className="flex flex-col mt-[5%]">
         {
           backend.map((item,index)=>{
             return(
               <li key={index}
               className="text-base md:text-lg text-slate-50 "> {">"} {item}</li>
             )
           })
         }

        </ul>
     </div>
    </div>
    </div> 
        );
}
export default About
