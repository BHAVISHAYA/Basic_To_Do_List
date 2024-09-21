import React from 'react';
import { MdDeleteForever, MdCheck } from "react-icons/md";
import "../styles/ToDoList.css";

export const List = (props) => {

    const { currTask, checked, deleteTask, checkToDo } = props;

    return (
        <>
            <li>
                <div className="row pt-4 align-items-center justify-content-center">
                    <div className={`col-10 w-75 text ${checked ? "check" : "uncheck" }`}>
                        {currTask}
                    </div>
                    <div className="col-1 done">
                        <MdCheck onClick={() => {checkToDo(currTask)}} />
                    </div>
                    <div className="col-1 notDone" onClick={() => {deleteTask(currTask)}}>
                        <MdDeleteForever />
                    </div>
                </div>
            </li>
        </>
    )
}
