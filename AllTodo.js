import { useState, useEffect } from 'react';

const AllTodo = () => {

    const [tasks, setTasks] = useState(null);

    useEffect(() => {
        fetch('https://maks.internship.animativ.dev/api/v1/tasks/')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setTasks(data);
        })
    }, []);
    

    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const todo = { name };
    
        fetch('https://maks.internship.animativ.dev/api/v1/tasks/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(todo)
        })
    }


    const handleDelete = (_id) => {

        fetch(`https://maks.internship.animativ.dev/api/v1/tasks/${_id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
    }
  

    const putCompleted = (_id) => {

        let todo_id = 0;
        const done = tasks.tasks.find((value, index) => {
            todo_id = index
            return _id === value._id ? true: false;
        }).done

        tasks.tasks[todo_id].done = !done

    fetch(`https://maks.internship.animativ.dev/api/v1/tasks/${_id}`, {
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({done: !done})
        })
        .then(() => {
        setTasks(tasks);
        })
    }


    const input = (putCompleted, id, task) => {
        const newPutCompleted = () => {
            putCompleted(id)
        }
        return <input type="checkbox" className='box' defaultChecked={task.done} onClick={newPutCompleted}></input>
    }


    return (
        <div>
            <div className="addtodo">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="+ Add new TODO"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </form>
            </div>
            <div>
                {tasks && tasks.tasks.map(task => (
                    <div className="todo-preview" key={task._id} >
                        <h2>{ task.name }
                        <button className="delete" onClick={() => handleDelete(task._id)}>X</button>
                        <div className="done">
                            {input(putCompleted, task._id, task)}
                            <label for="checkbox"></label>
                        </div></h2>
                    </div>
                ))}
            </div>
            <div className="items">
                <p>{tasks && tasks.tasks.length} items left</p>
            </div>
        </div>
    );
  }
   
  export default AllTodo;