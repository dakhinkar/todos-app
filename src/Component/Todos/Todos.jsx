

import styles from './Todos.module.css';
import TodosCart from './TodosCart';

const Todos = ({ todos, deleteHandler, editHandler }) => {
    return (
        <div className={styles.contianer}>
            {
                todos.length === 0 && <p>Todos List is empty</p>
            }
            {
                todos && todos.map((todo, index) => (<TodosCart key={index.toString()} index={index} todo={todo} deleteHandler={deleteHandler} editHandler={editHandler} />))
            }
        </div>
    );
}

export default Todos;
