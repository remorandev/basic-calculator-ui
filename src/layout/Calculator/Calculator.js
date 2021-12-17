import React from "react";

import NotificationBar from "../../components/NotificationBar/NotificationBar";
import Screen from "./Screen/Screen";
import Keypad from "./Keypad/Keypad";
import BottomBar from "../../components/BottomBar/BottomBar";

class Calculator extends React.Component {
  state = {
    equation: "",
    result: 0,
  };

  onButtonPress = (event) => {
    let equation = this.state.equation;
    const pressedButton = event.target.innerHTML;

    if (pressedButton === "C") {
      return this.clear();
    } else if (
      (pressedButton >= "0" && pressedButton <= "9") ||
      pressedButton === "."
    ) {
      equation += pressedButton;
    } else if (["(", ")"].indexOf(pressedButton) !== -1) {
      equation += pressedButton;
    } else if (["+", "-", "*", "/", "%"].indexOf(pressedButton) !== -1) {
      equation += " " + pressedButton + " ";
    } else if (pressedButton === "=") {
      try {
        const evalResult = eval(equation);
        const result = Number.isInteger(evalResult)
          ? evalResult
          : evalResult.toFixed(2);
        this.setState({ result });
      } catch (error) {
        alert("Invalid Mathematical Equation");
      }
    } else {
      equation = equation.trim();
      equation = equation.substr(0, equation.length - 1);
    }

    this.setState({ equation: equation });
  };

  clear() {
    this.setState({ equation: "", result: 0 });
  }

  render() {
    return (
      <main className="bg-gray-200 w-screen h-screen flex justify-center items-center">
        <div className="w-64 h-auto bg-white border-4 rounded-2xl shadow-xl border-gray-100">
          <NotificationBar />
          <Screen equation={this.state.equation} result={this.state.result} />
          <Keypad onButtonPress={this.onButtonPress} />
          <BottomBar />
        </div>
      </main>
    );
  }
}

export default Calculator;
