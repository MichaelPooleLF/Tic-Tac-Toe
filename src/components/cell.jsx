import React from 'react';

function Cell(props) {
  let handleClick = null;
  let cellValue = '';

  if (!props.value) {
    handleClick = props.handleClick;
  }

  if (props.value === 'x') {
    cellValue = <i className="fas fa-times x"></i>;
  } else if (props.value === 'o') {
    cellValue = <i className="far fa-circle o"></i>;
  }

  return (
    <div className={`cell col-4 text-center centered ${props.border}`}
      id={props.position}
      onClick={handleClick}>
      {cellValue}
    </div>
  );
}

export default Cell;
