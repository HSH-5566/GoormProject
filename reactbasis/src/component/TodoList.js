import React, { useState } from "react";
import TodoTable from "./TodoTable.js";
import { nextStepIndex, createDataId } from "../util/purFunc.js";
import { TYPES } from "../util/constantVal.js";

import "../style/TodoList.css";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [priority, setPriority] = useState("normal");
  const [todoList, setTodoList] = useState([]);

  const handleTodoInput = (e) => {
    setTodo(e.target.value);
  };

  const handleSelectPrior = (e) => {
    setPriority(e.target.value);
  };

  const SaveBtnClick = () => {
    let date = new Date();
    const todoObject = {
      type: "todo",
      todo,
      priority,
      saveDate: date.toLocaleString(),
      dataId: createDataId(date)
    };

    setTodoList([...todoList, todoObject]);
    setTodo("");
    setPriority("normal");
  };

  const reset = () => {
    setTodo("");
    setPriority("normal");
    setTodoList([]);
  };

  const checkBoxClick = (item) => {
    return (e) => {
      const nextIndex = nextStepIndex(item.type);
      const filteredList = todoList.filter(
        (todo) => todo.dataId !== item.dataId
      );
      setTodoList([...filteredList, { ...item, type: TYPES[nextIndex] }]);
    };
  };

  return (
    <>
      <br />
      <div className="titlename">MY TODO LIST</div>
      <div className="form">
        <input
          type="text"
          name="title"
          className="title"
          onChange={handleTodoInput}
          value={todo}
          placeholder="내용을 입력해주세요"
        />
        <select
          name="priority"
          onChange={handleSelectPrior}
          className="priority"
        >
          <option value="normal">일반</option>
          <option value="high">높음</option>
          <option value="low">낮음</option>
        </select>
        <button name="save" onClick={SaveBtnClick} className="save">
          저장
        </button>
        <button name="clear" onClick={reset} className="clear">
          리셋
        </button>
      </div>
      <div className="list_all">
        <TodoTable
          status="todo"
          list={todoList}
          checkBoxClick={checkBoxClick}
        />
        <TodoTable
          status="doing"
          list={todoList}
          checkBoxClick={checkBoxClick}
        />
        <TodoTable
          status="done"
          list={todoList}
          checkBoxClick={checkBoxClick}
        />
      </div>
    </>
  );
};

export default TodoList;
