import { useSnapshot } from "valtio";
import { Todo } from "../../types/todo/todoType";
import { globalTodoProxy } from "@/state/todo/todoState";

export function useTodoFilter(params: { todos: Map<string, Todo> }) {
    const { todos } = params;
  
    const todoSnapshot = useSnapshot(globalTodoProxy);
  
    const { filter } = todoSnapshot;
  
    const todosArray = [...todos.values()];
  
    if (filter === "all") {
      return todosArray;
    }
  
    if (filter === "completed") {
      return todosArray.filter((todo) => todo.completed);
    }
  
    return todosArray.filter((todo) => !todo.completed);
  }