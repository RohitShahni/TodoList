import React, { useState } from 'react'
import s from './TodoList.module.css'
import TodoItem from './TodoItem'

export const TodoList = () => {
    const [inputText, setinputText] = useState('')
    const [listItem, setListItem] = useState('')

    const handleChange = event => {
        setinputText(event.target.value);

        console.log('value is:', event.target.value);
    };

    const setTodoList = () => {
        console.log({ inputText })
        setListItem(inputText)
    }

    return (
        <div className={s.container}>
            <div className={s.inputContainer}>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Add Task"
                        aria-label="Recipient's username" aria-describedby="button-addon2"
                        onChange={handleChange}
                        value={inputText} />
                </div>

                <button class="btn btn-success" type="button" id="button-addon2" onClick={setTodoList}>Add Todo</button>
            </div>

            {listItem && <TodoItem />}
        </div>
    )
}

export default TodoList;
