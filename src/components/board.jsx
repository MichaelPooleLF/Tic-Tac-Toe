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
    const valuesInRows = this.state.rows.slice();
    const valuesInCols = this.state.columns.slice();
    const valuesInDiags = this.state.diagonals.slice();
    const rowsChecked = this.state.checked.row.slice();
    const colsChecked = this.state.checked.column.slice();
    const diagsChecked = this.state.checked.diagonal.slice()
    ;
    if (this.state.moveCounter > 4) {
      if (valuesInRows.indexOf(3) !== -1) {
        rowsChecked.forEach((checked, index) => {
          if (this.state.rows[index] === 3 && !checked) {
            console.log('check row');
            rowsChecked[index] = true;
          }
        });
      }
      if (valuesInCols.indexOf(3) !== -1) {
        colsChecked.forEach((checked, index) => {
          if (this.state.columns[index] === 3 && !checked) {
            console.log('check col');
            colsChecked[index] = true;
          }
        });
      }
      if (valuesInDiags.indexOf(3) !== -1) {
        diagsChecked.forEach((checked, index) => {
          if (this.state.diagonals[index] === 3 && !checked) {
            console.log('check diag');
            diagsChecked[index] = true;
          }
        });
      }
      this.setState({
        checked: {
          row: rowsChecked,
          column: colsChecked,
          diagonal: diagsChecked
        }
      });
    }
  }

  incrementRow(row) {
    const rowIncrement = this.state.rows.slice();
    rowIncrement[row]++;
    return rowIncrement;
  }

  incrementColumn(col) {
    const columnIncrement = this.state.columns.slice();
    columnIncrement[col]++;
    return columnIncrement;
  }

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

  setBoard(row, col, value) {
    const updatedBoard = this.state.currentBoard.slice();
    const updateFilled = this.state.filledPositions.slice();

    updatedBoard[row][col] = value;
    updateFilled[row][col] = true;
    const updatedRowCount = this.incrementRow(row);
    const updatedColumnCount = this.incrementColumn(col);
    let updatedDiagonalCount = this.state.diagonals.slice();
    if ((row !== 1 && col !== 1) || (row === 1 && col === 1)) {
      updatedDiagonalCount = this.incrementDiagonal(row, col, updatedDiagonalCount);
    }
    this.setState({
      currentBoard: updatedBoard,
      filledPositions: updateFilled,
      isX: !this.state.isX,
      moveCounter: this.state.moveCounter + 1,
      rows: updatedRowCount,
      columns: updatedColumnCount,
      diagonals: updatedDiagonalCount
    }, this.checkGameOver);
  }

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
          <BoardRow position="top" values={this.state.currentBoard[0]} filledCells={this.state.filledPositions[0]} handleClick={this.handleClick}/>
          <BoardRow position="center" values={this.state.currentBoard[1]} filledCells={this.state.filledPositions[1]} handleClick={this.handleClick}/>
          <BoardRow position="bottom" values={this.state.currentBoard[2]} filledCells={this.state.filledPositions[2]} handleClick={this.handleClick}/>
        </div>
      </>
    );
  }
}

export default Board;
