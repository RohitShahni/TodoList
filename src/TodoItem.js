import React, { useState } from 'react'
import s from './TodoItem.module.css'

const TodoItem = (props) => {
    console.log('props=========', props)

    const { item, removeTodo, index, editHandleChange } = props;
    const [edit, setEdit] = useState(Boolean)
    const [check, setCheck] = useState(Boolean)
    const [isChecked, setIsChecked] = useState(false);
    let disabled = "disabled";
    let enabled = !disabled;


    const editHandler = (Boolean) => {
        setEdit(Boolean)
        disabled = enabled;
    }
    const saveHandler = (Boolean) => {
        setEdit(Boolean)
    }

    const toggleCheckbox = (index) => {
        setIsChecked(!isChecked);
    };

    return (

        <div className={s.inputContainer}>
            <div className={s.round} onClick={()=>toggleCheckbox(index)}>
                <input type="checkbox" checked={isChecked} id="checkbox" />
                <label for="checkbox"></label>
            </div>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Add Task"
                    aria-label="Recipient's username" aria-describedby="button-addon2"
                    disabled={!edit}
                    value={item && item}
                    onChange={(e) => editHandleChange(e.target.value, index)}
                />
            </div>
            {!edit && <button class="btn btn-success" type="button" id="button-addon2" onClick={() => editHandler(true)}>Edit</button>}
            {edit && <button class="btn btn-success" type="button" id="button-addon2" onClick={() => saveHandler(false)}>Save</button>}
            <button class="btn btn-danger" type="button" id="button-addon2" onClick={() => removeTodo(index)}>Delete</button>
        </div>
    )
}

export default TodoItem;