import React from 'react';

function EndGameModal(props) {
  if (props.hidden === true) {
    return (
      <div className="hidden-modal">
        <p onClick={props.hideModal} className="show">show<i className="fas fa-chevron-up ml-2"></i></p>
      </div>
    );
  } else {
    return (
      <div className="end-game-modal">
        <div className="end-game-modal-content bg-dark">
          <p onClick={props.hideModal} className="hide">hide<i className="fas fa-chevron-down ml-2"></i></p>
          <h1 className="mt-3 text-center">GAME OVER</h1>
          <h3 className="mt-1 text-center">{props.gameStatus}</h3>
          <button className="btn btn-success mt-3" onClick={() => props.setGameStatus(false, '', 'empty', false)}>Play Again?</button>
        </div>
      </div>
    );
  }
}

export default EndGameModal;
