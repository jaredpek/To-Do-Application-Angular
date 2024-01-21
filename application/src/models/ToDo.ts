export class ToDo {
    created: Date;
    entry: string;
    completed: boolean;

    constructor(entry: string, created?: Date, completed?: boolean) {
        this.entry = entry;
        this.created = created || new Date();
        this.completed = completed || false;
    }
}