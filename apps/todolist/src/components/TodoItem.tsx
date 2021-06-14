import React from 'react'
import styled, { css } from 'styled-components';

interface ListItemProps {
    completed: boolean,
    isDark: boolean
}

const ListItem = styled.div<ListItemProps>`
    padding: 10px;
    margin: 5px 0;
    cursor: pointer;
    border-bottom: 2px solid var(--secondary-light);
    ${({ completed, isDark }) => {
        let textDecoration = completed ? "line-through" : "none";
        let color = isDark ? "var(--white)" : "var(--black)";
        let borderBottom = "2px solid var(--white)"
        return css`
            text-decoration: ${textDecoration};
            color: ${color};
            border-bottom: ${borderBottom};
        `
    }}

    &:hover {
        ${({isDark}) => {
            let boxShadow = !isDark ? "0 1px 4px 2px rgba(151, 151, 151, 0.22)" : "0 1px 4px 2px rgba(52, 64, 100, 0.295);"
            return css`
                box-shadow: ${boxShadow};
            `
        }}
    }
`

interface TodoItemProps {
    id: number,
    title: string;
    completed: boolean;
    checkTodo(id: number): void
    isDark: boolean,
}


function TodoItem({ id, title, completed, isDark, checkTodo }: TodoItemProps) {
    return (
        <ListItem isDark={isDark} completed={completed} onClick={() => checkTodo(id)}>
            {title}
        </ListItem>
    )
}

export default TodoItem
