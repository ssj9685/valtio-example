export type ValueOf<T> = T[keyof T];

export const FILTER = {
  all: "all",
  completed: "completed",
  incompleted: "incompleted",
} as const;

export type Filter = ValueOf<typeof FILTER>;

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}