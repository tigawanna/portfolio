import React from 'react'

interface introProps {

}

export const Intro: React.FC<introProps> = ({}) => {
    return (
            <div className="mt-[60px] min-h-screen w-[100%] flex flex-col bg-slate-700 pl-4">
            <div className="font-mono text-2xl md:text-xl text-green-300 font-bold ">
                 Hi there, am
              </div>
             <div className="flex flex-col mt-[100px]">
              <div className="font-sarif text-6xl md:text-8xl text-green-400 font-bold mt-[5%]">
                Dennis Kinuthia
              </div>
              <div className="font-sarif text-3xl md:text-6xl text-slate-200 font-bold mt-[30px]">
                African web developer and designer
              </div>
              <div 
              className="font-sarif text-base md:text-lg 
              text-slate-200 font-semibold mt-[10px] md:w-[40%]"
          
              >
             I mostly focus on Javascript/typescript front-end design 
             and implementation with multiple tools 
             to fetch, organise and display the data effeciently , 
             with reactivity and reponsiveness in mind
             and deleiver the best experience possible
              </div>
            </div>
            </div> 
        );
}
export default Intro
