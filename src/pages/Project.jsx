import { useParams } from 'react-router-dom';
import projects from '../assets/json/projects.json'

function Project (){
    const projectName = useParams();
    const project = projects[projectName];
    return
}

export default Project;