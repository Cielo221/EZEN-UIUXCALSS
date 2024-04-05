import { useState, useMemo, useContext } from "react";
import { TodoStateContext } from "../App";
import "./Todolist.css";
import TodoItem from "./TodoItem";

const Todolist = () => {
  const { todo } = useContext(TodoStateContext);
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLocaleLowerCase())
        );
  };
  const analyzeTodo = useMemo(() => {
    const totalCount = todo.length;
    const doneCount = todo.filter((it) => it.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todo]);
  const { totalCount, doneCount, notDoneCount } = analyzeTodo;
  return (
    <div className="Todolist">
      <h4>Todo List 📄</h4>
      <div>
        <div>총 개수 : {totalCount}</div>
        <div>완료한 할일 : {doneCount}</div>
        <div>완료하지 못한 할일 : {notDoneCount}</div>
      </div>
      <input
        value={search}
        className="serchbar"
        placeholder="검색어를 입력하세요."
        onChange={onChangeSearch}
      />
      <div className="list_wrapper">
        {getSearchResult().map((it) => (
          <TodoItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

// Todolist.defaultProps = {
//   todo: [],
// };

export default Todolist;
