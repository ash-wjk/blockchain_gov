import { observable, computed, action, decorate } from "mobx";

class Milestone {
    id;
    name;
    completionDate;
    completed;

    constructor(data){
        this.id = data.id;
        this.name = data.text;
        this.completionDate = data.completionDate;
        this.completed = (data.completionDate !== undefined);
    }
}

decorate(Milestone, {
    id: observable,
    name: observable,
    completionDate: observable,
    completed: observable,
})

export default Milestone;