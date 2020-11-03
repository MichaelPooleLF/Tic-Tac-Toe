import React from 'react';
import Board from './board';
import EndGameModal from './end-game-modal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameOver: false,
      gameStatus: '',
      board: 'empty',
      hidden: false
    };
    this.setGameStatus = this.setGameStatus.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  hideModal() {
    this.setState({
      hidden: !this.state.hidden
    });
  }

  setGameStatus(gameOver, gameStatus, board, hidden) {
    this.setState({
      gameOver, gameStatus, board, hidden
    });
  }

  render() {
    if (this.state.gameOver) {
      return (
        <>
          <Board board={this.state.board}/>
          <EndGameModal gameStatus={this.state.gameStatus}
            setGameStatus={this.setGameStatus}
            hidden={this.state.hidden}
            hideModal={this.hideModal}/>
        </>
      );
    } else {
      return (
        <Board board={this.state.board}
          gameOver={this.state.gameOver}
          setGameStatus={this.setGameStatus}/>
      );
    }
  }
}

export default App;
