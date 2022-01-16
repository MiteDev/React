import { Button, Container, Input } from '@mui/material';
import React, { useState } from 'react'
import TodoList from '../Pages/TodoList';

function Todo() {
    const [input, SetInput] = useState("");
    const [todo, SetTodo] = useState([]);

    function removeTodo(id) {
        SetTodo(removeItem => {
            return removeItem.filter((item, index) => {
                return index !== id;
            })
        })
    }

    function addTodo (event){
        SetTodo(addData => {
            return [...addData, input];
        })
        SetInput("");
    }
    return (
        <div>
            <h1>TodoList</h1>
            <Container>
                <div>
                    <Input
                        type='text'
                        value={input}
                        onChange={(event) => { SetInput(event.target.value) }}
                    />
                    <Button onClick={addTodo}>++</Button>
                </div>
                <div>
                    {todo.map((item, index) => (
                        <TodoList
                            id={index}
                            item={item}
                            removeTodo={removeTodo}
                        />
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Todo
