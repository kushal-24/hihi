import React, { useState, useEffect, useCallback, useRef } from 'react';

// --- GAME CONFIGURATION (Keep pixel values for internal logic) ---
const GAME_WIDTH = 400; 
const GAME_HEIGHT = 400; 
const BEAR_SIZE = 50; 
const HEART_SIZE = 30; 
const HEART_SPEED = 3; 
const GAME_LOOP_INTERVAL = 20; 
const BEAR_VELOCITY = 10; 

// Custom component for the Teddy Bear (unchanged)
const Bear = ({ positionX, isAnimating }) => (
  <div
    className={`
      absolute bottom-2 bg-yellow-600 rounded-full shadow-lg flex justify-center items-center text-white text-xl
      transition-transform duration-100 ease-out
      ${isAnimating ? 'scale-125' : 'scale-100'} 
    `}
    style={{
      left: `${positionX}px`,
      width: `${BEAR_SIZE}px`,
      height: `${BEAR_SIZE}px`,
      fontSize: '2rem',
      lineHeight: '1',
    }}
  >
    🐻
  </div>
);

// Custom component for the Falling Heart (unchanged)
const Heart = ({ heart }) => (
  <div
    className="absolute text-pink-500"
    style={{
      left: `${heart.x}px`,
      top: `${heart.y}px`,
      fontSize: '2rem',
      width: `${HEART_SIZE}px`,
      height: `${HEART_SIZE}px`,
      textAlign: 'center',
    }}
  >
    💖
  </div>
);

function HeartCatcherGame() {
  const [bearX, setBearX] = useState(GAME_WIDTH / 2 - BEAR_SIZE / 2);
  const [hearts, setHearts] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isCatching, setIsCatching] = useState(false);
  const [isGameRunning, setIsGameRunning] = useState(false);
  
  const movementRef = useRef(0); 

  const toggleGameRun = () => {
    if (gameOver) {
      setScore(0);
      setHearts([]);
      setGameOver(false);
      setBearX(GAME_WIDTH / 2 - BEAR_SIZE / 2);
    }
    setIsGameRunning(prev => !prev);
  };

  // --- GAME LOOP (Internal logic remains based on fixed pixel values) ---
  useEffect(() => {
    if (gameOver || !isGameRunning) return; 

    const gameLoop = setInterval(() => {
      let newHearts = hearts.map(h => ({ ...h, y: h.y + HEART_SPEED }));
      let caughtHearts = [];
      let currentScore = score;
      let caught = false; 

      // 1. Bear Movement Update 
      setBearX(prevX => {
        const nextX = prevX + movementRef.current * BEAR_VELOCITY;
        return Math.max(0, Math.min(GAME_WIDTH - BEAR_SIZE, nextX));
      });

      // 2. Collision Check
      newHearts.forEach(heart => {
        const isCaught =
          heart.y + HEART_SIZE >= GAME_HEIGHT - BEAR_SIZE && 
          heart.x + HEART_SIZE > bearX && 
          heart.x < bearX + BEAR_SIZE; 

        if (isCaught) {
          caughtHearts.push(heart.id);
          currentScore += 1;
          caught = true;
        }
      });
      
      // 3. Animation Trigger
      if (caught) {
          setIsCatching(true);
          setTimeout(() => setIsCatching(false), 150); 
      }

      // 4. State Updates
      newHearts = newHearts.filter(h => !caughtHearts.includes(h.id) && h.y < GAME_HEIGHT);
      setHearts(newHearts);
      setScore(currentScore);
    }, GAME_LOOP_INTERVAL);

    return () => clearInterval(gameLoop);
  }, [hearts, bearX, score, gameOver, isGameRunning]);


  // --- HEART SPAWNING (unchanged) ---
  useEffect(() => {
    if (gameOver || !isGameRunning) return; 

    const spawnInterval = 1000;
    const spawner = setInterval(() => {
      const newHeart = {
        id: Date.now() + Math.random(),
        x: Math.random() * (GAME_WIDTH - HEART_SIZE),
        y: -HEART_SIZE,
      };
      setHearts(prevHearts => [...prevHearts, newHeart]);
    }, spawnInterval);

    return () => clearInterval(spawner);
  }, [gameOver, isGameRunning]);


  // --- INPUT HANDLING (unchanged) ---
  const handleKeyDown = useCallback((e) => {
    if (gameOver || !isGameRunning) return; 
    if (e.key === 'ArrowLeft') {
      movementRef.current = -1;
    } else if (e.key === 'ArrowRight') {
      movementRef.current = 1;
    }
  }, [gameOver, isGameRunning]);

  const handleKeyUp = useCallback((e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      movementRef.current = 0;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyUp);
      window.removeEventListener('keyup', handleKeyDown); 
    };
  }, [handleKeyDown, handleKeyUp]);
  
  // --- TOUCH/BUTTON HANDLERS (unchanged) ---
  const handleTouchStart = (direction) => {
    if (!gameOver && isGameRunning) {
      movementRef.current = direction;
    }
  };

  const handleTouchEnd = () => {
    movementRef.current = 0;
  };


  // --- RENDER (Responsive changes applied here) ---
  return (
    <div className="flex flex-col items-center p-4 w-full"> {/* w-full ensures it takes available width */}
      
      <div className="text-2xl font-bold mb-4 text-pink-600 flex justify-between w-full" style={{ maxWidth: `${GAME_WIDTH}px` }}>
        <span>Score: {score}</span>
        
        {/* START/PAUSE BUTTON */}
        <button 
          onClick={toggleGameRun}
          className={`
            px-3 py-1 text-sm rounded transition-colors
            ${isGameRunning ? 'bg-red-400 hover:bg-red-500' : 'bg-green-400 hover:bg-green-500'}
            text-white font-semibold
          `}
          disabled={gameOver && !isGameRunning} 
        >
          {gameOver ? 'Play Again' : isGameRunning ? 'Pause' : 'Start'}
        </button>
      </div>
      
      {/* Game Board: Set max-width and use w-full to be responsive */}
      <div
        className="relative bg-fuchsia-100 border-4 border-pink-700 overflow-hidden shadow-2xl w-full"
        style={{ 
            maxWidth: `${GAME_WIDTH}px`, // Max width prevents it from getting too big on desktop
            height: `${GAME_HEIGHT}px` // Height remains fixed based on internal logic 
        }}
      >
        {hearts.map(heart => (
          <Heart key={heart.id} heart={heart} />
        ))}
        <Bear positionX={bearX} isAnimating={isCatching} />

        {/* Game Over Overlay */}
        {gameOver && (
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-3xl font-bold">
            GAME OVER!
          </div>
        )}
      </div>
      
      {/* Instructions: Use responsive visibility */}
      <p className="mt-4 text-gray-600 hidden sm:block">Use the Left and Right Arrow keys to move the Teddy Bear.</p>
      <p className="mt-4 text-gray-600 sm:hidden">Use the buttons below to move the Teddy Bear.</p>
      
      {/* --- MOBILE CONTROLS: Use w-full and max-width to center and size controls --- */}
      <div className="mt-4 flex justify-between w-full px-4" style={{ maxWidth: `${GAME_WIDTH}px` }}>
        {/* Left Button */}
        <button 
          className="px-4 py-3 cursor-pointer bg-pink-500 text-white rounded-lg shadow-lg text-2xl font-extrabold active:bg-pink-700 select-none"
          onTouchStart={() => handleTouchStart(-1)}
          onTouchEnd={handleTouchEnd}
          onMouseDown={() => handleTouchStart(-1)}
          onMouseUp={handleTouchEnd}
          onMouseLeave={handleTouchEnd}
          disabled={gameOver || !isGameRunning} 
        >
          ◀️
        </button>

        {/* Right Button */}
        <button 
          className="px-3 cursor-pointer py-3 bg-pink-500 text-white rounded-lg shadow-lg text-2xl font-extrabold active:bg-pink-700 select-none"
          onTouchStart={() => handleTouchStart(1)}
          onTouchEnd={handleTouchEnd}
          onMouseDown={() => handleTouchStart(1)}
          onMouseUp={handleTouchEnd}
          onMouseLeave={handleTouchEnd}
          disabled={gameOver || !isGameRunning} 
        >
          ▶️
        </button>
      </div>
    </div>
  );
}

export default HeartCatcherGame;