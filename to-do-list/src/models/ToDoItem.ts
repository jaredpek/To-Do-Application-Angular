import { generateId } from "../lib/util";

export class ToDoItem {
    id: string;
    name: string;
    created: Date;
    completed: boolean;

    constructor(name: string) {
        this.id = generateId();
        this.name = name;
        this.created = new Date();
        this.completed = false;
    }
}