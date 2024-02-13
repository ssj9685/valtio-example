import { globalTodoProxy } from "@/state/todo/todoState";
import TodoFilter from "./TodoFilter";
import TodoItem from "./TodoItem";
import { useFilteredTodos } from "@/hooks/todo/useTodoFilter";
import { FormEvent } from "react";

function TodoList() {
  const filteredTodos = useFilteredTodos();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const titleInput = e.currentTarget["title-input"];

    globalTodoProxy.add({
      title: titleInput.value,
      completed: false,
    });

    titleInput.value = "";
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
