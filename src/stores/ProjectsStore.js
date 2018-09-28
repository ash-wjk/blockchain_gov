import { observable, computed, action, decorate } from "mobx";

import Project from '../models/Project';

class ProjectStore {
    projectsList = [];
    currentProject = 'My Project';

    addProject = projectData => {
        const project = new Project(projectData);
        console.log('Project Added', project);
        this.projectsList.push(project);
    }
    
}

decorate(ProjectStore, {
    projectsList: observable,
    currentProject: observable
})

export default ProjectStore;