import { globalTodoProxy } from "@/state/todo/todoState";
import TodoFilter from "./TodoFilter";
import TodoItem from "./TodoItem";
import { useSnapshot } from "valtio";
import { useTodoFilter } from "@/hooks/todo/useTodoFilter";
import { FormEvent } from "react";

function TodoList() {
  const { todos } = useSnapshot(globalTodoProxy);

  const filteredTodos = useTodoFilter({ todos });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const title = e.currentTarget["title-input"].value;

    e.currentTarget["title-input"].value = "";

    globalTodoProxy.addTodo({
      title,
      completed: false,
    });
  };

  return (
    <div>
      <TodoFilter />
      <form onSubmit={handleSubmit}>
        <input name="title-input" placeholder="제목을 입력해주세요." />
      </form>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
