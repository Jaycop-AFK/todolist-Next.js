"use client";

import Image from "next/image";
import { useState } from "react";
import { FaTrash } from 'react-icons/fa6'
import { TodoObject } from "./models/Todo";

const Home: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<TodoObject[]>([]);

  const addTodo = () => {
    const newTodo: TodoObject = {
      id: todos.length + 1,
      value: todo,
      done: false,
      onDelete: () => deleteTodo(newTodo.id),
    };

    setTodos([...todos, newTodo]);
    setTodo("");
  };

  const deleteTodo = (todoId: number) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  return (
    <>
      <header className="bg-slate-800 p-4 text-white">
        <h1 className="text-3xl">Todo List</h1>
      </header>
      <div className="p-4">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs p-2"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button
          className="p-2 btn btn-outline btn-success"
          onClick={() => addTodo()}
        >
          Add Todo
        </button>
      </div>
      <div className="flex bg-slate-400 items-center justify-center">
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} className="flex items-center">
              <div>{todo.value}</div>
              <div className="ml-2">
                <button onClick={todo.onDelete}>
                  <FaTrash />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;