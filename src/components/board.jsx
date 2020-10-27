import React from 'react';
import BoardRow from './board-row';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBoard: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ],
      isX: true
    };
    this.handleClick = this.handleClick.bind(this);
    this.setBoard = this.setBoard.bind(this);
  }

  setBoard(row, col, value) {
    const updatedBoard = this.state.currentBoard.slice();
    updatedBoard[row][col] = value;
    this.setState({
      currentBoard: updatedBoard,
      isX: !this.state.isX
    });
  }

  handleClick(event) {
    let currentMove = '';
    this.state.isX ? currentMove = <i className="fas fa-times x"></i> : currentMove = <i className="far fa-circle o"></i>;
    switch (event.target.id) {
      case 'top-left':
        this.setBoard(0, 0, currentMove);
        break;
      case 'top-center':
        this.setBoard(0, 1, currentMove);
        break;
      case 'top-right':
        this.setBoard(0, 2, currentMove);
        break;
      case 'center-left':
        this.setBoard(1, 0, currentMove);
        break;
      case 'center':
        this.setBoard(1, 1, currentMove);
        break;
      case 'center-right':
        this.setBoard(1, 2, currentMove);
        break;
      case 'bottom-left':
        this.setBoard(2, 0, currentMove);
        break;
      case 'bottom-center':
        this.setBoard(2, 1, currentMove);
        break;
      case 'bottom-right':
        this.setBoard(2, 2, currentMove);
        break;
    }
  }

  render() {
    return (
      <>
        <h1 className="text-center text-white">TIC TAC TOE</h1>
        <div className="container">
          <BoardRow position="top" values={this.state.currentBoard[0]} handleClick={this.handleClick}/>
          <BoardRow position="center" values={this.state.currentBoard[1]} handleClick={this.handleClick}/>
          <BoardRow position="bottom" values={this.state.currentBoard[2]} handleClick={this.handleClick}/>
        </div>
      </>
    );
  }
}

export default Board;
