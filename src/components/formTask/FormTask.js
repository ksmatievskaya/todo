import {useState} from 'react';
import './formTask.scss'

const FormTask = (props) => {
    const [taskValue, setValue] = useState('');

    const onValueChange = (e) => {
        setValue(e.target.value)
    }


    const onSubmit = (e) => {
        e.preventDefault();
        if(taskValue != '' ){
            props.onTaskAdded(taskValue);
            setValue('')
        }
    }


    return(
        <div className="formTask">
            <form action=""
                 className="formTask__form"
                 onSubmit={onSubmit}>
                <h2>Добавить задачу:</h2>
                <input type="text"
                     className="formTask__input"
                     value={taskValue}
                     onChange={onValueChange}
                     name='task' />
                <button type='submit' className="formTask__btn">Добавить</button>
            </form>
        </div>
    )
}

export default FormTask;