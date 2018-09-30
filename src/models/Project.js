import { observable, computed, action, decorate } from "mobx";

import Milestone from './Milestone';
import Expenditure from './Expenditure';

class Project {
    id;
    name;
    description;
    budget;
    startDate;
    endDate;
    expenditures = [];
    milestones = [];


    constructor(data){
        this.id = data.id,
        this.name = data.name;
        this.description = data.description;
        this.startDate = data.startDate;
        this.endDate = data.endDate;

        if(data.expenditures){
            data.expenditures.forEach(expenditureData => {
                this.expenditures.push(new Expenditure(expenditureData))
            });
        }
        
        if(data.milestones){
            data.milestones.forEach( milestoneData => {
                this.milestones.push(new Milestone(milestoneData));
            });
        }

    }

    get incompleteMilestones(){
        return this.milestones.filter(milestone => !milestone.completed );
    }


}

decorate(Project, {
    name: observable,
    description: observable,
    budget:observable,
    startDate:observable,
    endDate:observable,
    milestones:observable,
    incompleteMilestones: computed
})

export default Project;