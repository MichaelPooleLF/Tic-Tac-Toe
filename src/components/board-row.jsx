import React from 'react';

function BoardRow(props) {
  if (props.position === 'center') {
    return (
      <div className="row board-row">
        <div className="cell col-4 text-center b-top b-bottom centered"></div>
        <div className="cell col-4 text-center my-border centered"></div>
        <div className="cell col-4 text-center b-top b-bottom centered"></div>
      </div>
    );
  } else {
    return (
      <div className="row board-row">
        <div className="cell col-4 text-center centered"></div>
        <div className="cell col-4 text-center b-left b-right centered"></div>
        <div className="cell col-4 text-center centered"></div>
      </div>
    );
  }
}

export default BoardRow;
