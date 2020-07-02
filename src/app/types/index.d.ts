export interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

export interface ProjectGroup {
    id: string;
    name: string;
    todos: Todo[];
}