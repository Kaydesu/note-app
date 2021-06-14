import React from 'react'
import { Todo } from '../root.component';
import styled, { css } from 'styled-components';

interface ListItemProps {
    completed: boolean
}

const ListItem = styled.div<ListItemProps>`
    padding: 10px;
    margin: 5px 0;
    cursor: pointer;
    ${({ completed }) => {
        return completed ? css`
            text-decoration: line-through;
        `: css`
            text-decoration: none;
        `
    }}

    &:hover {
        box-shadow: 0 1px 4px 2px rgba(151, 151, 151, 0.22);
    }
`

interface TodoItemProps {
    id: number,
    title: string;
    completed: boolean;
    checkTodo(id: number): void
}


function TodoItem({id, title, completed, checkTodo }: TodoItemProps) {
    return (
        <ListItem completed={completed} onClick={() => checkTodo(id)}>
            {title}
        </ListItem>
    )
}

export default TodoItem
