export default class Task {
    constructor(name, html, id, btnCheck, btnRemove, isChecked) {
        this.name = name;
        this.html = html;
        this.id = id;
        this.btnCheck = btnCheck;
        this.btnRemove = btnRemove;
        this.isChecked = isChecked;
    }
}
