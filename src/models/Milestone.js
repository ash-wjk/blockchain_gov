import { observable, computed, action, decorate } from "mobx";

class Milestone {
    id;
    name;
    completionDate;

    constructor(data){
        this.id = data.key;
        this.name = data.text;
        this.completionDate = undefined;
    }
}

decorate(Milestone, {
    id: observable,
    name: observable,
    completionDate: observable
})

export default Milestone;