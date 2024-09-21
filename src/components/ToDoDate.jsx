import React, { useState, useEffect } from "react";
import "../styles/ToDoList.css";

export const ToDoDate = () => {

    const [dateTime, setDateTime] = useState("");

    useEffect(() => {
        
        const interval = setInterval(() => {
            //* Data And Time 
            const now = new Date();
            const formattedDate = now.toLocaleDateString();
            const formattedTime = now.toLocaleTimeString();
            setDateTime(`${formattedDate} - ${formattedTime}`);
        }, 1000);

        return () => clearInterval(interval);

    }, []);

    return (
        <>
            <h2> {dateTime} </h2>
        </>
    )
}
