import { Button } from '@mui/material'
import React from 'react'

function TodoList({item, id, removeTodo}) {
    return (
        <ol start={id + 1}>
            <li key={id}>
                {item}<Button onClick={() => removeTodo(id)}>삭제</Button>
            </li>
        </ol>
    )
}

export default TodoList
