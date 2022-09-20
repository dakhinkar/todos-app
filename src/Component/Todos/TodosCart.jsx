


import styles from './TodosCart.module.css';
// title, description, startDate, endDate, deleteHandler
const TodosCart = ({ index, todo, deleteHandler, editHandler }) => {
    return (
        <div className={styles.container}>
            <div className={styles.todoDetails}>
                <span>{todo.title}</span>
                <span>{todo.description}</span>
                <span>{todo.startDate}</span>
                <span>{todo.endDate}</span>
            </div>
            <div className={styles.action}>
                <button className={styles.leftButton} onClick={() => deleteHandler(index)}>delete</button>
                <button onClick={() => editHandler(index)}>edit</button>
            </div>

        </div>
    );
}

export default TodosCart;
