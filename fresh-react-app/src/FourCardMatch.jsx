
// import React, { useState } from 'react';

// const FRUIT_POOL = ['🍎', '🍌', '🍇', '🍊', '🍓', '🍍', '🍉'];

// function FourCardMatch() {
//   const [gameState, setGameState] = useState('idle');
//   const [cards, setCards] = useState(['?', '?', '?', '?']);
//   const [hiddenFruits, setHiddenFruits] = useState([]);
//   const [message, setMessage] = useState('Click "Start Game" to begin!');

//   const startNewGame = () => {
//     const newFruits = ['🍎'];
//     while (newFruits.length < 4) {
//       const randomFruit = FRUIT_POOL[Math.floor(Math.random() * FRUIT_POOL.length)];
//       if (!newFruits.includes(randomFruit)) {
//         newFruits.push(randomFruit);
//       }
//     }
//     const shuffledFruits = newFruits.sort(() => Math.random() - 0.5);

//     setHiddenFruits(shuffledFruits);
//     setCards(['?', '?', '?', '?']);
//     setGameState('playing');
//     setMessage('Find the hidden apple 🍎!');
//   };

//   const handleCardClick = (index) => {
//     if (gameState !== 'playing') return;
//     const updatedCards = [...cards];
//     updatedCards[index] = hiddenFruits[index];
//     setCards(updatedCards);
//     if (hiddenFruits[index] === '🍎') {
//       setGameState('won');
//       setMessage('🎉 Correct! You found the apple!');
//     } else {
//       setGameState('lost');
//       setMessage('❌ Wrong fruit! Game over.');
//       setCards(hiddenFruits);
//     }
//   };

//   return (
//     <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4 border border-gray-100">
//       <h1 className="text-3xl font-bold tracking-tight text-gray-900">4-card match</h1>
      
//       <div className="text-lg font-medium text-gray-700">
//         match: <span className="inline-block text-xl">🍎</span>
//       </div>

//       <p className={`text-base font-semibold ${gameState === 'won' ? 'text-green-600' : gameState === 'lost' ? 'text-red-500' : 'text-gray-600'}`}>
//         {message}
//       </p>
//       <div className="flex gap-3 my-4">
//         {cards.map((cardContent, index) => (
//           <button
//             key={index}
//             onClick={() => handleCardClick(index)}
//             disabled={gameState !== 'playing'}
//             className={`w-14 h-14 border text-2xl font-bold flex items-center justify-center rounded-lg transition-all
//               ${gameState === 'playing' ? 'hover:bg-blue-50 border-blue-400 bg-white cursor-pointer active:scale-95' : 'bg-gray-100 border-gray-300'}
//             `}
//           >
//             {cardContent}
//           </button>
//         ))}
//       </div>
//       <button
//         onClick={startNewGame}
//         className="px-4 py-2 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 transition-colors shadow-sm active:scale-95"
//       >
//         {gameState === 'idle' ? 'start match' : 'play again'}
//       </button>
//     </div>
//   );
// }


// export default FourCardMatch