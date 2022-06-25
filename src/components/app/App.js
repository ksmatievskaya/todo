import { useState} from 'react';
import 'bootstrap-reboot';
import './app.scss';
import TodoInfo from '../todoInfo/todoInfo';
import FormTask from '../formTask/FormTask';
import Tasks from '../tasks/Tasks';

const App = () => {
    const [newTask, setTask] = useState();
    const [tasks, setTasks] = useState([]);
    const [checkboxSum, setCheckboxSum] = useState(0);

    const onTaskAdded = (task) => {
        setTask(task);
    }

    const onChecked = (e) => {
        if (e.target.checked) {
            setCheckboxSum(checkboxSum + 1)
        } else {
            setCheckboxSum(checkboxSum - 1)
        }
    }


    return(
        <div className="app">
            <TodoInfo tasks={tasks} checkboxSum={checkboxSum} />
            <FormTask onTaskAdded={onTaskAdded}/>
            <Tasks newTask={newTask}
                    tasks={tasks}
                    setTasks={setTasks}
                    onChecked={onChecked}
                   />
        </div>
    )
}

export default App;