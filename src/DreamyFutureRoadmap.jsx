// import React from 'react';

// // 🚨 IMPORTANT: If you use the import method, you must import each image individually at the top:
// // import one from '../src/assets/one.jpeg';
// // Then use the imported variable (e.g., photoSrc: one) in the array.
// // I will keep the string paths for now, assuming your bundler handles them.

// const FUTURE_POINTS = [
//   { id: 1, title: "First meet out of school hehe", date: "2021 Q1", content: "Our first meet outside school, got me knowing your address, a happyy dayy indeed !", photosrc:'../src/assets/one.jpeg'},
//   { id: 2, title: "The place where it all startedd 🕺🏻", date: "2022 Q1", content: "The first time when I realised how do butterflies in stomach feel like, a rush of emotions and overjoyed happiness", photosrc: "../src/assets/two.jpeg" },
//   { id: 3, title: "Cycling dates", date: "2022 Q1", content: "Every evening with youu sitting before the sunset talking for hours", photosrc: "../src/assets/four.jpeg" },
//   { id: 4, title: "home alone, 1st time hihihi", date: "2022 Q1", content: "Taking cutee cutee snapss", photosrc: "../src/assets/three.jpeg"},
//   { id: 5, title: "wohooo, half a year complete", date: "2022 Q3", content: "My first surprise visit to my cutuu", photosrc: "../src/assets/five.jpeg" },
//   { id: 6, title: "Another Adventure", date: "2028 Q1", content: "Dedicate a month to helping a cause we both care deeply about.", photosrc: "" },
//   { id: 7, title: "Imrpromptu plan to bandstand", date: "2024 Q3", content: "Visit to her home, eventually leading us to leave for bandra cuz we didn't feel like going other ways ;)", photosrc: "../src/assets/seven.jpeg" },
//   { id: 8, title: "Our first time to Marines", date: "2024 Q3", content: "A day filled with rollercoaster of emotions, cutuu by my sidee all dayy", photosrc: "../src/assets/eight.jpeg" },
//   { id: 9, title: "Ganpati darshan together <3", date: "2024 Q3", content: "A sudden plan to come back from BBS for Ganesh Chaturthi and planning Ganpati darshan with my cutuupiee", photosrc: "../src/assets/nine.jpeg" },
//   { id: 10, title: "Garba nightt with Saee", date: "2024 Q4", content: "When I just couldn't get my eyes off her, soo prettyy looking" ,photosrc: "../src/assets/ten.jpeg" },
//   { id: 11, title: "Visit to Mam's 2nd Fav place on earth", date: "2024 Q3", content: "Just soo soo proud of my girl for reaching here!!", photosrc: "../src/assets/eleven.jpeg" },
//   { id: 12, title: "Jimmies burgerr, here we comee", date: "2025 Q3", content: "I lovee seeing her eating hehee", photosrc: "../src/assets/twelve.jpeg" },
//   { id: 13, title: "Visit to Iskcon", date: "2025 Q4", content: "praying for everyone as well as for us <3", photosrc:"../src/assets/thirteen.jpeg" },
//   { id: 14, title: "Our first moviee date yayy SSKTK", date: "2025 Q4", content: "Fun dayy at Korum mall, looking at her eating popcorn ;)", photosrc: "../src/assets/fourteen.jpeg" },
//   { id: 15, title: "Visit to Central Park", date: "2025 Q4", content: "A special highlight cuz my bbg was looking so cutee in kurti and jhumke hehehe", photosrc: "../src/assets/fifteen.jpeg" },
//   { id: 16, title: "Shidori, here I come again to watch my gurll dancee", date: "2025 Q4", content: "It was moreee than worth it to watch her rockk and rule the entire stage, woww sooo amazingg", photosrc: "../src/assets/sixteen.jpeg" },
// ];

// // Helper component for the individual roadmap card (Note Container)
// const NoteContainer = ({ point, isOdd }) => {
//   const rotationClass = isOdd ? 'rotate-[-2deg]' : 'rotate-[2deg]';
//   const colorClass = isOdd ? 'bg-pink-300/60 border-pink-500' : 'bg-fuchsia-300/60 border-fuchsia-500';

//   return (
//     <div className={`
//       relative p-6 w-full max-w-sm 
//       rounded-3xl shadow-2xl 
//       backdrop-blur-md border-4 
//       transform ${rotationClass} 
//       ${colorClass}
//       transition-all duration-300 hover:rotate-0 hover:scale-[1.05]
//     `}>
//       {/* Date Tag */}
//       <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 px-3 py-1 bg-white border-2 border-pink-700 rounded-full shadow-lg text-sm font-semibold text-pink-700 whitespace-nowrap">
//         {point.date}
//       </div>

//       {/* Title */}
//       <h2 className="text-2xl font-bold text-pink-900 mb-2 border-b-2 border-pink-500/50 pb-1">
//         {point.title}
//       </h2>
      
//       {/* Content */}
//       <p className="text-base text-fuchsia-900 italic">
//         {point.content}
//       </p>
//     </div>
//   );
// };

// // Helper component for the Photo Placeholder (FIXED to accept and render photoSrc)
// const PhotoPlaceholder = ({ isOdd, photosrc, point }) => { 
//     // Use the opposite rotation of the corresponding Note Container
//     const rotationClass = isOdd ? 'rotate-[3deg]' : 'rotate-[-3deg]';
//     const marginClass = isOdd ? 'md:ml-10' : 'md:mr-10'; 
  
//     return (
//       <div className={`
//         relative p-2 w-full max-w-sm h-72 
//         bg-white/80 border-4 border-dashed border-pink-600 rounded-lg shadow-xl 
//         flex justify-center items-center text-center text-pink-700 italic
//         transform ${rotationClass} ${marginClass} 
//         transition-all duration-300 hover:rotate-0 hover:scale-[1.05]
//         text-sm font-semibold
//         overflow-hidden`}>
        
//         {/* CRITICAL FIX: Render <img> if photosrc exists, otherwise render fallback text */}
//         {photosrc ? (
//           <img 
//             src={photosrc} 
//             alt={`Memory from ${point.title} (${point.date})`} 
//             className="w-full h-full object-cover rounded-sm" 
//           />
//         ) : (
//           /* Fallback text for empty slots */
//           <p className="p-4">
//              [Photo Spot]
//           </p>
//         )}
  
//         {/* Tape Effect (Purely decorative) */}
//         <div className="absolute -top-2.5 w-12 h-4 bg-pink-700/60 transform -rotate-12 rounded-sm"></div>
//       </div>
//     );
//   };


// function DreamyFutureRoadmap() {
//   return (
//     // Outer container set to 100vh with soft background
//     <div className="w-full min-h-screen bg-pink-100 flex justify-center py-10 relative overflow-hidden">
      
//       {/* Title (Placeholder font, replace font-romantic if needed) */}
//       <h1 className="absolute top-10 text-6xl font-romantic text-pink-700 drop-shadow-md z-20">
//         Our Dreamy Future
//       </h1>

//       {/* --- The Flowchart Line Container --- */}
//       <div className="w-full max-w-5xl flex flex-col items-center relative pt-24 pb-16">
        
//         {/* Vertical Flowchart Line (Simulated) */}
//         <div className="absolute top-20 bottom-0 w-1 bg-pink-400/70 shadow-inner rounded-full z-10"></div>
        
//         {/* Map through the dreamy points */}
//         {FUTURE_POINTS.map((point, index) => {
//           const isOdd = index % 2 !== 0;

//           // Cute Roadmap Indicator (Heart on the center line)
//           const heartMarker = (
//              <div className="absolute left-1/2 transform -translate-x-1/2 text-5xl text-red-500 z-20 top-1/2 -translate-y-1/2">
//                 <i className="fa-solid fa-heart animate-pulse"></i>
//              </div>
//           );

//           // Render the row container to hold both elements
//           return (
//             <div 
//               key={point.id} 
//               className="relative w-full flex justify-center my-10 md:my-16">
              
//               {/* Content Slot 1 (Left side) */}
//               <div className={`w-1/2 flex justify-end ${isOdd ? 'order-2' : 'order-1'}`}>
//                   {/* FIX: PASS photosrc and point to PhotoPlaceholder */}
//                   {isOdd 
//                     ? <PhotoPlaceholder isOdd={isOdd} photosrc={point.photosrc} point={point} /> 
//                     : <NoteContainer point={point} isOdd={isOdd} />}
//               </div>

//               {/* Heart Marker (Always centered on the line) */}
//               {heartMarker}

//               {/* Content Slot 2 (Right side) */}
//               <div className={`w-1/2 flex justify-start ${isOdd ? 'order-1' : 'order-2'}`}>
//                   {/* FIX: PASS photosrc and point to PhotoPlaceholder */}
//                   {isOdd 
//                     ? <NoteContainer point={point} isOdd={isOdd} /> 
//                     : <PhotoPlaceholder isOdd={isOdd} photosrc={point.photosrc} point={point} />}
//               </div>
//             </div>
//           );
//         })}

//         {/* Final End Marker */}
//         <div className="mt-10 p-5 bg-pink-600 rounded-full text-white text-xl font-bold shadow-xl z-20">
//           ...And Many More Adventures!
//         </div>
        
//       </div>
//     </div>
//   );
// }

// export default DreamyFutureRoadmap;
import React from 'react';

// 🚨 IMPORTANT: If you use the import method, you must import each image individually at the top:
// import one from '../src/assets/one.jpeg';
// Then use the imported variable (e.g., photoSrc: one) in the array.
// I will keep the string paths for now, assuming your bundler handles them.

const FUTURE_POINTS = [
  { id: 1, title: "First meet out of school, with myy favvv personn", date: "2021 Q1", content: "Our first meet outside school, got me knowing your address, happyy dayyy, best moment taking a selfie hihi!", photosrc:'../src/assets/one.jpeg'},
  { id: 2, title: "The place where it all startedd 🕺🏻", date: "2022 Q1", content: "The first time when I realised how do butterflies in stomach feel like, a rush of emotions and overjoyed happiness", photosrc: "../src/assets/two.jpeg" },
  { id: 3, title: "Cycling dates", date: "2022 Q1", content: "Every evening with youu sitting before the sunset talking for hours", photosrc: "../src/assets/four.jpeg" },
  { id: 4, title: "home alone, 1st time hihihi", date: "2022 Q1", content: "The day when we met literally met three times, like three essential meals, ekdam a necessity ;)", photosrc: "../src/assets/three.jpeg"},
  { id: 5, title: "wohooo, half a year complete", date: "2022 Q3", content: "My first surprise visit to my cutuu", photosrc: "../src/assets/five.jpeg" },
  { id: 6, title: "The Jim to my Pam --Manuu", date: "2022 Q3", content: "One of our cutest pictures, my babyy in her cutuu tank top", photosrc: "../src/assets/between.jpg" },
  { id: 7, title: "Imrpromptu plan to bandstand", date: "2024 Q3", content: "Visit to her home, eventually leading us to leave for bandra cuz we didn't feel like going opposite ways ;)", photosrc: "../src/assets/seven.jpeg" },
  { id: 8, title: "Our first time to Marines", date: "2024 Q3", content: "A day filled with rollercoaster of emotions, cutuu by my sidee all dayy", photosrc: "../src/assets/eight.jpeg" },
  { id: 9, title: "Ganpati darshan together <3", date: "2024 Q3", content: "A sudden plan to come back from BBS for Ganesh Chaturthi and planning Ganpati darshan with my cutuupiee", photosrc: "../src/assets/nine.jpeg" },
  { id: 10, title: "Garba nightt with Saee", date: "2024 Q4", content: "When I just couldn't get my eyes off her, soo prettyy looking, devi sobat ach garba kela me hehehe" ,photosrc: "../src/assets/ten.jpeg" },
  { id: 11, title: "Visit to Mam's 2nd Fav place on earth", date: "2024 Q3", content: "Just soo soo proud of my girl for reaching here!!", photosrc: "../src/assets/eleven.jpeg" },
  { id: 12, title: "Jimmies burgerr, here we comee", date: "2025 Q3", content: "I lovee seeing her eating hehee", photosrc: "../src/assets/twelve.jpeg" },
  { id: 13, title: "Visit to Iskcon", date: "2025 Q4", content: "praying for everyone as well as for us <3", photosrc:"../src/assets/thirteen.jpeg" },
  { id: 14, title: "Our first moviee date yayy SSKTK", date: "2025 Q4", content: "Fun dayy at Korum mall, looking at her eating popcorn ;)", photosrc: "../src/assets/fourteen.jpeg" },
  { id: 15, title: "Visit to Central Park", date: "2025 Q4", content: "A special highlight cuz my bbg was looking so cutee in kurti and jhumke hehehe", photosrc: "../src/assets/fifteen.jpeg" },
  { id: 16, title: "Shidori, here I come again to watch my gurll dancee", date: "2025 Q4", content: "It was moreee than worth it to watch her rockk and rule the entire stage, woww sooo amazingg", photosrc: "../src/assets/sixteen.jpeg" },
];

// Helper component for the individual roadmap card (Note Container)
const NoteContainer = ({ point, isOdd }) => {
  const rotationClass = isOdd ? 'rotate-[-2deg]' : 'rotate-[2deg]';
  const colorClass = isOdd ? 'bg-pink-300/60 border-pink-500' : 'bg-fuchsia-300/60 border-fuchsia-500';

  return (
    <div className={`
      relative p-6 w-full max-w-sm 
      rounded-3xl shadow-2xl 
      backdrop-blur-md border-4 
      transform ${rotationClass} 
      ${colorClass}
      transition-all duration-300 hover:rotate-0 hover:scale-[1.05]
    `}>
      {/* Date Tag */}
      <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 px-3 py-1 bg-white border-2 border-pink-700 rounded-full shadow-lg text-sm font-semibold text-pink-700 whitespace-nowrap">
        {point.date}
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-pink-900 mb-2 border-b-2 border-pink-500/50 pb-1">
        {point.title}
      </h2>
      
      {/* Content */}
      <p className="text-base text-fuchsia-900 italic">
        {point.content}
      </p>
    </div>
  );
};

// Helper component for the Photo Placeholder
const PhotoPlaceholder = ({ isOdd, photosrc, point }) => { 
    // Use the opposite rotation of the corresponding Note Container
    const rotationClass = isOdd ? 'rotate-[3deg]' : 'rotate-[-3deg]';
    // Removed margin classes as parent handles positioning
  
    return (
      <div className={`
        relative p-2 w-full max-w-sm h-72 
        bg-white/80 border-4 border-dashed border-pink-600 rounded-lg shadow-xl 
        flex justify-center items-center text-center text-pink-700 italic
        transform ${rotationClass} 
        transition-all duration-300 hover:rotate-0 hover:scale-[1.05]
        text-sm font-semibold
        overflow-hidden`}>
        
        {/* CRITICAL FIX: Render <img> if photosrc exists, otherwise render fallback text */}
        {photosrc ? (
          <img 
            src={photosrc} 
            alt={`Memory from ${point.title} (${point.date})`} 
            className="w-full h-full object-cover rounded-sm" 
          />
        ) : (
          /* Fallback text for empty slots */
          <p className="p-4">
             [Photo Spot]
          </p>
        )}
  
        {/* Tape Effect (Purely decorative) */}
        <div className="absolute -top-2.5 w-12 h-4 bg-pink-700/60 transform -rotate-12 rounded-sm"></div>
      </div>
    );
  };


function DreamyFutureRoadmap() {
  return (
    // Outer container set to 100vh with soft background
    <div className="w-full min-h-screen bg-fuchsia-100 flex justify-center rounded-xl py-10 relative overflow-hidden">
      
      {/* Title (Placeholder font, replace font-romantic if needed) */}
      <h1 className="absolute top-10 text-6xl font-romantic text-pink-700 drop-shadow-md z-20">
        Our Journey Together
      </h1>

      {/* --- The Flowchart Line Container --- */}
      <div className="w-full max-w-5xl flex flex-col items-center relative pt-24 pb-16">
        
        {/* Vertical Flowchart Line (Simulated) */}
        <div className="absolute top-20 bottom-0 w-1 bg-pink-400/70 shadow-inner rounded-full z-10"></div>
        
        {/* Map through the dreamy points */}
        {FUTURE_POINTS.map((point, index) => {
          const isOdd = index % 2 !== 0;

          // Cute Roadmap Indicator (Heart on the center line)
          const heartMarker = (
             <div className="absolute left-1/2 transform -translate-x-1/2 text-5xl text-red-500 z-20 top-1/2 -translate-y-1/2">
                {/* FIX: Removed 'hidden md:block' so hearts are always visible */}
                <i className="fa-solid fa-heart animate-pulse"></i>
             </div>
          );

          // Component instances
          const Note = <NoteContainer point={point} isOdd={isOdd} />;
          const Photo = <PhotoPlaceholder isOdd={isOdd} photosrc={point.photosrc} point={point} />;

          return (
            <div 
              key={point.id} 
              className="relative w-full flex justify-center my-10 md:my-16"
            >
              
              {/* --- New Responsive Structure --- */}
              
              {/* 1. Left Slot / Mobile Stacking Wrapper */}
              <div className={`
                  w-full px-4 md:w-1/2 flex justify-end 
                  md:pr-8 lg:pr-10
                  ${isOdd ? 'md:order-2' : 'md:order-1'}
              `}>
                  
                  <div className="w-full flex md:justify-end justify-center">
                    <div className="w-full md:max-w-sm">
                      {isOdd ? Photo : Note}
                    </div>
                  </div>
              </div>

              {/* Heart Marker (Always centered on the line) */}
              {heartMarker}

              {/* 2. Right Slot / Mobile Stacking Wrapper */}
              <div className={`
                  w-full px-4 md:w-1/2 flex justify-start 
                  md:pl-8 lg:pl-10
                  ${isOdd ? 'md:order-1' : 'md:order-2'}
              `}>
                  
                  <div className="w-full flex md:justify-start justify-center">
                    <div className="w-full md:max-w-sm">
                      {isOdd ? Note : Photo}
                    </div>
                  </div>
              </div>
              
            </div>
          );
        })}

        {/* Final End Marker */}
        <div className="mt-10 p-5 bg-pink-600 rounded-full text-white text-xl font-bold shadow-xl z-20">
          ...And Many More Adventures!
        </div>
        
      </div>
    </div>
  );
}

export default DreamyFutureRoadmap;