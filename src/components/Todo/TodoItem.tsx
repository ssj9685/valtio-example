import { globalTodoProxy } from "@/state/todo/todoState";
import { Todo } from "@/types/todo/todoType";

function TodoItem(props: { todo: Todo }) {
  const { id, title, completed } = props.todo;

  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => globalTodoProxy.toggleTodo({ id })}
      />
      <span style={{ textDecoration: completed ? "line-through" : "" }}>
        {title}
      </span>
      <button onClick={() => globalTodoProxy.removeTodo({ id })}>x</button>
    </div>
  );
}

export default TodoItem;
