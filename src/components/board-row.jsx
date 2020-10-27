import React from 'react';
import Cell from './cell';

function BoardRow(props) {
  if (props.position === 'center') {
    return (
      <div className="row board-row">
        <Cell border="b-top b-bottom" value={props.values[0]} handleClick={props.handleClick}/>
        <Cell border="my-border" value={props.values[1]} handleClick={props.handleClick}/>
        <Cell border="b-top b-bottom" value={props.values[2]} handleClick={props.handleClick}/>
      </div>
    );
  } else {
    return (
      <div className="row board-row">
        <Cell border="" value={props.values[0]} handleClick={props.handleClick}/>
        <Cell border="b-left b-right" value={props.values[1]} handleClick={props.handleClick}/>
        <Cell border="" value={props.values[2]} handleClick={props.handleClick}/>
      </div>
    );
  }
}

export default BoardRow;
