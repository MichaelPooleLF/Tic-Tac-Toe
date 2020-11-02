import React from 'react';

function EndGameModal(props) {
  return (
    <div className="end-game-modal">
      <div className="end-game-modal-content bg-dark">
        <h1 className="mt-3 text-center">GAME OVER</h1>
        <h3 className="mt-1 text-center">{props.gameStatus}</h3>
        <button className="btn btn-success mt-3" onClick={() => props.setGameStatus(false, '')}>Play Again?</button>
      </div>
    </div>
  );
}

export default EndGameModal;
