import { action, decorate } from "mobx";
const axios = require('axios');

const BASE_URL = process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3001' 
    :'https://gov-project-chain.herokuapp.com';
const ADD_PROJECT = `${BASE_URL}/addProject`;
const ADD_EXPENDITURE = `${BASE_URL}/addExpenditure`;
const ADD_MILESTONE = `${BASE_URL}/addMilestone`;

const GET_PROJECTS = `${BASE_URL}/projects`;
const GET_PROJECT_DATA = `${BASE_URL}/projectData`;

class LedgerStore {

    projectsStoreRef;

    constructor(projectsStoreRef) {
        this.projectsStoreRef = projectsStoreRef;
    }

    addProject = data => {
        console.log(data);
        axios.post(ADD_PROJECT, data)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
    }

    addExpenditure = data => {
        const projectId = this.projectsStoreRef.currentProject.id;
        const id = Date.now();
        const expenditureData = {
            id,
            projectId,
            ...data
        }
        console.log(expenditureData);
        axios.post(ADD_EXPENDITURE, expenditureData)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
    }

    addMilestone = data => {
        const projectId = this.projectsStoreRef.currentProject.id;
        const milestoneData = {
            projectId,
            ...data
        }
        axios.post(ADD_MILESTONE, milestoneData)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
    }

    getProjects = () => {
        axios.get(GET_PROJECTS)
        .then(response => {
            console.log(response);
            this.projectsStoreRef.projectsList =  response.data;  
        })
        .catch(error => {
            console.log(error);
        })
    }

    getProjectData = () => {
        const projectId = this.projectsStoreRef.currentProject.id;
        const url = `${GET_PROJECT_DATA}/${projectId}`
        axios.get(url)
        .then(response => {
            console.log(response);
            this.projectsStoreRef.setCurrentProject(response.data)
        })
        .catch(error => {
            console.log(error);
        })
    }
}

decorate(LedgerStore, {
    addProject: action,
    getProjects: action,
})

export default LedgerStore