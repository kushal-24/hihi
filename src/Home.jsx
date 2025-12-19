// import React from "react";
// import "./index.css";
// import BgVid from "./BgVid";
// import Letter from "./Letter";
// import Rily from "./Rily";
// import HeartCatcherGame from "./HeartCatcherGame";
// import LocalVideoPlayer from "./LocalVideoPLayer";

// function Home() {
//   return (
//     // Outer container to apply margin and constrain the size
//     <div className="m-4 bg-pink-200/50">
//       <div
//         className="
//           w-full
//           max-w-full
//           min-h-screen
//           border-4 border-pink-700
//           rounded-xl
//           bg-pink-200/30
//           relative ">
//         <BgVid />
//         {/* Add any overlay content here */}

//         <div className="flex flex-row w-screen m-3 h-full">
//           <Letter/>
//           <div className=" "><Rily/></div>
//         </div>

//         {/* KEY CHANGE: Added 'items-end' to align children to the bottom
//           and removed the vertical margin adjustment (mb-[-3vh]).
//         */}
//         <div className="flex flex-row justify-between items-center m-4 ">
//           <HeartCatcherGame/>
//           <div className="ml-3"><LocalVideoPlayer/></div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;
import React, { useState, useRef } from "react"; // Added useRef
import Draggable from "react-draggable";
import { useNavigate } from "react-router-dom";
import "./index.css";

// Components
import BgVid from "./BgVid";
import Letter from "./Letter";
import Rily from "./Rily";
import HeartCatcherGame from "./HeartCatcherGame";
import LocalVideoPlayer from "./LocalVideoPLayer";
import Loader from "./Loader";

// Import your image
import sticker1 from "../src/assets/sticker1.png";
import gif1 from "../src/assets/gif1.gif";
import gif2 from "../src/assets/gif2.gif";
import gif3 from "../src/assets/gif3.gif";
import gif4 from "../src/assets/gif4.gif";
import gif5 from "../src/assets/gif5.gif";

function Home() {
  const navigate = useNavigate();
  const [startTransition, setStartTransition] = useState(false);
  const LOADER_DELAY_MS = 1500;

  // 1. Create a reference for the draggable element
  const nodeRef1 = useRef(null);
  const nodeRef2 = useRef(null);

  const handleSecretClick = () => {
    setStartTransition(true);
    const navigationTimer = setTimeout(() => {
      navigate("/secret");
    }, LOADER_DELAY_MS);
    return () => clearTimeout(navigationTimer);
  };

  return (
    <div className="m-2 sm:m-4 bg-pink-200/50 min-h-screen relative overflow-hidden">
      {/* 2. Pass the nodeRef to the Draggable component */}
      <Draggable nodeRef={nodeRef1}>
        <div
          ref={nodeRef1} // 3. Attach the same ref to the div
          className="absolute z-100 cursor-grab active:cursor-grabbing p-2"
          style={{ top: "10%", left: "10%" }}
        >
          <img
            src={sticker1}
            alt="draggable"
            className="w-32 h-auto pointer-events-none select-none drop-shadow-2xl"
          />
        </div>
      </Draggable>

      {/* Loader Overlay */}
      {startTransition && (
        <div className="fixed inset-0 z-9999">
          <Loader />
        </div>
      )}

      <div className="w-full max-w-full min-h-screen border-4 border-pink-700 rounded-xl bg-pink-200/30 relative">
        <BgVid />

        <div className="flex flex-col md:flex-row md:m-0 h-full items-center">
          <div className="m-5">
            <Letter />
          </div>
          <div className="w-full flex flex-row justify-center">
            <Rily />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center md:items-end m-4">
          <div className="w-full md:w-auto">
            <HeartCatcherGame />
          </div>

          <Draggable nodeRef={nodeRef2}>
            <div
              ref={nodeRef2} // 3. Attach the same ref to the div
              className="absolute z-100 cursor-grab active:cursor-grabbing p-2"
              style={{ top: "50%", left: "70%" }}
            >
              <img
                src={sticker1}
                alt="draggable"
                className="w-32 h-auto pointer-events-none select-none drop-shadow-2xl"
              />
            </div>
          </Draggable>

          <div className="mt-4 md:mt-0 ml-0 md:ml-3 md:w-auto">
            <LocalVideoPlayer />
          </div>

          <div
            onClick={handleSecretClick}
            className=" justify-center mt-[8vh] items-center flex flex-row w-[60px] md:w-[100px]">
            <i className="fa-solid fa-heart animate-pulse-scale cursor-pointer  text-red-500 text-[20rem]"></i>
          </div>

          <div className="absolute bottom-45 text-4xl w-[300px] text-center font-bold font-sans">
            CLICK HERE FOR A SURPRISE
          </div>
          <div className="absolute bottom-25 w-[100px] text-center text-xs font-sans">
            PS: Pls click on this only if you're on an ipad or laptop 😅
          </div>
        </div>
      </div>

      {/* <div className="absolute top-[60vh] right-8 w-50">
        <img src={gif1} className="rounded-[50%]"></img>
      </div>
      <div className="absolute top-[110vh] left-8 w-50">
        <img src={gif2} className="rounded-[50%]"></img>
      </div>
      <div className="absolute top-[190vh] right-20 w-50">
        <img src={gif3} className="rounded-[50%]"></img>
      </div>
      <div className="absolute top-0 right-70 w-50">
        <img src={gif4} className="rounded-[50%]"></img>
      </div>
      <div className="absolute top-[20vh] left-[30px] w-[120px] hidden md:block">
        <img src={gif5} className="rounded-full w-full" />
      </div> */}
    
    </div>
  );
}

export default Home;
