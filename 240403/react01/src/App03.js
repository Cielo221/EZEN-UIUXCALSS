import "./App.css";
import { useState, useEffect, useRef } from "react";
import Viewer01 from "./components/Viewer01";
import Controller from "./components/Controller";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const didMountref = useRef(false);

  const handleSetCount = (num) => {
    setCount(count + num);
  };

  useEffect(() => {
    if (!didMountref.current) {
      didMountref.current = true;
      return;
    } else {
      console.log("컴포넌트 업데이트:");
    }
  });

  useEffect(() => {
    console.log("컴포넌트 마운트");
  }, []);
  const handleChangeText = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };
  return (
    <div className="wrap">
      <h1>Simple Counter</h1>
      <section>
        <input value={text} onChange={handleChangeText} />
      </section>
      <section>
        <Viewer01 count={count} />
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}

export default App;
