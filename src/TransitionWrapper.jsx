// TransitionWrapper.jsx (Final Corrected Version)

import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';

const TRANSITION_DELAY_MS = 1500; 
const TRANSITION_DURATION_MS = 500; 

function TransitionWrapper({ children, targetRoute, trigger }) {
  const [isNavigating, setIsNavigating] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [showLoaderOverlay, setShowLoaderOverlay] = useState(false);
  
  // Use a ref to track if the 'trigger' has ever been true
  const hasBeenTriggeredRef = useRef(false); 
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Check if the transition has been triggered externally
    if (trigger && !hasBeenTriggeredRef.current) {
      hasBeenTriggeredRef.current = true;
      setIsNavigating(true);
      
      // Step 1: Start the fade-out of the current content
      setIsFadingOut(true); 
      
      // Step 2: After fade-out duration, show the static loader overlay
      const loaderStartTimer = setTimeout(() => {
        setShowLoaderOverlay(true);
      }, TRANSITION_DURATION_MS); 

      // Step 3: Navigate after the total delay
      const navigationTimer = setTimeout(() => {
        if (targetRoute) {
          navigate(targetRoute);
        }
      }, TRANSITION_DURATION_MS + TRANSITION_DELAY_MS); 

      return () => {
        clearTimeout(loaderStartTimer);
        clearTimeout(navigationTimer);
      };
    }
  }, [trigger, targetRoute, navigate]);
  
  // Render the persistent Loader over everything else during the navigation process
  const LoaderOverlay = showLoaderOverlay && (
      <div className="fixed inset-0 z-9999">
        <Loader />
      </div>
  );
  
  return (
    <>
      {/* 1. The Children (App.jsx content) is visible and only fades out when isFadingOut is true */}
      <div
        className={`
          transition-opacity ease-in-out duration-500
          ${isFadingOut ? 'opacity-0' : 'opacity-100'}
          w-full h-full
        `}
        style={{
          transitionDuration: `${TRANSITION_DURATION_MS}ms`,
        }}
      >
        {children}
      </div>
      
      {/* 2. The Loader appears on top of the fading content before navigation */}
      {LoaderOverlay}
    </>
  );
}

export default TransitionWrapper;