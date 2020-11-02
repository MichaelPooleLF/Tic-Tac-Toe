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
    this.setGameStatus = this.setGameStatus.bind(this);
  }

  setGameStatus(gameOver, gameStatus) {
    this.setState({
      gameOver, gameStatus
    });
  }

  render() {
    if (this.state.gameOver) {
      return (
        <>
          <EndGameModal gameStatus={this.state.gameStatus} setGameStatus={this.setGameStatus}/>
          <Board/>
        </>
      );
    }
    return (
      <Board setGameStatus={this.setGameStatus}/>
    );
  }
}

export default App;
