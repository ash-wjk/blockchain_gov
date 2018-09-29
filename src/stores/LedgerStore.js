import { observable, computed, action, decorate } from "mobx";
const axios = require('axios');

const BASE_URL = 'http://localhost:3001';
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
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
    }

}

decorate(LedgerStore, {
    addProject: action,
})

export default LedgerStore