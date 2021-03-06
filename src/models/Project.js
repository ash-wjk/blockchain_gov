import { observable, computed, action, decorate } from "mobx";
import moment from 'moment';

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
        const milestonesSortbyDate = this.milestones.sort((a,b) => 
        a.completionDate - b.completionDate);
        let counter = 0;
        milestonesSortbyDate.forEach(milestone => {
            if(milestone.completionDate){
                counter++;
                const date = moment(milestone.completionDate).format('Do MMM');
                const cp = (counter/this.milestones.length) * 100
               const dataPoint =  {name: date ,pv: Math.round(cp * 10) / 10 };
               data.push(dataPoint);
            }
        })

        return data;
    }

    get expensesGraphData(){
        const data = [];
        const expendituresSortbyDate = this.expenditures.sort((a,b) => 
        a.date - b.date);
        expendituresSortbyDate.forEach(expenditure => {
            const date = moment(expenditure.date).format('Do MMM');
            const dataPoint =  {name: date ,pv: parseFloat(expenditure.amount)};
            data.push(dataPoint);
        })

        return data;
    }

    get remainingBudgetGraphData(){
        const data = [];
        const expendituresSortbyDate = this.expenditures.sort((a,b) => 
        a.date - b.date);
        let cumExpences = 0; 
        expendituresSortbyDate.forEach(expenditure => {
            cumExpences += parseFloat(expenditure.amount);
            const date = moment(expenditure.date).format('Do MMM');
            const dataPoint =  {name: date ,uv: parseFloat(this.budget - cumExpences)};
            data.push(dataPoint);
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
    completionGraphData: computed,
    expensesGraphData: computed,
    remainingBudgetGraphData: computed
})

export default Project;