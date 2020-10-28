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
      filledPositions: [
        [false, false, false],
        [false, false, false],
        [false, false, false]
      ],
      isX: true
    };
    this.handleClick = this.handleClick.bind(this);
    this.setBoard = this.setBoard.bind(this);
  }

  setBoard(row, col, value) {
    console.log('click');
    const updatedBoard = this.state.currentBoard.slice();
    const updateFilled = this.state.filledPositions.slice();
    updatedBoard[row][col] = value;
    updateFilled[row][col] = true;
    this.setState({
      currentBoard: updatedBoard,
      filledPositions: updateFilled,
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
          <BoardRow position="top" values={this.state.currentBoard[0]} filledCells={this.state.filledPositions[0]} handleClick={this.handleClick}/>
          <BoardRow position="center" values={this.state.currentBoard[1]} filledCells={this.state.filledPositions[1]} handleClick={this.handleClick}/>
          <BoardRow position="bottom" values={this.state.currentBoard[2]} filledCells={this.state.filledPositions[2]} handleClick={this.handleClick}/>
        </div>
      </>
    );
  }
}

export default Board;
