import React from 'react';
import Cell from './cell';

function BoardRow(props) {
  if (props.position === 'center') {
    return (
      <div className="row board-row">
        <Cell position={`${props.position}-left`} border="b-top b-bottom" value={props.values[0]} handleClick={props.handleClick}/>
        <Cell position={`${props.position}`} border="my-border" value={props.values[1]} handleClick={props.handleClick}/>
        <Cell position={`${props.position}-right`} border="b-top b-bottom" value={props.values[2]} handleClick={props.handleClick}/>
      </div>
    );
  } else {
    return (
      <div className="row board-row">
        <Cell position={`${props.position}-left`} border="" value={props.values[0]} handleClick={props.handleClick}/>
        <Cell position={`${props.position}-center`} border="b-left b-right" value={props.values[1]} handleClick={props.handleClick}/>
        <Cell position={`${props.position}-right`} border="" value={props.values[2]} handleClick={props.handleClick}/>
      </div>
    );
  }
}

export default BoardRow;
