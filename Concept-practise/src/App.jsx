import React, { useState } from "react";
import "./index.css";

const App = () =>{
  const [count , update] =  useState(0)

  const handleUpdate = (action) => {
    if(action=="increase"){
      update(count+1);
    }else if(action=="decrease"){
      update(count-1);
    }else if(action=="reset"){
      update(0);
    }
  }

  return (
    <div className=" flex flex-col justify-center items-center h-screen gap-4 w-full"> 
      <h1
       className='bg-gray-600 
                  h-[20vh] w-[20vh]
                  flex
                  text-amber-50
                  justify-center
                  text-7xl
                  items-center
                  rounded-full'>
                  {count}
      </h1>
      <div className="flex flex-row gap-4"> 
      <button onClick={()=>handleUpdate("increase")} className="bg-gray-600
                        rounded-4xl
                        h-[5vh] w-[20vh]
                        flex
                        items-center
                        justify-center
                        text-2xl 
                        text-amber-50">
                        Increase
        </button>
        <button onClick={()=>handleUpdate("decrease")}className="bg-gray-600
                        rounded-4xl
                        h-[5vh] w-[20vh]
                        flex
                        items-center
                        justify-center
                        text-2xl 
                        text-amber-50">
                        Decrease
        </button>
        <button onClick={()=>handleUpdate("reset")}className="bg-gray-600
                        rounded-4xl
                        h-[5vh] w-[20vh]
                        flex
                        items-center
                        justify-center
                        text-2xl 
                        text-amber-50">
                        Reset
        </button>
        </div>
    </div>
  )
}
export default App;