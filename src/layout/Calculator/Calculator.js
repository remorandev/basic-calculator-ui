import React from 'react';

import NotificationBar from '../../components/NotificationBar/NotificationBar';
import Screen from './Screen/Screen'
import Keypad from './Keypad/Keypad';
import BottomBar from '../../components/BottomBar/BottomBar';


class Calculator extends React.Component {
  render() {
    return (
      <main className="bg-gray-200 w-screen h-screen flex justify-center items-center">
        <div className="w-64 h-auto bg-white border-4 rounded-2xl shadow-xl border-gray-100">
          <NotificationBar />
          <Screen />
          <Keypad />
          <BottomBar />
        </div>
      </main>
    );
  }
}

export default Calculator;