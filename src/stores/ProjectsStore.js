import { observable, decorate } from 'mobx';

class ProjectStore {
    projectsList = [];
    currentProject = 'My Project';
    
}

decorate(ProjectStore, {
    projectsList: observable,
    currentProject: observable
})

export default ProjectStore;