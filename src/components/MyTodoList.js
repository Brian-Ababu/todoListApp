import Todo from "./Todo";

const MyTodoList = ({todoList, setTodoList})=>{
    const today = new Date();
    function formatDate(date) {
        return new Intl.DateTimeFormat(
            'en-US',
            { weekday: 'long' }
        ).format(date);
        }
    return(
        <div>
            <h4> {formatDate(today)} To Do List </h4>

           <h4>
            {todoList.map((item) => {
                return (
                    <Todo
                    key={item.id}
                    item={item}
                    todoList={todoList}
                    setTodoList={setTodoList}/>
                )
            })}
           </h4>
        </div>
    )
}
export default MyTodoList;
