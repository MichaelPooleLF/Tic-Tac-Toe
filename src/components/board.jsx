import React from 'react';
import BoardRow from './board-row';

function Board(props) {
  return (
    <>
      <h1 className="text-center">Tic Tac Toe Board</h1>
      <BoardRow/>
    </>
  );
}

export default Board;
