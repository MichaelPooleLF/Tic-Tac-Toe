import React from 'react';

function BoardRow(props) {
  if (props.position === 'center') {
    return (
      <div className="row board-row">
        <div className="cell col-4 text-center border-top border-bottom centered"><i className="fas fa-times x"></i></div>
        <div className="cell col-4 text-center border centered"><i className="fas fa-times x"></i></div>
        <div className="cell col-4 text-center border-top border-bottom centered"><i className="fas fa-times x"></i></div>
      </div>
    );
  } else {
    return (
      <div className="row board-row">
        <div className="cell col-4 text-center centered"><i className="far fa-circle o"></i></div>
        <div className="cell col-4 text-center border-left border-right centered"><i className="far fa-circle o"></i></div>
        <div className="cell col-4 text-center centered"><i className="far fa-circle o"></i></div>
      </div>
    );
  }
}

export default BoardRow;
