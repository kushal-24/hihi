import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti'; 

const FULL_TEXT = `Hiee My Manuu, Here we are, INSIDE THE MANASVI WORLD 🥹🥳 I hope youu enjoy your journey of walking on this road of your world <3.
I just wanted to let you know how Sorruu I am for all the stupidity I've done, for all the times I have made you cry, I have given my bestt to make
up for it but more importantly to make youu happyy, to get happyy seeing the blush on your facee...I lovee youu sosoosoo muchh Manuuu <33
`; // 👈 Changed to your actual text
const TYPING_SPEED = 40;
const POPUP_TEXT = "It's okuu bubuu, I'll put in more efforts to prove how much I lovee youu and how sorruu I am 🥺";

function Letter() {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const popupRef = useRef(null);
  const letterBoxRef = useRef(null); 

  // --- Typing Effect Logic ---
  useEffect(() => {
    // 🚨 IMPORTANT: Use the provided text string (FULL_TEXT) here
    if (index < FULL_TEXT.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + FULL_TEXT[index]);
        setIndex((prev) => prev + 1);
      }, TYPING_SPEED);

      return () => clearTimeout(timeoutId);
    }
  }, [index]);

  // ... (Click Outside Logic - unchanged)
  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsPopupVisible(false);
      }
    }
    if (isPopupVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isPopupVisible]);
  
  // Confetti function (unchanged)
  const triggerConfetti = () => {
    if (!confetti) return; 

    const rect = letterBoxRef.current.getBoundingClientRect();

    confetti({
      origin: { 
        x: (rect.left + rect.width / 2) / window.innerWidth,
        y: rect.top / window.innerHeight 
      },
      particleCount: 150, 
      spread: 60, 
      startVelocity: 40,
      decay: 0.9,
      colors: ['#ffc0cb', '#ff7aa7', '#d83a7c', '#ffffff'], 
      scalar: 0.9,
    });
  };

  return (
    // Outer wrapper: w-full on mobile, then restrict max width on desktop
    <div className="m-2 flex flex-col justify-center items-center">
      
      {/* The Letter Box: Added max-w-xs by default, then expanded for sm/md screens. */}
      <div 
        ref={letterBoxRef} 
        className=" 
          md:w-[40vw] max-w-4xl
          border-pink-600 border-4 
          bg-fuchsia-100
          relative 
          flex flex-col 
          justify-start 
          overflow-y-auto
          h-fit
        "
      >
        {/* Text Area: Used flex-1 to occupy all available vertical space */}
        <p className="p-3 font-poppins text-base sm:text-xl leading-relaxed flex-1"> 
          {displayedText}
          <span className="animate-pulse">|</span>
        </p>

        {/* Button Wrapper: Removed absolute positioning */}
        <div 
          className="
            flex justify-evenly items-center
            w-full px-2 gap-3
            mt-2 mb-2 
            z-20 
          "
        >
          {/* Button 1 (Popup Toggle) */}
          <button 
            className='cursor-pointer bg-pink-300 border-pink-600 border-2 w-30 h-[100px rounded-md px-3 py-1 sm:px-4 sm:py-2
              hover:scale-105 transition-transform duration-300 ease-in-out font-sans text-sm sm:text-base'
            onClick={() => setIsPopupVisible(true)}
          >
          Noo forgiving yet
          </button>
          
          {/* Button 2 (Confetti Trigger) */}
          <button 
            className='
              bg-pink-300 cursor-pointer border-pink-600 border-2 rounded-md px-3 py-1 sm:px-4 sm:py-2
              hover:scale-105 transition-transform duration-300 ease-in-out font-sans text-sm sm:text-base'
            onClick={triggerConfetti} 
          >
            Sshhh? 👉🏻👈🏻
          </button>
        </div>

        {/* The Square Popup */}
        <div
          ref={popupRef}
          className={`
            absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
             w-9/12 h-9/12 bg-white/80 backdrop-blur-sm z-30 shadow-2xl rounded-lg
            border-4 border-pink-700 p-4 text-center text-pink-900 font-semibold text-base sm:text-lg
            transition-all duration-500 ease-in-out
            ${isPopupVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'} 
          `}
        >
          {POPUP_TEXT}
        </div>
      </div>
    </div>
  )
}

export default Letter;