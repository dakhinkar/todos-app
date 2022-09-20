import { useRef } from 'react';

import Todo from './Todo';
import styles from './Form.module.css';
//title, description, startDate, endDate, deleteHandler
const Form = ({ addHandler }) => {

    const enteredTitle = useRef();
    const enteredDesc = useRef();
    const enteredStartDate = useRef();
    const enteredEndDate = useRef();

    const defaultStartDate = new Date().toISOString();
    const date = defaultStartDate.substring(0, defaultStartDate.indexOf("T"));


    const clearHandler = (e) => {
        e.preventDefault();
        enteredTitle.current.value = "";
        enteredDesc.current.value = "";
        enteredStartDate.current.value = date;
        enteredEndDate.current.value = "";
    }

    const submitHandler = (e) => {
        e.preventDefault();
        let title = enteredTitle.current.value;
        let description = enteredDesc.current.value;
        let startDate = enteredStartDate.current.value;
        let endDate = enteredEndDate.current.value;
        // console.log(title, description, startDate, endDate)
        if (title === "" || description === "" || startDate === "" || endDate === "") {
            return;
        }
        // let title = enteredTitle.current.value;
        let newTodo = new Todo(title, description, startDate, endDate);
        clearHandler(e);
        addHandler(newTodo);
    }

    return (
        <div className={styles.formContainer}>
            <h3>Add New todos</h3>
            <form action={submitHandler}>
                <div className={styles.row}>
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" id="title" ref={enteredTitle} />
                </div>
                <div className={styles.row}>
                    <label htmlFor="desc">Description: </label>
                    <input type="text" name="desc" id="desc" ref={enteredDesc} />
                </div>
                <div className={styles.row}>
                    <label htmlFor="startDate">Start Date: </label>
                    <input type="date" name="startDate" id="startDate" ref={enteredStartDate} value={date} disabled={true} />
                </div>
                <div className={styles.row}>
                    <label htmlFor="endDate">End Date: </label>
                    <input type="date" name="endDate" id="endDate" ref={enteredEndDate} min={date} />
                </div>
                <div className={`${styles.action} ${styles.row}`}>
                    <button onClick={(e) => clearHandler(e)}>Cancel</button>
                    <button onClick={(e) => submitHandler(e)} >Add Todo</button>
                </div>
            </form>
        </div>
    );
}

export default Form;