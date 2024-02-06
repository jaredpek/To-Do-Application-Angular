export class ToDoItem {
    name: string;
    completed: boolean;
    created: Date;

    constructor(name: string) {
        this.name = name;
        this.completed = false;
        this.created = new Date();
    }
}
