import { observable, computed, action, decorate } from "mobx";

class Expenditure {
    id;
    amount;
    description;
    date;

    constructor(data){
        this.id = data.id;
        this.amount = data.amount;
        this.description = data.description;
        this.date = data.date;
    }
}

decorate(Expenditure, {
    id: observable,
    amount: observable,
    description: observable,
    date: observable
})

export default Expenditure;