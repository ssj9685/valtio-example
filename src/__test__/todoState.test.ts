import { TodoState } from "@/state/todo/todoState";

describe("Test Todo state", () => {
  test("todo add", () => {
    const state = new TodoState({ filter: "all", todos: new Map() });

    const title = "title1";
    const completed = false;

    const todo = state.add({ title, completed })!;

    expect(todo).toBeDefined();
    expect(state.todos.size).toBe(1);

    expect(todo.title).toBe(title);
    expect(todo.completed).toBe(completed);
  });

  test("todo remove", () => {
    const todos = new Map();
    const id = crypto.randomUUID();
    const title = "title1";
    const completed = false;
    todos.set(id, { id, title, completed });

    const state = new TodoState({ filter: "all", todos });

    const prevSize = state.todos.size;

    state.remove({ id });

    expect(state.todos.size).toBe(prevSize - 1);
  });
});
