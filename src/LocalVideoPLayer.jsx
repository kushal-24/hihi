import React from 'react';
// 1. Import the video file. The bundler processes this and gives you the URL.
import localVideoSource from './assets/special.mp4'; 

function LocalVideoPlayer() {
  return (
    <div className="flex flex-col items-center justify-center p-2 bg-fuchsia-100 md:p-2 rounded-xl shadow-xl">
      <h3 className="text-2xl font-bold mb-4 text-pink-700">A cutuu sa video which youu have already seen but still 😅</h3>
      
      {/* 2. Use the HTML <video> tag */}
      <video 
        width="100%" 
        height="auto"
        controls // Shows browser native controls (play/pause, volume, timeline)
        autoPlay // Optional: starts playing immediately (may be blocked by browsers)
        loop     // Optional: loops the video when finished
        muted    // Recommended if using autoPlay, to avoid browser blocking
        className="max-w-xl rounded-lg border-4 border-pink-500 shadow-md"
      >
        {/* Set the source using the imported video variable */}
        <source src={localVideoSource} type="video/mp4" />
        
        {/* Fallback text if the browser doesn't support the video format */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default LocalVideoPlayer;