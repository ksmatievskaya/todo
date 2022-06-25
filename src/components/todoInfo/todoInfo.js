import './todoInfo.scss'

const TodoInfo = (props) => {
    return(
        <div className="todoInfo">
            <h1>TO-DO list</h1>
            <h2>Всего задач: {props.tasks.length} </h2>
            <h2>Выполнено задач: {props.checkboxSum} </h2>
        </div>
    )
}

export default TodoInfo;