import { create } from 'zustand';
import { Todo } from './App';

interface Todos {
  todos: Todo[];
  updateTodos: (newTodos: Todo[]) => void;
  addTodo: (newTodo: Todo) => void;
  editArray: (newTodo: Todo, title: string, date: string) => void;
  checkDoneStatus: (id: number) => void;
  deleteTodo: (id: number) => void;
}
export const useTodos = create<Todos>()((set) => ({
  todos: [],
  updateTodos: (newTodos) => {
    set({ todos: newTodos });
  },
  addTodo: (newTodo) => {
    set((state) => ({
      todos: [...state.todos, newTodo],
    }));
  },
  editArray: (newTodo: Todo, title: string, date: string) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === newTodo.id
          ? { ...todo, title: title, due_date: date }
          : todo,
      ),
    }));
  },
  checkDoneStatus: (id) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    }));
  },
  deleteTodo: (id) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  },
}));

interface FormInput {
  title: string;
  date: string;
  updateTitle: (newTitle: string) => void;
  updateDate: (newDate: string) => void;
  handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const useForm = create<FormInput>()((set) => ({
  title: '',
  date: '',
  updateTitle: (newTitle) => {
    set({ title: newTitle });
  },
  updateDate: (newDate) => {
    set({ date: newDate });
  },
  handleTitleChange: (e) => {
    set(() => ({
      title: e.target.value,
    }));
  },
  handleDateChange: (e) => {
    set(() => ({
      date: e.target.value,
    }));
  },
}));

interface CurrentTodo {
  currentTodo: Todo;
  isEditing: boolean;
  updateCurrentTodo: (newCurrentTodo: Todo) => void;
  updateEdit: (editStatus: boolean) => void;
}
export const useCurrentTodo = create<CurrentTodo>()((set) => ({
  currentTodo: { id: 0, title: '', context: '', due_date: '', done: false },
  isEditing: false,
  updateCurrentTodo: (newCurrentTodo) => set({ currentTodo: newCurrentTodo }),
  updateEdit: (editStatus) => set({ isEditing: editStatus }),
}));

interface Sort {
  sort: string;
  updateSort: (sortStatus: string) => void;
}
export const useSort = create<Sort>()((set) => ({
  sort: 'none',
  updateSort: (sortStatus) => set({ sort: sortStatus }),
}));

interface Error {
  error: string;
  updateError: (newError: string) => void;
}
export const useError = create<Error>()((set) => ({
  error: '',
  updateError: (newError) => set({ error: newError }),
}));
