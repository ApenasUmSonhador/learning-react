import {useState } from 'react';
function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  function onSquareClick(i) {
    if (squares[i]) {
      return;
    }
    const squaresCopy = squares;
    squaresCopy[i] = xIsNext ? 'X' : 'O';
    setSquares(squaresCopy);
    setXIsNext(!xIsNext);
    calculateWinner(squares);
  }

  function calculateWinner(squares) {
    const victoryLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < victoryLines.length; i++) {
      const [a, b, c] = victoryLines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        alert(`Player ${squares[a]} wins!`);
        return squares[a];
      }
    }
    return null;
  }

  return <>
  <div className="board-row">
    <Square value={squares[0]} onSquareClick={() => onSquareClick(0)}/>
    <Square value={squares[1]} onSquareClick={() => onSquareClick(1)}/>
    <Square value={squares[2]} onSquareClick={() => onSquareClick(2)}/>
  </div>    
  <div className="board-row">
    <Square value={squares[3]} onSquareClick={() => onSquareClick(3)}/>
    <Square value={squares[4]} onSquareClick={() => onSquareClick(4)}/>
    <Square value={squares[5]} onSquareClick={() => onSquareClick(5)}/>
  </div>  
  <div className="board-row">
    <Square value={squares[6]} onSquareClick={() => onSquareClick(6)}/>
    <Square value={squares[7]} onSquareClick={() => onSquareClick(7)}/>
    <Square value={squares[8]} onSquareClick={() => onSquareClick(8)}/>
  </div>  
  </>;
}
