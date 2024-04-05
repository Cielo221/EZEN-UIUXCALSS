import { useState, useRef } from "react";
import "./App.css";

// useRef()
function App() {
  const [text, setText] = useState("");
  const textRef = useRef();
  console.log(textRef);

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleOnClick = () => {
    if (text.length < 5) {
      alert("5자 이상 작성해주세요.");
      textRef.current.focus();
    } else {
      alert(text);
      textRef.current.value = "";
    }
    setText("");
  };

  return (
    <div className="wrap">
      <input ref={textRef} value={text} onChange={handleOnChange} />
      <button onClick={handleOnClick}>작성완료</button>
    </div>
  );
}

export default App;
