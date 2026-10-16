// import React from 'react'
import React, { useState, useEffect } from 'react';

function game(){
    const imgs= [
        {id:1,image:'🍎'},
        {id:2,image:'🍌'},
        {id:3,image:'🍓'},
        {id:4,image:'🥑'}
        ];
    const [img,setimg]=useState(imgs)
    return(
        <div>
            <h1>4-card match</h1>
            <p>match:🍎</p>
            <div>
                <p>Click "Start Game" to begin!</p>
                <div>        
                    <button>?</button>
                    <button>?</button>
                    <button>?</button>
                    <button>?</button>
                </div>
            </div>
            <button>start match</button>
        </div>
    )
}
    
export default game



























    //     const [cards, setCards] = useState([]);
    //     const [selectedCards, setSelectedCards] = useState([]);
    //     const [matchedIds, setMatchedIds] = useState([]);
    //     const [moves, setMoves] = useState(0);
    //     const initializeGame = () => {
    //         const doubleImages = [...CARD_IMAGES, ...CARD_IMAGES];
    //         const shuffled = doubleImages
    //         .map((img, index) => ({ id: index, img, isFlipped: false }))
    //         .sort(() => Math.random() - 0.5);
            
    //         setCards(shuffled);
    //         setSelectedCards([]);
    //         setMatchedIds([]);
    //         setMoves(0);
    //     };
        
    //     useEffect(() => {
    //     initializeGame();
    //   }, []);
    //   const handleCardClick = (id) => {
    //       if (selectedCards.length === 2 || selectedCards.includes(id) || matchedIds.includes(id)) {
    //           return;
    //         }
    //         const newSelection = [...selectedCards, id];
    //         setSelectedCards(newSelection);
    //         if (newSelection.length === 2) {
    //             setMoves(prev => prev + 1);
    //             const [firstId, secondId] = newSelection;
          
    //             if (cards[firstId].img === cards[secondId].img) {
    //                 setMatchedIds(prev => [...prev, firstId, secondId]);
    //                 setSelectedCards([]);
    //                 setTimeout(() => {
    //                     setSelectedCards([]);
    //                 }, 1000);
    //             }
    //     }
    //   };
    
    //   const isGameWon = matchedIds.length === cards.length && cards.length > 0;
      
    //   return (
    //       <div >
    //       <div>
    //         <h1>4-Card Match</h1>
    //         <p >Moves: {moves}</p>
    //         <div>
    //           {cards.map((card, index) => {
    //             const isFlipped = selectedCards.includes(index) || matchedIds.includes(index);
                
    //             return (
    //                 <button
    //                 key={card.id}
    //                 onClick={() => handleCardClick(index)}
    //                 className={`h-24 w-24 flex items-center justify-center text-4xl rounded-xl transition-all duration-300 transform active:scale-95 shadow-md font-bold focus:outline-none
    //                   ${isFlipped 
    //                     ? 'bg-blue-500 text-white rotate-0' 
    //                     : 'bg-indigo-600 text-transparent hover:bg-indigo-700'
    //                 }`}
    //                 >
    //                 {isFlipped ? card.img : '?'}
    //               </button>
    //             );
    //         })}
    //         </div>
    //         {isGameWon ? (
    //             <div className="mb-4">
    //             <p className="text-green-600 font-bold text-lg mb-2">🎉 You matched them all!</p>
    //             <button
    //               onClick={initializeGame}
    //               className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition shadow"
    //               >
    //               Play Again
    //             </button>
    //           </div>
    //         ) : (
    //             <button
    //             onClick={initializeGame}
    //             className="text-indigo-600 hover:text-indigo-800 font-medium text-sm underline underline-offset-4"
    //             >
    //             Reset Board
    //           </button>
    //         )}
    //       </div>
    //     </div>
    //   );
    // }