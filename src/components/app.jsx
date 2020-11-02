import React from 'react';
import Board from './board';
import EndGameModal from './end-game-modal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameOver: true,
      gameStatus: '',
      board: 'empty'
    };
    this.setGameStatus = this.setGameStatus.bind(this);
  }

  setGameStatus(gameOver, gameStatus, board) {
    this.setState({
      gameOver, gameStatus, board
    });
  }

  render() {
    if (this.state.gameOver) {
      return (
        <>
          <EndGameModal gameStatus={this.state.gameStatus} setGameStatus={this.setGameStatus}/>
          <Board board={this.state.board}/>
        </>
      );
    }
    return (
      <Board board={this.state.board} setGameStatus={this.setGameStatus}/>
    );
  }
}

export default App;
