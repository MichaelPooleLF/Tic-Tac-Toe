import { func } from 'prop-types';
import React from 'react';

function Cell(props) {
  return (
    <div className={`cell col-4 text-center centered ${props.border}`} ></div>
  );
}

export default Cell;
