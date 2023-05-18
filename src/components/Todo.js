import { Button } from 'react-bootstrap';
const Todo =({item, todoList, setTodoList})=>{
    const deleteTodo =()=>{
        const todo = todoList.find((todo)=>todo.id === item.id);
        todo.status = "DONE";
        todoList.splice(todoList.indexOf(todo), 1);
          setTodoList([...todoList, todo]);
      }
    return(
        <div>
            <div className='todoItem'>
                <h5> {item.name}</h5>
                <Button onClick={deleteTodo}variant="danger" type="submit"> Pending </Button>
            </div>

        </div>
    )
}
export default Todo;