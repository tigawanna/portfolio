import React from 'react'
import BeatLoader from "react-spinners/BeatLoader";




export default function LoadingScreen() {
    return (
        <div className="h-screen w-full">
        <div className="h-full w-full flex flex-col justify-center items-center">
        <BeatLoader  loading={true}  size={50} color={"#7CFC00"}/>
        </div>
        </div>
      

    )
}
