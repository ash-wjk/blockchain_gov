// Import Stores
import ProjectsStore from './ProjectsStore';
import LedgerStore from './LedgerStore';

// Initialize stores
const projects = new ProjectsStore();
const ledger = new LedgerStore(projects);

// Export stores
export default {
    projects,
    ledger
};
