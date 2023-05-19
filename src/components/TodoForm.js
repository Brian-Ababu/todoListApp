import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import shortid from 'shortid';

const TodoForm =({todo, setTodo, todoList, setTodoList})=>{


    const handleChange =(event)=>{
        setTodo(event.target.value);
    }

    const handleSubmit =(event)=>{
      event.preventDefault();
      setTodoList([...todoList, {name:todo, id:shortid.generate(), status: "PENDING"}]);
      console.log(todoList);
      setTodo("");
    }
    // console.log(todoList)
   
    return(
        <div>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Add Item:</Form.Label>
              <Form.Control value={todo} type="text" placeholder="Add Item..." onChange={handleChange}/>
          </Form.Group>

          <Button variant="success" type="submit">
            add Item
          </Button>
        </Form>

        </div>
    )
}
export default TodoForm;


