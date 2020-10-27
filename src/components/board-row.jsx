import React from 'react';
import Cell from './cell';

function BoardRow(props) {
  if (props.position === 'center') {
    return (
      <div className="row board-row">
        <Cell border="b-top b-bottom"/>
        <Cell border="my-border" />
        <Cell border="b-top b-bottom" />
      </div>
    );
  } else {
    return (
      <div className="row board-row">
        <Cell border="" />
        <Cell border="b-left b-right" />
        <Cell border="" />
      </div>
    );
  }
}

export default BoardRow;
