import React from 'react';
import Board from './board';
import EndGameModal from './end-game-modal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameOver: true,
      gameStatus: ''
    };
  }

  render() {
    if (this.state.gameOver) {
      return (
        <>
          <EndGameModal/>
          <Board/>
        </>
      );
    }
    return (
      <Board/>
    );
  }
}

export default App;
