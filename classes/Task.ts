export default class Task {
    public name: string;
    public html: HTMLDivElement;
    public id: number;
    public btnCheck: HTMLButtonElement;
    public btnRemove: HTMLButtonElement;
    public isChecked: boolean;
    constructor(name: string, html: HTMLDivElement, id: number, btnCheck: HTMLButtonElement, btnRemove: HTMLButtonElement, isChecked: boolean) {
        this.name = name;
        this.html = html;
        this.id = id;
        this.btnCheck = btnCheck;
        this.btnRemove = btnRemove;
        this.isChecked = isChecked;
    }   
}