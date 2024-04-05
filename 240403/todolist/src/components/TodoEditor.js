import { useState, useRef, useContext } from "react";
import { TodoDispatchContext } from "../App";
import "./TodoEditor.css";

const TodoEditor = () => {
  const { onCreate } = useContext(TodoDispatchContext);
  const [content, setContent] = useState("");
  const inputRef = useRef();
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  // 추가시 입력값 초기화
  const onSubmit = () => {
    if (!content) {
      inputRef.current.focus();
      return;
    } else {
      onCreate(content);
      setContent("");
    }
  };
  // 엔터시 추가기능
  const onkeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };
  return (
    <div className="TodoEditor">
      <h4>새로운 Todo 작성하기 ❣</h4>
      <div className="editor_wrapper">
        <input
          ref={inputRef}
          value={content}
          onChange={onChangeContent}
          onKeyDown={onkeyDown}
          placeholder="새로운 Todo..."
        />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  );
};

export default TodoEditor;
