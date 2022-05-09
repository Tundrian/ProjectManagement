import './assets/css/main.css';
import Nav from './components/Nav'
import ProjectCard from './components/ProjectCard';
import {useState, useEffect} from 'react'

function App() {
  const [projects, setProjects] = useState([{
    title: 'Project 1',
    description: 'This is a demo project',
    client: 'Demo client 1'
  }])
  
  return (
   <>
   <Nav />
    <h1>Demo App</h1>
    { projects.length !== 0 && 
        projects.map((project, index) => {
          return <ProjectCard project={project} key={index} />
        })
    }
   </>
  );
}

export default App;
