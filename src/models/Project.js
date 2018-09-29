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
    milestones = [];
    expenditures = [];


    constructor(data){
        this.id = data.id,
        this.name = data.name;
        this.description = data.description;
        this.startDate = data.startDate;
        this.endDate = data.endDate;
        
        if(data.projectMilestones){
            data.projectMilestones.forEach( milestoneData => {
                this.milestones.push(new Milestone(milestoneData));
            });
        }

        if(data.projectExpenditures){
            data.projectExpenditures.forEach(expenditureData => {
                this.expenditures.push(new Expenditure(expenditureData))
            });
        }
    }
}

decorate(Project, {
    name: observable,
    description: observable,
    budget:observable,
    startDate:observable,
    endDate:observable,
    milestons:observable
})

export default Project;