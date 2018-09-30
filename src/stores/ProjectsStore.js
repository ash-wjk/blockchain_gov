import { observable, computed, action, decorate } from "mobx";

import Project from '../models/Project';

class ProjectStore {
    projectsList = [];
    currentProject;
    
    setCurrentProject = projectData => {
        this.currentProject = new Project(projectData);
    }
}

decorate(ProjectStore, {
    projectsList: observable,
    currentProject: observable,
    setCurrentProject: action,
})

export default ProjectStore;