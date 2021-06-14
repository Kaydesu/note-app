import React from 'react'
import { Todo } from '../root.component'
import TodoItem from './TodoItem'
import styled from 'styled-components'

interface Proptypes {
    todoList: Todo[]
    checkTodo(id: number): void
}

const ListContainer = styled.ul`
    padding: 15px;
    height: calc(100% - 30px);
    overflow: auto;
`

function TodoList({ todoList, checkTodo }: Proptypes) {
    return (
        <ListContainer>
            {
                todoList.map(todo => {
                    return <TodoItem key={todo.id} {...todo} checkTodo={checkTodo} id={todo.id} />
                })
            }
        </ListContainer>
    )
}

export default TodoList
