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
        this.id = data.id;
        this.budget = data.budget;
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

    get completionPrecentage(){
        const noOfCompletedMilestones = this.milestones.length - this.incompleteMilestones.length;
        return (noOfCompletedMilestones/this.milestones.length) * 100;
    }

    get totalExpences(){
        let total = 0;
        this.expenditures.forEach(expenditure => {
            total += parseFloat(expenditure.amount);
        });

        return total;
    }

    get expencesPrecentage(){
        return (this.totalExpences/this.budget) * 100;
    }

    get remainingBudget(){
        return this.budget - this.totalExpences;
    }


    get remainingBudgetPrecentage(){
        return (this.remainingBudget/this.budget) * 100;
    }

    get completionGraphData(){
        const data = [];
        this.milestones.forEach(milestone => {
            if(milestone.completionDate){
               const dataPoint =  {name: 'Jul' ,pv: 6400, amt: 2400};
               data.push(dataPoint);
            }
        })

        return data;
    }


}

decorate(Project, {
    name: observable,
    description: observable,
    budget:observable,
    startDate:observable,
    endDate:observable,
    milestones:observable,
    incompleteMilestones: computed,
    completionPrecentage: computed,
    totalExpences: computed,
    expencesPrecentage: computed,
    remainingBudget: computed,
    remainingBudgetPrecentage: computed,
    completionGraphData: computed
})

export default Project;