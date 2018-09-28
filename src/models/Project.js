import { observable, computed, action, decorate } from "mobx";

import Milestone from './Milestone';

class Project {
    name;
    description;
    budget;
    startDate;
    endDate;
    milestones = [];

    constructor(data){
        this.name = data.name;
        this.description = data.description;
        this.startDate = data.startDate;
        this.endDate = data.endDate;
        data.projectMilestones.forEach( milestoneData => {
            this.milestones.push(new Milestone(milestoneData));
        });
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