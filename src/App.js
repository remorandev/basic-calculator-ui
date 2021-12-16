import { useState } from "react";
import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignal } from "@fortawesome/free-solid-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { faBatteryHalf } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [date, setDate] = useState(new Date());
  const [screen, setScreen] = useState("45 + (800 x 25) / 40");
  const [result, setResult] = useState("545");

  return (
    <div className="bg-gray-200 w-screen h-screen flex justify-center items-center">
      <div className="w-64 h-auto bg-white border-4 rounded-2xl shadow-xl border-gray-100">
        {/* Barra de notificaciones */}
        <div className="w-auto rounded-2xl mx-1 my-2 h-6 flex justify-between">
          <div className="text-sm">
            {date.getHours() + ":" + date.getMinutes()}
          </div>
          <div className="items-center text-xs space-x-1">
            <FontAwesomeIcon icon={faSignal} />
            <FontAwesomeIcon icon={faWifi} />
            <FontAwesomeIcon icon={faBatteryHalf} />
          </div>
        </div>
         {/* Pantalla de calculos y resultado */}
        <div className="w-auto m-3 h-25 text-right space-y-2 py-2">
          <div className="text-gray-700">{screen}</div>
          <div className="text-black font-bold text-3xl">{result}</div>
        </div>
        <div className="w-auto m-1 h-auto mb-2">
          <div className="m-2 flex justify-between">
            <button className="btn-clean">C</button>
            <button className="btn-numeric">(</button>
            <button className="btn-numeric">)</button>
            <button className="btn-operations">/</button>
          </div>
          <div className="m-2 flex justify-between">
            <button className="btn-numeric">7</button>
            <button className="btn-numeric">8</button>
            <button className="btn-numeric">9</button>
            <button className="btn-operations">x</button>
          </div>
          <div className="m-2 flex justify-between">
            <button className="btn-numeric">4</button>
            <button className="btn-numeric">5</button>
            <button className="btn-numeric">6</button>
            <button className="btn-operations">-</button>
          </div>
          <div className="m-2 flex justify-between">
            <button className="btn-numeric">1</button>
            <button className="btn-numeric">2</button>
            <button className="btn-numeric">3</button>
            <button className="btn-operations">+</button>
          </div>
          <div className="m-2 flex justify-between">
            <button className="btn-numeric-2xl">0</button>
            <div className="flex w-full ml-3 justify-between">
              <button className="btn-numeric">.</button>
              <button className="btn-equal">=</button>
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <div className="w-20 h-1 bg-gray-100 rounded-l-xl rounded-r-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
