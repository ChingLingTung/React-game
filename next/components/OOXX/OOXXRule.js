import React from 'react'

export default function OOXXRule() {

  return (
    <div>Rule</div>
  )
}

export function calculateWinner(squares){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++){
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }
  return null;
}

const squares = [
  null, null, null,
  'x', 'x', 'o',
  null, null, null
];

console.log(calculateWinner(squares));