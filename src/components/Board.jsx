import React, { useState } from 'react';
import Square from './Square';

const Board = () => {

  const [board, setBoard] = useState(Array(9).fill(null))
  const [isXNext,setIsXNext] = useState(false)
 const handleSquarClick = (position) => {

  setBoard((prev)=>{
   return prev.map((square,pos)=>{
     console.log( "POSition" ,position)
     console.log(pos)
if(pos == position){
  return isXNext ?  "X" : 'O';
}
console.log(prev)

return square;
   })
  });
  setIsXNext((prev) => !prev)
 }

 const renderSquare = (position) => {
   return <Square  value={board[position]} onClick={()=>{
     handleSquarClick(position)
   }}/>
 }
 
  return (
    <div className='board'>
      <div className='board-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='board-row'>
      {renderSquare(3)}
      {renderSquare(4)}
      {renderSquare(5)}
      </div>
      <div className='board-row'>
      {renderSquare(6)}
      {renderSquare(7)}
      {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
