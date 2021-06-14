import axios from "axios";
import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import styled from 'styled-components';

const TodoListRoot = styled.div`
    height: 100%;
`

export interface Todo {
    id: number,
    title: string,
    completed: boolean
}

export default function Root() {
    const [todoList, setTodoList] = useState<Todo[]>([]);

    console.log(localStorage.getItem("dark-theme"));

    useEffect(() => {
        fetchTodo();
        window.addEventListener("storage", () => {
            console.log(localStorage.getItem("dark-theme"));
        });
        let event = document.createEvent("Event");
        event.initEvent("storage", true, true);
        window.dispatchEvent(event);
    }, []);

    const checkTodo = (id: number): void => {
        let tempTodos = [...todoList];
        tempTodos.map(todo => {
            if(todo.id === id) {
                todo.completed = !todo.completed;
            }
        })
        setTodoList(tempTodos)
    }

    const fetchTodo = async () => {
        let res = await axios.get<Todo[]>("https://jsonplaceholder.typicode.com/todos");
        setTodoList(res.data)
    }

    return (
        <>
            <TodoListRoot className="todo-list-root">
                <TodoList todoList={todoList} checkTodo={checkTodo} />
            </TodoListRoot>
        </>
    );
}
