import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

interface Todo {
    title: string,
    completed: boolean
}

@Injectable()
export class TodoService {
    private todos: Todo[] = [];

    public todo$ = new BehaviorSubject(this.todos);

    addTodo(todo: Todo) {
        this.todos = [...this.todos, todo];
        this.todo$.next(this.todos);
    }

}