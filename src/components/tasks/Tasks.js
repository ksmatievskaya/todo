import {useState, useEffect} from 'react';
import './tasks.scss';
import deleteImg from '../../resourses/delete.png'

const Tasks = (props) => { 
    const {tasks, setTasks, newTask, onChecked} = props;

    const onListChanged = () => {
        if(newTask !== undefined) {
            setTasks([...tasks, newTask]);
        }
    }


    useEffect(() => {
        onListChanged();
    }, [newTask])

    
    const elems = tasks.map((item, i) => {

        return(
            <li className="tasks__item" key={i}>
                {item ? <input type="checkbox" className="tasks__checkbox" onClick={onChecked} /> : null}
                <h3 className='tasks__name'>{item}</h3>
                <button className='tasks__btn' onClick={() => onDeleteItem(i)}><img src={deleteImg} alt='delete item'></img></button>
            </li>
        )
    })

    const onDeleteItem = (key) => {
        setTasks([...tasks.slice(0, key), ...tasks.slice(key + 1)])
    }



    const elements = tasks.length > 0 ? elems : <h3 className='tasks__name'>Нет задач</h3>
    
    return(
        <div className="tasks">
            <ul className="tasks__list">
                {elements}
            </ul>
        </div>
    )
}

export default Tasks;