import { globalTodoProxy } from "@/state/todo/todoState";
import { Filter } from "@/types/todo/todoType";
import { FormEvent } from "react";

function TodoFilter() {
  const handleChange = (e: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    const filter = Object.fromEntries(formData).filter as Filter;

    globalTodoProxy.setFilter({ filter });
  };

  return (
    <form onChange={handleChange}>
      <label>
        <input type="radio" name="filter" value="all" />
        전체
      </label>
      <label>
        <input type="radio" name="filter" value="completed" />
        완료
      </label>
      <label>
        <input type="radio" name="filter" value="incompleted" />
        미완료
      </label>
    </form>
  );
}

export default TodoFilter;
