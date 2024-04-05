import { useState } from "react";
import "./App.css";
import Viewer from "./components/Viewer";

function App() {
  // [초기값, 함수 = set함수] = useState(초기값(number)의 값)
  const [number, setNumber] = useState(0);

  const onDecrease = () => {
    setNumber(number - 1);
  };
  const onIncrease = () => {
    setNumber(number + 1);
  };

  return (
    <div className="wrap">
      <h2>{number}</h2>
      <Viewer number={number} />
      <div>
        <button onClick={onDecrease}>-</button>
        <button onClick={onIncrease}>+</button>
      </div>
    </div>
  );
}

export default App;
