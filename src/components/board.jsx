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
      isX: true,
      moveCounter: 0,
      rows: [0, 0, 0],
      columns: [0, 0, 0],
      diagonals: [0, 0],
      checked: {
        row: [false, false, false],
        column: [false, false, false],
        diagonal: [false, false]
      }
    };
    this.handleClick = this.handleClick.bind(this);
    this.setBoard = this.setBoard.bind(this);
  }

  checkGameOver() {
    const currentBoard = this.state.currentBoard;
    const valuesInRows = this.state.rows.slice();
    const valuesInCols = this.state.columns.slice();
    const valuesInDiags = this.state.diagonals.slice();
    const rowsChecked = this.state.checked.row.slice();
    const colsChecked = this.state.checked.column.slice();
    const diagsChecked = this.state.checked.diagonal.slice();
    let winner = '';

    if (this.state.moveCounter > 4) {

      // check if game won by row and sets winner
      if (valuesInRows.indexOf(3) !== -1) {
        rowsChecked.forEach((checked, index) => {
          if (this.state.rows[index] === 3 && !checked) {
            const uniqueValues = new Set();
            rowsChecked[index] = true;
            currentBoard[index].forEach(value => {
              uniqueValues.add(value);
            });
            if (uniqueValues.size === 1) {
              winner = currentBoard[index][0];
            }
          }
        });
      }

      // check if game won by column and sets winner
      if (valuesInCols.indexOf(3) !== -1) {
        colsChecked.forEach((checked, index) => {
          if (this.state.columns[index] === 3 && !checked) {
            colsChecked[index] = true;
            const uniqueValues = new Set();
            currentBoard.forEach(row => {
              uniqueValues.add(row[index]);
            });
            if (uniqueValues.size === 1) {
              winner = currentBoard[0][index];
            }
          }
        });
      }

      // check if game won by diagonal and sets winner
      if (valuesInDiags.indexOf(3) !== -1) {
        diagsChecked.forEach((checked, index) => {
          if (this.state.diagonals[index] === 3 && !checked) {
            diagsChecked[index] = true;
            const uniqueValues = new Set();
            if (index === 0) {
              uniqueValues.add(currentBoard[0][0]).add(currentBoard[1][1]).add(currentBoard[2][2]);
            } else {
              uniqueValues.add(currentBoard[0][2]).add(currentBoard[1][1]).add(currentBoard[2][0]);
            }
            if (uniqueValues.size === 1) {
              winner = currentBoard[1][1];
            }
          }
        });
      }

      // checks if there is a winner. If there is, sets state in app.
      if (this.state.moveCounter === 9 && !winner) {
        this.props.setGameStatus(true, "Cat's Game!");
      } else if (!winner) {
        this.setState({
          checked: {
            row: rowsChecked,
            column: colsChecked,
            diagonal: diagsChecked
          }
        });
      } else {
        if (winner === 'x') {
          this.props.setGameStatus(true, 'Player One Wins!');
        } else {
          this.props.setGameStatus(true, 'Player Two Wins!');
        }
      }
    }
  }

  // notes number of values in each row on the board
  incrementRow(row) {
    const rowIncrement = this.state.rows.slice();
    rowIncrement[row]++;
    return rowIncrement;
  }

  // notes number of values in each column on the board
  incrementColumn(col) {
    const columnIncrement = this.state.columns.slice();
    columnIncrement[col]++;
    return columnIncrement;
  }

  // notes number of values in each diagonal on the board
  incrementDiagonal(row, col, diagArray) {
    const diagonalIncrement = diagArray;
    if (row === col && row !== 1) {
      diagArray[0]++;
    } else if (row !== col && row !== 1) {
      diagArray[1]++;
    } else {
      diagArray[0]++;
      diagArray[1]++;
    }
    return diagonalIncrement;
  }

  // updates board in state with either "x" or "o" denoted by "value" at the
  // row and column given as an argument.
  setBoard(row, col, value) {
    const updatedBoard = this.state.currentBoard.slice();
    const updatedRowCount = this.incrementRow(row);
    const updatedColumnCount = this.incrementColumn(col);
    let updatedDiagonalCount = this.state.diagonals.slice();

    updatedBoard[row][col] = value;
    if ((row !== 1 && col !== 1) || (row === 1 && col === 1)) {
      updatedDiagonalCount = this.incrementDiagonal(row, col, updatedDiagonalCount);
    }

    this.setState({
      currentBoard: updatedBoard,
      isX: !this.state.isX,
      moveCounter: this.state.moveCounter + 1,
      rows: updatedRowCount,
      columns: updatedColumnCount,
      diagonals: updatedDiagonalCount
    }, this.checkGameOver);
  }

  // updates board with current move by player
  handleClick(event) {
    let currentMove = '';
    currentMove = this.state.isX ? 'x' : 'o';
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
