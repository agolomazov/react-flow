import React, { Component } from 'react';

class App extends Component {
  state = {
    some: 'Home report'
  };

  onClickHandler = () => {
    const res = 1 + 1;
    return res;
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.some}</h1>
        <button onClick={this.onClickHandler}>Click me</button>
      </div>
    );
  }
}

export default App;
