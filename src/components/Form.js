import { React, useState } from "react";
import Todo from "../components/Todo";
function Form() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  const InputHandler = (e) => {
    setInputText(e.target.value);
    console.log(e.target.value);
  };
  const SubmitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: Date.now(), text: inputText, status: false }]);
  };
  return (
    <div className="todo-pos">
      <h1>My Todo List</h1>
      <form>
        <input
          onChange={InputHandler}
          value={inputText}
          type="text"
          className="todo-input"
          placeholder="enter your task"
        />
        <button
          onClick={SubmitTodoHandler}
          className="todo-button"
          type="submit"
        >
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
      <div>
        <div className="todo-container">
          <ul className="todo-list">
            <br />
            {todos.map((todo) => (
              <Todo
                text={todo.text}
                key={todo.id}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Form;
