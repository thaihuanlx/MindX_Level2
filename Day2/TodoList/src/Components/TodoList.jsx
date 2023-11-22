import React, { useState } from "react";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue.trim() !== "") {
            setTodos([...todos, inputValue]);
            setInputValue("");
        }
    };

    const handleRemoveTodo = (index) => {
        const updatedTodos = todos.filter((todo, i) => i !== index);
        setTodos(updatedTodos);
    };

    return (
        <div>
            <h2>Todo List</h2>
            <div className="">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter your task here ..."
                />
                <button onClick={handleAddTodo}>Add</button>
            </div>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => handleRemoveTodo(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
