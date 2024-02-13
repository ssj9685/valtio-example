import { useSnapshot } from "valtio";
import { FILTER } from "@/types/todo/todoType";
import { globalTodoProxy } from "@/state/todo/todoState";

export function useFilteredTodos() {
  const { todos, filter } = useSnapshot(globalTodoProxy);

  const todoArray = [...todos.values()];

  if (filter === FILTER.all) {
    return todoArray;
  }

  if (filter === FILTER.completed) {
    return todoArray.filter((todo) => todo.completed);
  }

  return todoArray.filter((todo) => !todo.completed);
}
