import React from 'react';
import Board from './board';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Board/>
    );
  }
}

export default App;
