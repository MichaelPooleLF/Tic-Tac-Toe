import { func } from 'prop-types';
import React from 'react';

function Cell(props) {
  let handleClick = null;
  if (!props.filled) {
    handleClick = props.handleClick;
  }
  return (
    <div className={`cell col-4 text-center centered ${props.border}`}
      id={props.position}
      onClick={handleClick}>
      {props.value}
    </div>
  );
}

export default Cell;
