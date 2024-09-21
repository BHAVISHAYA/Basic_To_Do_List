import React, { useState } from 'react';
import "../styles/ToDoList.css";

export const ToDoForm = (props) => {

    const { onAddToDo } = props;

    const [inputValue, setInputValue] = useState({});

    const handleChange = (event) => {
        setInputValue({
            id : event.target.value, 
            content : event.target.value, 
            checked : false
        });
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onAddToDo(inputValue);
        setInputValue({ id : "", content : "", checked : false });
    }

    return (
        <>
            <div className="col-12 position-relative">
                <form action="" className='form-group' onSubmit={handleFormSubmit}>
                    <input 
                        type="text" 
                        className='form-control mt-5 input' 
                        autoComplete='off' 
                        value={inputValue.content}
                        onChange={handleChange}
                    />
                    <button className='tasks'>Add Task</button>
                </form>
            </div>
        </>
    )
}
