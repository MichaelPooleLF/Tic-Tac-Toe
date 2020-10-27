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
  }

  handleClick(event) {
    console.log('click');
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
