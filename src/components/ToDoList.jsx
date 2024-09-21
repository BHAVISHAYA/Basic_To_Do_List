import React, { useEffect, useState } from 'react';
import { ToDoForm } from './ToDoForm'; 
import { List } from './List';
import { ToDoDate } from './ToDoDate';
import { getLocalStorageData, setLocalStorageData } from './ToDoLocalStorage';
import "../styles/ToDoList.css";


export const ToDoList = () => {

    const [task, setTask] = useState(() => getLocalStorageData());

    const handleFormSubmit = (inputValue) => {

        const { id, content, checked } = inputValue;

        if(!content) return;
        const ifToDoContentMatched = task.find((currTask) => {
            return currTask.content === content;
        })
        if(ifToDoContentMatched) return;
        
        //* Method_1 =>   
        //? setTask((prevTask) => [...prevTask, { id: id, content : content, checked : checked }]);
        
        //* Method_2 => 
        setTask((prevTask) => [...prevTask, { id, content, checked }]);
    }

    //todo Add data to localStorage 
    setLocalStorageData(task);

    const handleDelete = (data) => {
        let arr = task.filter((currData) => {
            return currData.content !== data;
        })
        setTask(arr);
    }

    const handleCheck = (data) => {
        const updatedTask = task.map((currTask) => {
            if(currTask.content === data) {
                return {...currTask, checked : !currTask.checked}
            }
            else {
                return currTask;
            }
        })
        setTask(updatedTask);
    }

    const handleClearAll = () => {
        setTask([]);
    }

    

    return (
        <>
            <div className="container-fluid">
                <div className="container py-5">
                    <div className="row justify-content-center align-items-center text-center">
                        <div className="col-lg-6 py-4 px-5">
                            <h1>ToDo List</h1>
                            <ToDoDate />
                            <div className="row">
                                <ToDoForm onAddToDo={handleFormSubmit} />
                                <div className="col-12">
                                    <div className="row">
                                        <ul>
                                            {
                                                task.map((currTask) => {
                                                    return (
                                                        <>
                                                            <List 
                                                                key={currTask.id} 
                                                                currTask={currTask.content} 
                                                                checked={currTask.checked}
                                                                deleteTask={handleDelete} 
                                                                checkToDo={handleCheck} 
                                                            />
                                                        </>
                                                    );
                                                })
                                            }
                                            <button className='deleteBtn' onClick={handleClearAll}>Clear All</button>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
