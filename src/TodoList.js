import React, { useState } from 'react'
import s from './TodoList.module.css'
import TodoItem from './TodoItem'

export const TodoList = () => {
    const [inputText, setinputText] = useState('')
    const [listItem, setListItem] = useState([])
    const [editable, setEditable] = useState('')

    const handleChange = event => {
        setinputText(event.target.value);
    };

    const setTodoList = () => {
        if (inputText.trim() !== '') {
            setListItem([...listItem, inputText]);
            setinputText('');
        }
    }

    const editHandleChange = (value, index) => {
        console.log({ value, index })
        const updatedList = [...listItem];
        updatedList[index] = value;
        setListItem(updatedList);
    }

    const removeTodo = (index) => {
        console.log('index========', index)
        const newList = [...listItem];
        newList.splice(index, 1);
        setListItem(newList);
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

            {
                listItem && listItem.map((item, index) => {
                    return <TodoItem item={item} index={index} removeTodo={removeTodo} handleChange={handleChange} editHandleChange={editHandleChange} />

                })
            }

        </div>
    )
}

export default TodoList;
