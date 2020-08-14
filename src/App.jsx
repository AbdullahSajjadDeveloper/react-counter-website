// Importing Necessary React.JS Built-In Components
import React from "react";

// Importing Necessary StyleSheet Files
import Styling from "./AppStyle.module.css";

// Components
const App = () => {
  return (
    <React.Fragment>
      <IncrementDecrement />
    </React.Fragment>
  );
};

class IncrementDecrement extends React.Component {
  constructor() {
    super();
    this.state = {
      idNumber: 0,
    };
  }

  increment = () => {
    this.setState({
      idNumber: (this.state.idNumber = this.state.idNumber + 1),
    });
  };

  decrement = () => {
    if (this.state.idNumber !== 0) {
      this.setState({
        idNumber: (this.state.idNumber = this.state.idNumber - 1),
      });
    } else {
      alert("Value Cannot Be Less Than 0");
    }
  };
  render() {
    return (
      <React.Fragment>
        <div id={Styling.idBox}>
          <h1 id={Styling.idNumber}>{this.state.idNumber}</h1>
          <button id={Styling.i} onClick={this.increment}>
            +
          </button>
          <button id={Styling.d} onClick={this.decrement}>
            -
          </button>
        </div>
        <h3 id={Styling.madeByAS}>Made By <strong>Abdullah Sajjad</strong></h3>
      </React.Fragment>
    );
  }
}

// Exporting App Component
export default App;
