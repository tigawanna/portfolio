import React from 'react'
import {SiApollographql,SiGraphql}from 'react-icons/si'

interface IconsProps {

}

export const Icons: React.FC<IconsProps> = ({}) => {
return (
 <div className="h-screen w-full">
     <SiApollographql/>
     <SiGraphql/>

 </div>
);
}
