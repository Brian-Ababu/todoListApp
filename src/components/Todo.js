import { Button } from 'react-bootstrap';

const Todo = ({ item, todoList, setTodoList }) => {
  const toggleStatus = () => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === item.id) {
        const newStatus = todo.status === 'PENDING' ? 'DONE' : 'PENDING';
        return { ...todo, status: newStatus };
      }
      return todo;
    });

    setTodoList(updatedTodoList);
  };

  return (
    <div>
      <div className='todoItem'>
        <h5>{item.name}</h5>
        <Button onClick={toggleStatus} variant="primary" type="submit">
          {item.status}
        </Button>
      </div>
    </div>
  );
};

export default Todo;
