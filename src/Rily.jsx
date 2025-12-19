import React, { useState } from "react";

// Move array outside component to prevent re-creation on every render
const REASONS = [
  "You're very caring",
  "You're soo kind and empathic",
  "The bestestt dancer hehe",
  "My biggest motivator and advisor 💪🏻",
  "Always stay with me through my lows and highs 💗",
  "Youu are veryy veryy Prettyy and beautiful 🥰",
  "Youu are veryy veryy hotttt and sexyy too 🥰🥰😅 ",
  "You're soo optimistic and like a jar full of positivity",
  "Again just to remind you, You're soo sooo pretttyyy",
  "You're a perfectionist (bestt in whatever Youu do)",
  "You're the cutest little and my favv singer hehe",
  "Has the perfect sense of humour",
  "Youu has a cutuu nose and small small fingers and toes hihihi",
  "You're ekdam a master chef",
  "Youu match my vibe ekdam perfectly",
  "Respectful and obedient to everyone",
  "ekdam coool and chill pill at the same time",
  "Eliminates the tension factor from my mind"
];

function Rily() {
  const [count, setCount] = useState(0);

  const addHandler = () => {
    if (count < REASONS.length) {
      setCount((prev) => prev + 1);
    }
  };

  // We derive the visible list from the count state directly
  const visibleList = REASONS.slice(0, count);

  return (
    <div className="flex justify-center items-start min-h-fit bg-none">
      <div className="w-full max-w-md lg:max-w-2xl border-pink-600 border-4 p-4 md:p-6 rounded-2xl flex flex-col items-center bg-fuchsia-100 shadow-xl">
        
        <h1 className="text-2xl md:text-3xl text-pink-600 font-bold text-center leading-tight">
          Reasons why I love you
        </h1>
        
        <h4 className="font-medium font-sans mt-2 animate-pulse text-pink-500">
          Click on the heart below
        </h4>

        <button
          onClick={addHandler}
          className="hover:scale-110 active:scale-90 cursor-pointer transition-transform duration-300 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={count >= REASONS.length}
        >
          <i className="fa-solid fa-heart text-red-500 text-5xl md:text-6xl drop-shadow-md"></i>
        </button>

        {/* List Container - Improved for wrapping */}
        <div className="w-full mt-6 flex flex-wrap justify-center gap-3">
          {visibleList.map((item, index) => (
            <div
              key={index}
              className="
                max-w-full wrap-break-word border-2 font-sans border-pink-600 text-center 
                bg-pink-400/80 text-pink-700 rounded-2xl px-4 py-2 shadow-sm
                animate-slide-in
              "
            >
              <p className="text-sm md:text-base font-semibold leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>

        {count >= REASONS.length && (
          <p className="mt-6 text-sm text-pink-700 font-bold font-sans animate-bounce">
            And a million more reasons loading... 🥰😅
          </p>
        )}
      </div>
    </div>
  );
}

export default Rily;