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
    const [isDark, setIsDark] = useState<boolean>(false);

    const onThemeChanged = (e: CustomEvent):void => {
        setIsDark(e.detail.isDark);
    }

    useEffect(() => {
        fetchTodo();
        window.addEventListener("themeChanged", onThemeChanged);
        return () => {
            window.removeEventListener("themeChanged", onThemeChanged);
        }
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
                <TodoList todoList={todoList} checkTodo={checkTodo} isDark={isDark}/>
            </TodoListRoot>
        </>
    );
}
