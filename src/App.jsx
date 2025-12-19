// App.jsx (The fixed component with refined heart dimensions for tablets/laptops)

import { useEffect, useState } from "react";
import "./App.css";
import BgVid from "./BgVid";
import heart from "./assets/heart.png";
import HeartTrailCursor from "./HeartTrailCursor";
import { useNavigate } from "react-router-dom";
import TransitionWrapper from "./TransitionWrapper"; 

function App() {
  const [startTransition, setStartTransition] = useState(false);
  const navigate = useNavigate();

  const handleStartNavigation = () => {
    setStartTransition(true); 
  };
  
  return (
    <>
      <HeartTrailCursor/>
      {/* <MusicToggle /> */}
  
      <TransitionWrapper targetRoute="/home" trigger={startTransition}>

        <div className="m-3 border-4 border-pink-700 bg-pink-200/50">
          <BgVid />
          <div className=" bg-pink-200/30 w-full min-h-[calc(100vh-2rem)]  relative z-10 flex flex-col justify-center items-center">
            
            <h1
              className="
            font-romantic
            text-4xl md:text-6xl font-extrabold text-center 
            bg-linear-to-r from-[#db6797] via-[#ff7aa7] to-[#d83a7c]
            text-transparent bg-clip-text
            animate-glow animate-fadeUp 
            drop-shadow-[0_0_14px_rgba(255,120,160,0.7)]
            md:animate-bounce"
            >
              Welcome to Manasvi's World 💗
            </h1>

            {/* Change the img onClick to trigger the transition */}
            <img
              src={heart}
              onClick={handleStartNavigation} 
              className="
                mt-7 hover:scale-105 duration-200 transit-all ease-in transition-transform cursor-pointer
                
                /* Mobile Default: Smaller (e.g., 50vw wide, 30vh tall) */
                sm:w-[40vw] h-[40vh] 
                md:w-[35vw] md:h-[35vh]
                lg:w-[30vw] lg:h-[50vh]"></img>

            <div 
              className="
                font-poppins text-pink-900 font-semibold mt-10 p-5 m-4
                bg-pink-100/40         
                backdrop-blur-sm       
                shadow-lg  
                text-xs 
                lg:m-2
                sm:text-2xl
                border rounded-2xl    
              ">
              Many surprises present inside, Get yourself prepared to see a world of joy and lovee
            </div>

          </div>
        </div>
      </TransitionWrapper>
    </>
  );
}

export default App;