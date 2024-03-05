import { Filter, Todo } from "@/types/todo/todoType";
import { proxy } from "valtio";
import { proxyMap } from "valtio/utils";

export class TodoState {
  filter;
  todos;

  constructor(params: { filter: Filter; todos: Map<string, Todo> }) {
    const { filter, todos } = params;
    this.filter = filter;
    this.todos = todos;
  }

  add(params: { title: string; completed: boolean }) {
    const { title, completed } = params;

    if (!title) {
      return;
    }

    const id = crypto.randomUUID();
    const todo = { id, title, completed };

    this.todos.set(id, todo);

    return todo;
  }

  remove(params: { id: string }) {
    const { id } = params;
    this.todos.delete(id);
  }

  toggle(params: { id: string }) {
    const { id } = params;

    const todo = this.todos.get(id);

    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  setFilter(params: { filter: Filter }) {
    const { filter } = params;

    this.filter = filter;
  }
}

export const globalTodoState = new TodoState({
  filter: "all",
  todos: proxyMap(),
});

export const globalTodoProxy = proxy(globalTodoState);
