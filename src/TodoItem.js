import React from 'react'
import s from './TodoItem.module.css'

const TodoItem = () => {
    return (

        <div className={s.inputContainer}>
            <div className={s.round}>
                <input type="checkbox" checked id="checkbox" />
                <label for="checkbox"></label>
            </div>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Add Task"
                    aria-label="Recipient's username" aria-describedby="button-addon2" ></input>
            </div>
            <button class="btn btn-success" type="button" id="button-addon2">Edit</button>
            <button class="btn btn-danger" type="button" id="button-addon2">Cancel</button>
        </div>
    )
}

export default TodoItem;