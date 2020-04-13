import React, { Component, Fragment } from "react";

class ReturnTypes extends Component {
  render() {
    return (
      <>
        <header></header>
        <div>hi</div>
        <footer></footer>
      </>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Fragment>
        <ReturnTypes />
      </Fragment>
    );
  }
}

export default App;
